import { EventCard } from "../components/eventcard";
import { Footer } from "../components/footer";
import {
  SpeakersList,
  SpeakersListStyles,
  ViewEventLink,
} from "../components/events-common";
import { eventData } from "../dummyData/event";
import { useData } from "../utils";
import { HowToJoin } from "../components/event/how-to-join";
import { grey, white } from "../common/colors";
import { font } from "../common/styles";
import { GetInTouch, HeaderLogo, SectionTitle } from "../components/common";

function EventUpdated() {
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
                  There are few updates on the event.
                </p>
              </mj-text>
              <mj-spacer height="20px" />
              <ViewEventLink />
            </mj-column>
          </mj-section>
          <mj-section padding="30px">
            <mj-column width="100%" padding="0px 0px 10px 0px">
              <SectionTitle>Updated Event Details</SectionTitle>
            </mj-column>
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
            </mj-column>
          </mj-section>
          <mj-section padding="30px">
            <HowToJoin />
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

export default EventUpdated;
