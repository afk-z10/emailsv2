import colors from "../common/colors";
import { font } from "../common/styles";
import { logos } from "../images/common";
import { useData } from "../utils";

const cohortData = {
  username: "John Doe",
  projectName: "BoxyHQ",
  cohortName: "New Members : 30 days",
  link: "https://testnets.opensea.io/assets/mumbai/0x4f4f1d5e029dda8268b1260c3fcb07da73964cfc/10",
};

function CohortsExportCSV() {
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
        <mj-section background-color="#ECF9F3" padding="40px 30px 30px 30px">
          <mj-image src={logos.aviyel} width="122px" />
        </mj-section>
        <mj-section padding="30px">
          <mj-text font-size="14px" color={colors.grey[2]}>
            Hey {useData("username", cohortData.username)},
          </mj-text>
          <mj-spacer height="16px" />
          <mj-text font-size="14px" font-weight="600" color={colors.grey[2]}>
            Greetings from Aviyel!
          </mj-text>
          <mj-text font-size="14px" color={colors.grey[2]}>
            We bring you insights from the{" "}
            <span style="font-weight:600">
              {useData("project_name", cohortData.projectName)}
            </span>{" "}
            community. Please find attached the data export requested by you
            from the{" "}
            <span style="font-weight:600">
              {useData("cohort_name", cohortData.cohortName)}
            </span>
            .
          </mj-text>
          <mj-spacer height="16px" />
          <mj-text font-size="14px" color={colors.grey[2]}>
            Hope this is useful.
          </mj-text>
          <mj-spacer height="16px" />
          <mj-text font-size="14px" color={colors.grey[2]}>
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
        <mj-section>
          <mj-column width="100%">
            <mj-text font-size="12px" color={colors.grey[3]} align="center">
              You received this email to let you know about important updates ©
              2022 Aviyel
            </mj-text>
          </mj-column>
        </mj-section>
      </mj-body>
    </mjml>
  );
}

export { CohortsExportCSV };
