import colors from "../common/colors";
import { font } from "../common/styles";
import { logos } from "../images/common";
import { useData } from "../utils";

const rewardData = {
  username: "John Doe",
  link: "https://beta.aviyel.com",
  projects: "Typesense, BoxyHQ and Tolgee",
};

function RewardsBadgeUnlocked() {
  return (
    <mjml>
      <mj-head>
        <mj-attributes>
          <mj-text padding="0" line-height="1.5" />
          <mj-all font-family={font} />
          <mj-table table-layout="auto" padding="0px" cellpadding="0px" />
        </mj-attributes>
      </mj-head>
      <mj-body background-color={colors.white}>
        <mj-section
          background-color={colors.yellow[3]}
          padding="40px 0px 30px 0px"
        >
          <mj-column>
            <mj-image src={logos.aviyel} width="122px" padding-top="30px" />
            <mj-image
              src="https://beta.aviyel.com/assets/uploads/static/new-badge.png"
              width="370px"
              align="center"
            />
          </mj-column>
        </mj-section>
        <mj-section padding="30px">
          <mj-text font-size="14px" color={colors.grey[2]}>
            Hey {useData("username", rewardData.username)},
          </mj-text>
          <mj-spacer height="16px" />
          <mj-text font-size="14px" color={colors.grey[2]}>
            You’ve been awarded with brand new badges for your latest
            contributions to{" "}
            <span style="font-weight:600">
              {useData("projects", rewardData.projects)}.
            </span>
            <br />
            <br />
            Showcase your Badge of honor by sharing it with the world!
          </mj-text>
          <mj-spacer height="16px" />
          <mj-button
            background-color={colors.primary.main}
            border-radius="4px"
            padding="0px"
            target="_blank"
            rel="noreferrer"
            href={useData("claim_link", rewardData.link)}
            align="left"
            font-size="16px"
            font-weight="600"
          >
            Claim your Badges!
          </mj-button>
          <mj-spacer height="16px" />
          <mj-text font-size="14px" color={colors.grey[2]}>
            You can mint them as non-transferrable NFTs and share it with the
            world!
          </mj-text>
          <mj-spacer height="16px" />
          <mj-text font-size="14px" font-weight="600" color={colors.grey[2]}>
            Keep contributing and keep building!
          </mj-text>
          <mj-spacer height="16px" />
          <mj-text font-size="14px" color={colors.grey[2]}>
            Team Aviyel
          </mj-text>
        </mj-section>
        <mj-section>
          <mj-divider
            padding="4px 0px"
            border-width="1px"
            border-color={colors.grey[6]}
          />
        </mj-section>
        <mj-section>
          <mj-table>
            <tr>
              <td>
                <mj-image
                  src="data:image/svg+xml,%3Csvg width='24' height='25' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect y='.92' width='24' height='24' rx='12' fill='%232A96EB'/%3E%3Cpath d='M19.76 8.2c-.55.25-1.15.42-1.78.5.65-.4 1.13-1 1.36-1.72a6.2 6.2 0 0 1-1.97.75 3.1 3.1 0 0 0-5.29 2.83 8.82 8.82 0 0 1-6.4-3.24 3.1 3.1 0 0 0 .96 4.14 3.1 3.1 0 0 1-1.4-.38v.04a3.1 3.1 0 0 0 2.48 3.04 3 3 0 0 1-1.4.05 3.1 3.1 0 0 0 2.9 2.16 6.23 6.23 0 0 1-4.6 1.29 8.78 8.78 0 0 0 4.76 1.4c5.72 0 8.84-4.74 8.84-8.84v-.4c.6-.44 1.12-.99 1.54-1.61Z' fill='%23fff'/%3E%3C/svg%3E"
                  alt="twitter"
                  target="_blank"
                  rel="noreferrer"
                  width="24px"
                  href="https://twitter.com/aviyelHQ"
                />
              </td>
              <td>
                <mj-image
                  src="data:image/svg+xml,%3Csvg width='24' height='25' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect y='.92' width='24' height='24' rx='12' fill='%230477B5'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M10.46 11.08h2.23v1.1c.32-.63 1.14-1.2 2.38-1.2 2.37 0 2.93 1.27 2.93 3.6v4.33h-2.4v-3.8c0-1.32-.32-2.08-1.14-2.08-1.13 0-1.6.81-1.6 2.09v3.8h-2.4v-7.84ZM6.34 18.8h2.4v-7.84h-2.4v7.84ZM9.1 8.41a1.53 1.53 0 0 1-.95 1.45 1.55 1.55 0 0 1-2.03-.85 1.53 1.53 0 0 1 .35-1.66A1.55 1.55 0 0 1 9.1 8.42Z' fill='%23fff'/%3E%3C/svg%3E"
                  alt="linkedin"
                  target="_blank"
                  rel="noreferrer"
                  width="24px"
                  href="https://twitter.com/aviyelHQ"
                />
              </td>
              <td>
                <mj-image
                  src="data:image/svg+xml,%3Csvg width='24' height='25' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23a)'%3E%3Cpath d='M12 .915c-6.75 0-12 5.25-12 12 0 7.875 7.125 11.25 8.25 11.25.75 0 .75-.375.75-.75V21.54c-2.625.75-3.75-.75-4.125-1.875 0 0 0-.375-.75-1.125-.375-.375-1.875-1.125-.375-1.125 1.125 0 1.875 1.5 1.875 1.5 1.125 1.5 2.625 1.125 3.375.75 0-.75.75-1.5.75-1.5-3-.375-5.25-1.5-5.25-5.625 0-1.5.375-2.625 1.125-3.375 0 0-.75-1.5 0-3.375 0 0 1.875 0 3.375 1.5 1.125-.75 4.875-.75 6 0 1.5-1.5 3.375-1.5 3.375-1.5.75 2.625 0 3.375 0 3.375.75.75 1.125 1.875 1.125 3.375 0 4.125-2.625 5.25-5.25 5.625.375.375.75 1.125.75 2.25v3c0 .375 0 .75.75.75 1.125 0 8.25-3.375 8.25-11.25 0-6.75-5.25-12-12-12Z' fill='%23000'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='a'%3E%3Cpath fill='%23fff' transform='translate(0 .915)' d='M0 0h24v24H0z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E"
                  alt="github"
                  target="_blank"
                  rel="noreferrer"
                  width="24px"
                  href="https://twitter.com/aviyelHQ"
                />
              </td>
              <td>
                <mj-image
                  src="data:image/svg+xml,%3Csvg width='24' height='25' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23a)'%3E%3Cpath d='M12 .915c-6.624 0-12 5.376-12 12s5.376 12 12 12 12-5.376 12-12-5.376-12-12-12Zm-2.4 16.2v-8.4a.6.6 0 0 1 .96-.48l5.604 4.2c.324.24.324.72 0 .96l-5.604 4.2a.5993.5993 0 0 1-.6283.0567.5996.5996 0 0 1-.3317-.5367Z' fill='%23FF5252'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='a'%3E%3Cpath fill='%23fff' transform='translate(0 .915)' d='M0 0h24v24H0z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E"
                  alt="youtube"
                  target="_blank"
                  rel="noreferrer"
                  width="24px"
                  href="https://twitter.com/aviyelHQ"
                />
              </td>
              <td>
                <mj-image
                  src="data:image/svg+xml,%3Csvg width='24' height='25' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23a)'%3E%3Crect y='.92' width='24' height='24' rx='12' fill='%235165F6'/%3E%3Cpath d='M16.86 8.75c-.92-.4-1.89-.68-2.89-.83-.12.2-.27.48-.37.7a11.5 11.5 0 0 0-3.2 0 7.28 7.28 0 0 0-.37-.7c-1 .15-1.98.44-2.9.83a10.52 10.52 0 0 0-2.07 7.49c1.07.74 2.27 1.31 3.54 1.67.29-.36.54-.75.76-1.15a7.76 7.76 0 0 1-1.2-.54l.3-.2c2.3.98 4.8.98 7.08 0l.3.2c-.38.22-.79.4-1.2.54.21.4.47.8.76 1.15a11.9 11.9 0 0 0 3.54-1.67c.3-2.84-.5-5.3-2.08-7.49Zm-7.19 5.98c-.69 0-1.25-.6-1.25-1.32 0-.72.55-1.32 1.25-1.32s1.28.6 1.26 1.32c0 .73-.55 1.32-1.26 1.32Zm4.66 0c-.7 0-1.26-.6-1.26-1.32 0-.72.55-1.32 1.26-1.32.7 0 1.27.6 1.25 1.32 0 .73-.55 1.32-1.25 1.32Z' fill='%23fff'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='a'%3E%3Cpath fill='%23fff' transform='translate(0 .92)' d='M0 0h24v24H0z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E"
                  alt="discord"
                  target="_blank"
                  rel="noreferrer"
                  width="24px"
                  href="https://twitter.com/aviyelHQ"
                />
              </td>
              <td>
                <mj-image
                  src="data:image/svg+xml,%3Csvg width='24' height='25' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23a)'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M24 12.91a12 12 0 1 1-24 0 12 12 0 0 1 24 0Zm-4.31-.94c.2.28.3.6.31.94a1.75 1.75 0 0 1-.97 1.6c.02.18.02.35 0 .53 0 2.69-3.13 4.87-7 4.87-3.86 0-6.99-2.18-6.99-4.87a3.44 3.44 0 0 1 0-.53 1.75 1.75 0 1 1 1.93-2.87 8.58 8.58 0 0 1 4.68-1.47L12.54 6a.37.37 0 0 1 .44-.28l2.94.58a1.2 1.2 0 1 1-.15.74L13.2 6.5l-.78 3.74c1.65.03 3.25.55 4.62 1.47a1.75 1.75 0 0 1 2.65.26ZM8.2 13.45a1.2 1.2 0 1 0 2 1.33 1.2 1.2 0 0 0-2-1.33Zm3.8 4.89a4.57 4.57 0 0 0 2.97-.88.34.34 0 1 0-.47-.48 3.9 3.9 0 0 1-2.51.73c-.9.04-1.77-.22-2.5-.75a.32.32 0 0 0-.45.45c.85.65 1.9.97 2.96.93Zm2.08-3.18c.2.13.42.25.66.25a1.2 1.2 0 0 0 1.21-1.25 1.2 1.2 0 1 0-1.87 1Z' fill='%23FF4019'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='a'%3E%3Cpath fill='%23fff' transform='translate(0 .92)' d='M0 0h24v24H0z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E"
                  alt="reddit"
                  target="_blank"
                  rel="noreferrer"
                  width="24px"
                  href="https://twitter.com/aviyelHQ"
                />
              </td>
            </tr>
          </mj-table>
        </mj-section>
      </mj-body>
    </mjml>
  );
}

export { RewardsBadgeUnlocked };
