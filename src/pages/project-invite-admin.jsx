import { useData } from "../utils";
import { font } from "../common/styles";
import colors from "../common/colors";

const projectData = {
  inviter: "Cameron Williamson",
  username: "John Doe",
  projectName: "BoxyHQ",
  projectURL: "https://aviyel.com/projects/11/boxyhq",
};

function ProjectInviteAdmin() {
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
            Hey {useData("username", projectData.username)},<br />
            Hope this finds you well.
          </mj-text>
          <mj-spacer height="16px" />
          <mj-text font-size="16px" color={colors.grey[1]}>
            <span style="font-weight:600;">
              {useData("inviter", projectData.inviter)}
            </span>{" "}
            requests your help in making the{" "}
            <span style="font-weight:600;">
              {useData("project_name", projectData.projectName)}
            </span>{" "}
            community more awesome than ever - using Aviyel.
          </mj-text>
          <mj-spacer height="16px" />
          <mj-text font-size="14px" color={colors.grey[1]}>
            Aviyel is a platform for open source communities to build awesome
            stuff, share knowledge and scale up the project. Aviyel is imagined
            as a community of open source communities.
          </mj-text>
          <mj-spacer height="16px" />
          <mj-text font-size="14px" color={colors.grey[1]}>
            We highly recommend that you click on the below link to be warped to
            Aviyel. Sign up, head to{" "}
            <a
              href={useData("project_url", projectData.projectURL)}
              target="_blank"
              style={`color:${colors.primary.main}`}
            >
              {useData("project_name", projectData.projectName)} Project
            </a>{" "}
            and begin your journey. We would love to have you onboard.
          </mj-text>
          <mj-spacer height="16px" />
          <mj-button
            background-color={colors.white}
            color={colors.primary.main}
            border-radius="4px"
            border={`solid 1px ${colors.primary.main}`}
            padding="0px"
            href={useData("project_url", projectData.projectURL)}
            align="left"
            font-weight="600"
            font-size="14px"
          >
            Join Aviyel
          </mj-button>
          <mj-spacer height="16px" />
          <mj-text font-size="14px" color={colors.grey[1]}>
            Infact, it would be our pleasure to run you through the platform,
            show you how to best use Aviyel and share some of the exciting stuff
            that is soon coming up.
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

export default ProjectInviteAdmin;
