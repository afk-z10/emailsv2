import { EventCard } from "../components/eventcard";
import { Footer } from "../components/footer";
import {
  SpeakersList,
  SpeakersListStyles,
  ViewEventLink,
} from "../components/events-common";
import { useData } from "../utils";
import { font } from "../common/styles";
import { grey, white } from "../common/colors";
import { GetInTouch, HeaderLogo } from "../components/common";
import { WhatIsAviyel } from "../components/what-is-aviyel";

const eventData = {
  username: "John Doe",
  title:
    "Webinar : AI & ML, Containers & Cloud Native Online Developer Summit Replays",
  link: "https://beta.aviyel.com/events/212/backstage_message_test",
  eventLogo:
    "https://beta.aviyel.com/assets/uploads/files/1629179524523-raccoon.jpeg",
  timeText: "17 April, 2021 - 2:30 PM",
  duration: "1 hr 45 min",
  inviter: "Dilip",
};

function EventAddSpeaker() {
  return (
    <mjml>
      <mj-head>
        <mj-attributes>
          <mj-text padding="0" line-height="1.5" />
          <mj-all font-family={font} />
          <mj-table table-layout="auto" padding="0px" cellpadding="0px" />
        </mj-attributes>
        <SpeakersListStyles />
      </mj-head>
      <mj-body background-color="whitesmoke">
        <mj-wrapper background-color={white} padding="30px 0px">
          <mj-section padding="0px 30px">
            <mj-column>
              <HeaderLogo />
              <mj-spacer height="28px" />
              <mj-text color={grey[2]} font-size="14px">
                <p>
                  Hey{" "}
                  <span style="font-weight: 600">
                    {useData("name", eventData.username)},
                  </span>
                  <br />
                  <br />
                  {useData("inviter", eventData.inviter)} from Aviyel has
                  invited you to be a speaker/organizer of the event “
                  <span style="font-weight: 600">
                    {useData("title", eventData.title)}
                  </span>
                  ” We are super excited to see you on the event.
                </p>
              </mj-text>
              <mj-spacer height="28px" />
              <ViewEventLink />
            </mj-column>
          </mj-section>
          <mj-section padding="30px">
            <EventCard />
          </mj-section>
          <mj-section padding="0px 30px">
            <SpeakersList />
          </mj-section>
          <mj-section padding="0px 30px">
            <mj-column>
              <mj-spacer height="20px" />
              <ViewEventLink />
              <mj-divider
                padding="20px 0px 0px 0px"
                border-width="1px"
                border-color={grey[6]}
              />
              <mj-spacer height="20px" />
            </mj-column>
          </mj-section>
          <mj-section padding="0px 30px">
            <GetInTouch />
          </mj-section>
        </mj-wrapper>
        <mj-section padding="4px 0px">
          <Footer />
        </mj-section>
      </mj-body>
    </mjml>
  );
}

export { EventAddSpeaker };
