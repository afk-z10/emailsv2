import { grey, purple } from "../common/colors";
import { eventData, userData } from "../dummyData/event";
import { RawIf, Loop, useData } from "../utils";
import { SectionTitle } from "./common";

function ViewEventLink() {
  return (
    <mj-button
      background-color={purple.primary}
      border-radius="4px"
      padding="0px"
      href={useData("event_link", eventData.link)}
      align="left"
    >
      View Event
    </mj-button>
  );
}

function Speaker({ speaker }) {
  return (
    <tr>
      <td width="40px" height="40px">
        <img
          src={useData("this.picture", speaker.picture)}
          alt=""
          style="width:100%;height:100%;border-radius:50%;"
        />
      </td>
      <td style="padding-left:12px;" valign="baseline">
        <div style={`font-size:14px;font-weight:500;color:${grey[1]}`}>
          {useData("this.name", speaker.name)}
        </div>
        <div style={`font-size:12px;color:${grey[3]}`}>
          {useData("this.bio", speaker.title)}
        </div>
      </td>
    </tr>
  );
}

function SpeakersListStyles() {
  return (
    <mj-style>
      {`
  .speakers table {
    border-collapse: separate;
    border-spacing: 0 1em;
  }`}
    </mj-style>
  );
}

function SpeakersList() {
  return (
    <mj-column>
      <SectionTitle>Speakers</SectionTitle>
      <mj-table css-class="speakers">
        <Loop
          data={[userData, userData]}
          name="speakers"
          render={(d) => <Speaker speaker={d} />}
        >
          <Speaker speaker={userData} />
        </Loop>
      </mj-table>
      <RawIf name="organizers.length" condition={true}>
        <SectionTitle>Organizers</SectionTitle>
        <mj-table css-class="speakers">
          <Loop
            data={[userData]}
            name="organizers"
            render={(d) => <Speaker speaker={d} />}
          >
            <Speaker speaker={userData} />
          </Loop>
        </mj-table>
      </RawIf>
    </mj-column>
  );
}

export { ViewEventLink, SpeakersList, SpeakersListStyles };
