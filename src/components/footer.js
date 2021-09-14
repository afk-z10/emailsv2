import { grey, white } from "../common/colors";
import { logos } from "../images/common";
import { useData } from "../utils";

function Footer() {
  return (
    <>
      <mj-column
        width="100%"
        background-color={white}
        padding="40px 0px"
        border-radius="8px"
      >
        <mj-image src={logos.aviyel} width="115px" />
      </mj-column>
      <mj-column width="100%">
        <mj-spacer height="10px" />
        <mj-text font-size="12px" color={grey[3]} align="center">
          This e-mail has been sent to{" "}
          {useData("receiver_email", "mathew@aviyel.com")},{" "}
          <a
            href="{{{unsubscribe}}}"
            target="_blank"
            style={`color:${grey[3]}`}
          >
            click here
          </a>{" "}
          to unsubscribe.
        </mj-text>
      </mj-column>
    </>
  );
}

export { Footer };
