import { CancelledEventCard } from "../components/eventcard";
import { Footer } from "../components/footer";
import { SpeakersListStyles } from "../components/events-common";
import { eventData } from "../dummyData/event";
import { useData } from "../utils";
import { grey, red, white } from "../common/colors";
import { font } from "../common/styles";
import { GetInTouch, HeaderLogo } from "../components/common";

function EventCancelledSpeaker() {
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
                  We are sorry to let you know that{" "}
                  <span style="font-weight: 600">
                    Dilip has cancelled the event
                  </span>{" "}
                  you have planned/organize to speak. You have successfully
                  registered for the event
                </p>
              </mj-text>
              <mj-spacer height="28px" />
              <mj-text color={red[0]} font-size="18px" font-weight="600">
                Event is cancelled
              </mj-text>
            </mj-column>
          </mj-section>
          <mj-section padding="30px">
            <CancelledEventCard />
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

export { EventCancelledSpeaker };
