import { useData } from "../utils";
import { font } from "../common/styles";
import colors from "../common/colors";
import { logos } from "../images/common";

const projectData = {
  name: "Typesense",
  username: "John Doe",
  logo: "https://placeimg.com/90/90/tech",
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
        <mj-section background-color={colors.primary.subtle} padding="40px 0px">
          <mj-column>
            <mj-image src={logos.aviyel} width="122px" padding="30px 0px" />
            <mj-text
              align="center"
              font-size="18px"
              font-weight="500"
              color={colors.grey[1]}
            >
              Thanks for submitting the project!
            </mj-text>
            <mj-image
              padding-top="24px"
              padding-bottom="16px"
              width="90px"
              border-radius="16px"
              src={useData("icon", projectData.logo)}
            />
            <mj-text
              align="center"
              font-size="22px"
              font-weight="600"
              color={colors.grey[1]}
            >
              {useData("name", projectData.name)}
            </mj-text>
          </mj-column>
        </mj-section>
        <mj-section padding="40px 30px">
          <mj-text font-size="14px" color={colors.grey[2]}>
            Hey {useData("username", projectData.username)},
          </mj-text>
          <mj-spacer height="16px" />
          <mj-text font-size="16px" font-weight="600" color={colors.grey[2]}>
            Thanks for submitting the project{" "}
            {useData("name", projectData.name)}.
          </mj-text>
          <mj-spacer height="16px" />
          <mj-text font-size="14px" color={colors.grey[2]}>
            Next, our team will look into the project and evaluate it. We will
            check the project's key maintainers (owners) and set up a call with
            them. In the call, we will verify the maintainers and discuss
            further steps of publishing the project on Aviyel and utilising the
            platform to grow the project community.
            <br />
            <br />
            If you are the maintainer, you will soon hear from us. If not, we
            thank you for taking this step to list your project on the platform.
            <br />
            <br />
            Let us know if you have any more ideas to discuss.
            <br />
            <br />
            Team Aviyel
          </mj-text>
        </mj-section>
        <mj-section>
          <mj-divider
            padding="4px 0px"
            border-width="1px"
            border-color={colors.grey[6]}
          />
        </mj-section>
      </mj-body>
    </mjml>
  );
}

export { ProjectSubmitted };
