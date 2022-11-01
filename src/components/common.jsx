import { grey } from "../common/colors";
import { logos } from "../images/common";

function HeaderLogo() {
  return (
    <mj-image
      padding-left="0px"
      align="left"
      src={logos.aviyel}
      width="115px"
    />
  );
}

function SectionTitle({ children }) {
  return (
    <mj-text font-size="16px" font-weight="600" color={grey[1]}>
      {children}
    </mj-text>
  );
}

function GetInTouch() {
  return (
    <mj-column>
      <mj-text font-size="12px" color={grey[3]}>
        Please feel free to get in touch with us if you need any help. mail us
        at{" "}
        <a
          href="mailto:events-support@aviyel.com"
          target="_blank"
          style={`color:${grey[1]};white-space:nowrap;`}
        >
          events-support@aviyel.com
        </a>
        <br />
        <br />
        <span style={`color:${grey[1]}`}>Sent with 💜 by Aviyel.</span>
      </mj-text>
    </mj-column>
  );
}

export { HeaderLogo, SectionTitle, GetInTouch };
