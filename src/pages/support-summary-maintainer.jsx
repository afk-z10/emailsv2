import colors from "../common/colors";
import { font } from "../common/styles";
import { CommunityHeader } from "../components/community/header";
import { For, useData } from "../utils";

function SupportPaymentSuccess() {
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
          <mj-text font-size="16px" color={colors.grey[2]}>
            Daily dose of email updates
          </mj-text>

          <mj-spacer height="16px" />
          <mj-table>
            <tr
              style={`text-align:left;color:${colors.grey[2]};font-size:16px;border-bottom:1px solid ${colors.grey[6]}`}
            >
              <th style={`padding:12px 4px`}>User</th>
              <th style={`padding:12px 4px`}>Date</th>
              <th style={`padding:12px 4px`}></th>
            </tr>
            <For i="entry" list="list">
              <tr
                style={`text-align:left;color:${colors.grey[2]};font-size:16px;border-bottom:1px solid ${colors.grey[6]}`}
              >
                <td style={`padding:8px 4px`}>
                  {useData("entry.email", "jose@abc.com")}
                </td>
                <td style={`padding:8px 4px`}>
                  {useData("entry.date", "02-Jan-2023")}
                </td>
                <td style={`padding:8px 4px`}>
                  <a
                    href={useData(
                      "entry.link",
                      "https://cosmicvillage.slack.com/archives/C044Y487J9M/p1672730674328179"
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={`text-decoration:none;color:${colors.primary.main}`}
                  >
                    View
                  </a>
                </td>
              </tr>
            </For>
          </mj-table>
        </mj-section>
      </mj-body>
    </mjml>
  );
}

export default SupportPaymentSuccess;
