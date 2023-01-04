import colors from "../common/colors";
import { font } from "../common/styles";
import { CommunityHeader } from "../components/community/header";
import { useData } from "../utils";

function SupportPaymentSuccessUser() {
  return (
    <mjml style="background: #F6F6F9">
      <mj-head>
        <mj-attributes>
          <mj-text padding="0" line-height="1.5" />
          <mj-all font-family={font} />
          <mj-table table-layout="auto" padding="0px" cellpadding="0px" />
          <mj-image padding="0px" />
        </mj-attributes>
      </mj-head>
      <mj-body background-color="#F6F6F9">
        <mj-section padding="32px" background-color={colors.white}>
          <mj-section padding="8px 0px">
            <CommunityHeader />
          </mj-section>

          <mj-spacer height="16px" />
          <mj-text font-size="18px" font-weight="600" color={colors.grey[1]}>
            Payment Success
          </mj-text>

          <mj-spacer height="16px" />
          <mj-text font-size="16px" font-weight="600" color={colors.grey[1]}>
            Some more title stuff
          </mj-text>

          <mj-spacer height="16px" />
          <mj-text font-size="16px" color={colors.grey[2]}>
            Your contributions are valued, ... ...
          </mj-text>

          <mj-spacer height="16px" />
          <mj-button
            font-size="14px"
            font-weight="600"
            color={colors.white}
            padding="8px 20px"
            background-color={colors.primary.main}
            href={useData(
              "slack_link",
              "https://cosmicvillage.slack.com/archives/C044Y487J9M/p1672730674328179"
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            View on Slack
          </mj-button>
        </mj-section>
      </mj-body>
    </mjml>
  );
}

export default SupportPaymentSuccessUser;
