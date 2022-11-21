import colors from "../common/colors";
import { font } from "../common/styles";
import { EventCard } from "../components/eventcard";
import { logos } from "../images/common";
import { useData } from "../utils";

function WorkflowEventInvite() {
  return (
    <mjml style="background: #F6F6F9">
      <mj-head>
        <mj-attributes>
          <mj-text padding="0" line-height="1.5" />
          <mj-all font-family={font} />
          <mj-table table-layout="auto" padding="0px" cellpadding="0px" />
          <mj-image padding="0px" />
        </mj-attributes>
      </mj-head>
      <mj-body background-color="#F6F6F9">
        <mj-section padding="32px" background-color={colors.white}>
          <mj-section padding="8px 0px">
            <mj-column>
              <mj-image
                align="left"
                src={useData("project_logo", "https://placeimg.com/44/44/tech")}
                height="44px"
                width="44px"
              />
            </mj-column>
            <mj-column>
              <mj-image
                align="right"
                src={logos.aviyel_small}
                height="24px"
                width="24px"
              />
            </mj-column>
          </mj-section>

          {/* Divider */}
          <mj-spacer height="12px" />
          <mj-divider border-color={colors.grey[6]} border-width="1px" />

          <mj-spacer height="12px" />
          <mj-text color={colors.grey[1]} font-size="16px">
            We are delighted to announce our next event Event Name.
            <br />
            <br />
            We at Project Name believe that the event will be able to add value
            to your journey with us.
            <br />
            <br />
            Come join the community on {useData("event_time", "Date, Time")}.
            <br />
            <br />
            We’ll be there, hoping to see you as well!
          </mj-text>

          {/* Divider */}
          <mj-spacer height="12px" />
          <mj-divider border-color={colors.grey[6]} border-width="1px" />

          <mj-spacer height="12px" />

          <EventCard />
        </mj-section>
      </mj-body>
    </mjml>
  );
}

export default WorkflowEventInvite;
