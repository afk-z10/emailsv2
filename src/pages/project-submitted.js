import { useData } from "../utils";
import { font } from "../common/styles";
import colors from "../common/colors";

const projectData = {
  username: "John Doe",
};

function ProjectSubmitted() {
  return (
    <mjml>
      <mj-head>
        <mj-attributes>
          <mj-text padding="0" line-height="1.5" />
          <mj-all font-family={font} />
          <mj-table table-layout="auto" padding="0px" cellpadding="0px" />
        </mj-attributes>
      </mj-head>
      <mj-body background-color={colors.white}>
        <mj-section padding="40px 30px">
          <mj-text font-size="14px" color={colors.grey[1]}>
            Hey {useData("username", projectData.username)},
          </mj-text>
          <mj-spacer height="16px" />
          <mj-text font-size="16px" font-weight="600" color={colors.grey[1]}>
            Thanks for signing up with Aviyel.
          </mj-text>
          <mj-spacer height="16px" />
          <mj-text font-size="14px" color={colors.grey[1]}>
            Aviyel is a platform for open source communities like yours to build
            awesome stuff, share knowledge and scale up your project. We imagine
            Aviyel as a community of open source communities.
          </mj-text>
          <mj-spacer height="16px" />
          <mj-text font-size="14px" color={colors.grey[1]}>
            We would love to take you through our onboarding over a screen share
            call for 30 minutes.
          </mj-text>
          <mj-spacer height="16px" />
          <mj-text font-size="14px" color={colors.grey[1]}>
            This would help us :
            <ul>
              <li>Personalise your community experience.</li>
              <li>Show you how best you can use Aviyel for your community.</li>
              <li>Share our roadmap and the stuff we are building.</li>
              <li>Get your feedback and possibly get some ideas :)</li>
            </ul>
          </mj-text>
          <mj-spacer height="16px" />
          <mj-text font-size="14px" color={colors.grey[1]}>
            Could you please reserve your time from{" "}
            <a
              href="{{ calendly_link }}"
              target="_blank"
              style={`color:${colors.primary.main}`}
            >
              here
            </a>
            ?
          </mj-text>
          <mj-spacer height="16px" />
          <mj-text font-size="14px" color={colors.grey[1]}>
            Thanks.
            <br />
            Jose Kuttan
            <br />
          </mj-text>
          <mj-text font-size="14px" color={colors.grey[3]}>
            Founder, Aviyel
          </mj-text>
        </mj-section>
      </mj-body>
    </mjml>
  );
}

export { ProjectSubmitted };
