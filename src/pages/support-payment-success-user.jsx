import colors from "../common/colors";
import { font } from "../common/styles";
import { logos } from "../images/common";
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
            <mj-table>
              <tr>
                <td>
                  <img
                    align="left"
                    src={useData(
                      "project_logo",
                      "https://placeimg.com/64/64/tech"
                    )}
                    height="64px"
                    width="64px"
                  />
                </td>
                <td>
                  <img
                    align="right"
                    src={logos.aviyel_small}
                    height="40px"
                    width="40px"
                  />
                </td>
              </tr>
            </mj-table>
          </mj-section>

          <mj-spacer height="16px" />
          <mj-text font-size="38px" font-weight="700" color={colors.grey[1]}>
            Payment Success!
          </mj-text>

          <mj-spacer height="12px" />
          <mj-text font-size="22px" font-weight="600" color={colors.grey[1]}>
            Thank you for opting for Priority Support!
          </mj-text>

          <mj-spacer height="40px" />
          <mj-text font-size="18px" color={colors.grey[2]}>
            Hey {useData("name", "John")},
            <div style={`height:16px`} />
            Your payment has been successfully processed and you will now have
            access to expedited support. Our team will do their best to get you
            quicker responses for your issues/questions from the maintainer team
            of {useData("", "Typesense")} as quickly as possible.
          </mj-text>

          <mj-spacer height="32px" />
          <mj-button
            font-size="14px"
            font-weight="600"
            color={colors.white}
            padding="8px 20px"
            background-color={colors.primary.main}
            href={useData(
              "slack_url",
              "https://cosmicvillage.slack.com/archives/C044Y487J9M/p1672730674328179"
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            Check Your Thread on Slack
          </mj-button>

          <mj-spacer height="32px" />
          <mj-text font-size="16px" color={colors.grey[2]}>
            Thank you for choosing our service.
            <div style={`height:16px`} />
            Cheers,
            <br />
            <span style={`font-weight:600;`}>Team Aviyel</span>
          </mj-text>
        </mj-section>
      </mj-body>
    </mjml>
  );
}

export default SupportPaymentSuccessUser;
