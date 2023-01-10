import colors from "../common/colors";
import { font } from "../common/styles";
import { logos } from "../images/common";
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
            <mj-table>
              <tr>
                <td>
                  <img
                    align="left"
                    src={useData(
                      "project_logo",
                      "https://placeimg.com/56/56/tech"
                    )}
                    height="56px"
                    width="56px"
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
          <mj-text font-size="18px" color={colors.grey[2]}>
            Hey {useData("name", "John")},
          </mj-text>

          <mj-spacer height="16px" />
          <mj-text font-size="18px" color={colors.grey[2]}>
            Summary text lorem ipsum
          </mj-text>

          <mj-spacer height="16px" />
          <mj-table>
            <tr
              style={`text-align:left;color:${colors.grey[2]};font-size:16px;border-bottom:1px solid ${colors.grey[6]}`}
            >
              <th style={`padding:12px 4px`}>User</th>
              <th style={`padding:12px 4px`}>Date</th>
              <th style={`padding:12px 4px`}>Link</th>
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

          <mj-spacer height="16px" />
          <mj-section>
            <mj-text font-size="18px" color={colors.grey[2]}>
              <a href={useData("dashboard_url", "https://beta.aviyel.com")}>
                View Dashboard
              </a>
            </mj-text>
          </mj-section>

          <mj-spacer height="16px" />
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

export default SupportPaymentSuccess;
