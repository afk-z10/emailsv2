import { If, useData } from "../../utils";

const ribbonColor = "#e5f0ff";
function EventType() {
  return (
    <If name="event_type">
      <td style="padding:0px 0px 12px 0px;">
        <span
          style={`padding:2px 6px;background-color:${ribbonColor};color:#004fc4;`}
        >
          {useData("event_type", "Webinar")}
        </span>
      </td>
    </If>
  );
}

export { EventType };
