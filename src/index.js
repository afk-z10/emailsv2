const mjml2html = require("mjml");
const http = require("http");
const { html: htmlBeautify } = require("js-beautify");

import { writeFile, mkdir, rm } from "fs/promises";
import { join as pathJoin } from "path";
import { EventCancelledParticipant } from "./pages/participant-event-cancelled";
import { EventRegistered } from "./pages/participant-event-register";
import { EventReminder } from "./pages/participant-event-reminder";
import { EventUpdated } from "./pages/participant-event-updated";
import { ProjectSubmitted } from "./pages/project-submitted";
import { ProjectInviteAdmin } from "./pages/project-invite-admin";
import { EventAddSpeaker } from "./pages/speaker-add";
import { EventAddSpeakerUpdate } from "./pages/speaker-add-update";
import { EventCancelledSpeaker } from "./pages/speaker-cancel";
import { EventInviteSpeaker } from "./pages/speaker-invite";
import { EventInviteSpeakerUpdate } from "./pages/speaker-invite-update";
import { SpeakerReminder } from "./pages/speaker-reminder";
import { RewardsBadgeUnlocked } from "./pages/rewards-unlocked-badges";
import { RewardsNFTMinted } from "./pages/rewards-nft-minted";
import { CohortsExportCSV } from "./pages/cohorts-export-csv";

const OUT_DIR = pathJoin(".", "out");
function createListing() {
  return routes
    .map(({ path }) => `<div><a href="${path}">${path}</a></div>`)
    .join("\n");
}
async function build() {
  await rm(OUT_DIR, { recursive: true });

  try {
    await mkdir(OUT_DIR, {});
  } catch {}

  routes.forEach(async ({ page: Page, path }) => {
    await writeFile(
      pathJoin(OUT_DIR, `${path}.html`),
      htmlBeautify(mjml2html(<Page />).html)
    );
  });

  await writeFile(pathJoin(OUT_DIR, "index.html"), createListing());
}

async function devServer() {
  const server = http.createServer();
  server.on("request", (req, res) => {
    const route = routes.find(({ path }) => path === req.url);
    if (!route) {
      res.end(createListing());
      return;
    }

    const Page = route.page;
    writeFile(pathJoin(OUT_DIR, `${route.path}.mjml`), htmlBeautify(<Page />));
    res.end(htmlBeautify(mjml2html(<Page />).html));
  });

  server.listen(5000, () => {
    console.log(`> Running on http://localhost:5000`);
  });
}

function start() {
  const dev = process.env.ROLLUP_WATCH === "true";
  if (dev) {
    devServer();
  } else {
    build();
  }
}

const routes = [
  {
    path: "/participant-event-register",
    page: EventRegistered,
  },
  {
    path: "/participant-event-reminder",
    page: EventReminder,
  },
  { path: "/participant-event-updated", page: EventUpdated },
  {
    path: "/speaker-invite",
    page: EventInviteSpeaker,
  },
  { path: "/speaker-invite-update", page: EventInviteSpeakerUpdate },
  {
    path: "/speaker-add",
    page: EventAddSpeaker,
  },
  { path: "/speaker-add-update", page: EventAddSpeakerUpdate },
  {
    path: "/speaker-reminder",
    page: SpeakerReminder,
  },
  {
    path: "/participant-event-cancelled",
    page: EventCancelledParticipant,
  },
  {
    path: "/speaker-event-cancelled",
    page: EventCancelledSpeaker,
  },
  {
    path: "/project-submitted",
    page: ProjectSubmitted,
  },
  {
    path: "/project-invite-admin",
    page: ProjectInviteAdmin,
  },
  {
    path: "/reward-badge-unlocked",
    page: RewardsBadgeUnlocked,
  },
  {
    path: "/reward-nft-minted",
    page: RewardsNFTMinted,
  },
  {
    path: "/cohort-export-csv",
    page: CohortsExportCSV,
  },
];

start();
