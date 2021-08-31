import { grey, orange } from "../common/colors";
import { eventData } from "../dummyData/event";
import { logos } from "../images/common";
import { useData } from "../utils";

function EventCard() {
  return (
    <mj-column
      width="100%"
      padding="16px"
      border={`1px solid ${grey[6]}`}
      border-radius="4px"
    >
      <mj-table>
        <tr>
          <td
            valign="baseline"
            style={`font-size:18px;font-weight:600;color:${grey[1]};padding-right:12px;`}
          >
            {useData("title", eventData.title)}
          </td>
          <td width="64px">
            <img
              src={useData("image", eventData.eventLogo)}
              height="64px"
              width="64px"
              style="border-radius:4px;"
            />
          </td>
        </tr>
      </mj-table>
      <mj-table table-layout="auto">
        <tr>
          <td valign="baseline">
            <span
              style={`font-size:16px;font-weight:600;color:${orange[1]};vertical-align:middle;`}
            >
              {useData("time", eventData.timeText)}
            </span>
            <img
              src={logos.duration}
              width="16px"
              style="padding:0px 4px 0px 12px;vertical-align:middle;"
            />
            <span
              style={`font-size:12px;color:${grey[3]};vertical-align:middle;`}
            >
              {useData("duration", eventData.duration)}
            </span>
          </td>
        </tr>
      </mj-table>
    </mj-column>
  );
}

export { EventCard };
