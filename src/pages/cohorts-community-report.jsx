import colors from "../common/colors";
import { font } from "../common/styles";
import { CommunityHeader } from "../components/community/header";
import { Loop, useData } from "../utils";

function IntegrationCard() {
  return (
    <>
      <mj-spacer height="12px" />
      <mj-section padding="16px 20px" border={`1px solid ${colors.grey[6]}`}>
        <mj-text font-size="16px" font-weight="600" color={colors.grey[1]}>
          <div style="display:table;">
            <img
              src={useData(
                "image",
                "https://beta.aviyel.com/assets/uploads/static/email/github.png?v1"
              )}
              height="24px"
              width="24px"
              style="display:table-cell;margin-right:8px;height:24px;width:24px;vertical-align:middle;"
            />
            <span style="display:table-cell;vertical-align:middle;">
              {useData("title", "45 Repositories")}
            </span>
          </div>
        </mj-text>

        <mj-spacer height="16px" />
        <mj-table padding="0px">
          <tr
            style={`text-align:left;color:${colors.grey[2]};font-size:18px;font-weight:600;`}
          >
            <td>{useData("total_members", 200)}</td>
            <td>{useData("new_members", 10)}</td>
            <td>{useData("active_members", 23)}</td>
          </tr>
          <tr
            style={`text-align:left;color:${colors.grey[2]};font-size:14px;font-weight:500;`}
          >
            <td>Total Members</td>
            <td>New Members</td>
            <td>Active Members</td>
          </tr>
        </mj-table>

        <mj-spacer height="16px" />
        <mj-button
          font-size="14px"
          font-weight="500"
          background-color={colors.white}
          padding="0px"
          color={colors.primary.main}
          target="_blank"
          href={useData(
            "activity_url",
            "https://beta.aviyel.com/projects/2069/cosmicvillage/community/summary"
          )}
        >
          View Activity
        </mj-button>
      </mj-section>
    </>
  );
}

function CohortCard() {
  return (
    <>
      <mj-spacer height="16px" />
      <mj-text font-size="18px" color={colors.grey[0]} font-weight="600">
        {useData("name", "Cohort Name")}
      </mj-text>
      <mj-spacer height="4px" />
      <mj-text font-size="14px" color={colors.grey[3]}>
        {useData(
          "description",
          "Cohort Description need to be copied from the cohorts design"
        )}
      </mj-text>

      <mj-spacer height="12px" />
      <mj-section padding="16px 20px" border={`1px solid ${colors.grey[6]}`}>
        <mj-text font-size="24px" font-weight="600" color={colors.grey[1]}>
          {useData("members", 45)} Members
        </mj-text>

        <mj-spacer height="16px" />
        <mj-text font-size="13px" color={colors.grey[3]}>
          Member Split
        </mj-text>

        <mj-spacer height="8px" />
        <mj-table>
          <tr
            style={`text-align:left;color:${colors.grey[2]};font-size:18px;font-weight:600;`}
          >
            <Loop
              name="distribution"
              data={[10, 20, 23, 44]}
              render={(x) => <td>{x}%</td>}
            >
              <td>{useData("value")}%</td>
            </Loop>
          </tr>
          <tr style={`text-align:left;color:${colors.grey[2]};font-size:14px;`}>
            <Loop
              name="distribution"
              data={["Slack", "Aviyel", "Discord", "Github"]}
              render={(x) => <td>{x}</td>}
            >
              <td>{useData("name")}%</td>
            </Loop>
          </tr>
        </mj-table>

        <mj-spacer height="12px" />
        <mj-button
          font-size="14px"
          font-weight="500"
          background-color={colors.white}
          padding="0px"
          color={colors.primary.main}
          href={useData(
            "cohorts_url",
            "https://beta.aviyel.com/projects/2069/cosmicvillage/community/cohorts/30"
          )}
        >
          View Details
        </mj-button>
      </mj-section>
    </>
  );
}

function SummaryEntry({ image, count }) {
  return (
    <div style="display:table;">
      <div style="display:table-cell;vertical-align:middle;">
        <img
          src={image}
          height="24px"
          width="24px"
          style="display:table-cell;margin-right:8px;height:24px;width:24px;vertical-align:middle;"
        />
      </div>
      <span style="display:table-cell;vertical-align:middle;">{count}</span>
    </div>
  );
}

function CohortsCommunityReport() {
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
          <mj-text color={colors.grey[1]} font-size="22px">
            Weekly Community Update
          </mj-text>
          <mj-spacer height="4px" />
          <mj-text color={colors.grey[1]} font-size="18px" font-weight="600">
            {useData("duration", "Jan 1 - Jan 7th, 2022")}
          </mj-text>

          {/* Summary */}
          <mj-spacer height="24px" />
          <mj-section padding="20px" border={`1px solid ${colors.grey[6]}`}>
            <mj-table>
              <tr
                style={`text-align:left;color:${colors.grey[1]};font-size:24px;font-weight:600;`}
              >
                <td>
                  <SummaryEntry
                    count={useData("total_members", 450)}
                    image="https://beta.aviyel.com/assets/uploads/static/email/community.png?v1"
                  />
                </td>
                <td>
                  <SummaryEntry
                    count={useData("new_members", 450)}
                    image="https://beta.aviyel.com/assets/uploads/static/email/community-new.png?v1"
                  />
                </td>
                <td>
                  <SummaryEntry
                    count={useData("active_members", 450)}
                    image="https://beta.aviyel.com/assets/uploads/static/email/community-active.png?v1"
                  />
                </td>
              </tr>
              <tr>
                <td style="line-height:8px">&nbsp;</td>
              </tr>
              <tr
                style={`text-align:left;color:${colors.grey[1]};font-size:16px;font-weight:600;`}
              >
                <td>Total Members</td>
                <td>New Members</td>
                <td>Active Members</td>
              </tr>
            </mj-table>
          </mj-section>

          <Loop
            data={[null, null]}
            name="sources"
            render={(d) => <IntegrationCard />}
          >
            <IntegrationCard />
          </Loop>

          {/* Divider */}
          <mj-spacer height="16px" />
          <mj-divider border-color={colors.grey[6]} border-width="1px" />

          <Loop
            data={[null, null]}
            name="cohorts"
            render={(d) => <CohortCard />}
          >
            <CohortCard />
          </Loop>
        </mj-section>
      </mj-body>
    </mjml>
  );
}

export default CohortsCommunityReport;
