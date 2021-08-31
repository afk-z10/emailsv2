import { purple } from "../../common/colors";
import { eventData } from "../../dummyData/event";
import { useData } from "../../utils";

function HowToJoin() {
  return (
    <mj-column
      background-color={purple.subtle}
      padding="20px"
      border-radius="4px"
    >
      <mj-text font-size="20px" font-weight="600" color={purple.darkest}>
        How to join the event?
      </mj-text>
      <mj-spacer height="12px" />
      <mj-text font-size="16px" font-weight="600" color={purple.darkest}>
        Visit the event detail page and click on{" "}
        <a
          href={useData("link", eventData.link)}
          target="_blank"
          style={`color:${purple.darkest}`}
        >
          Join Event
        </a>{" "}
        button!
      </mj-text>
      <mj-spacer height="8px" />
      <mj-text font-size="14px" color={purple.darkest}>
        Note : You can join about 15 minutes before the event time.
      </mj-text>
    </mj-column>
  );
}

export { HowToJoin };
