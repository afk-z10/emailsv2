import colors from "../common/colors";
import { font } from "../common/styles";
import { logos } from "../images/common";
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
                "https://cdn-icons-png.flaticon.com/512/25/25231.png"
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
        <mj-section padding="0px">
          <mj-column>
            <mj-text font-size="18px" font-weight="600" color={colors.grey[2]}>
              {useData("total_members", 200)}
            </mj-text>
            <mj-text font-size="14px" font-weight="500" color={colors.grey[2]}>
              Total Members
            </mj-text>
          </mj-column>
          <mj-column>
            <mj-text font-size="18px" font-weight="600" color={colors.grey[2]}>
              {useData("new_members", 10)}
            </mj-text>
            <mj-text font-size="14px" font-weight="500" color={colors.grey[2]}>
              New Members
            </mj-text>
          </mj-column>
          <mj-column>
            <mj-text font-size="18px" font-weight="600" color={colors.grey[2]}>
              {useData("active_members", 23)}
            </mj-text>
            <mj-text font-size="14px" font-weight="500" color={colors.grey[2]}>
              Active Members
            </mj-text>
          </mj-column>
        </mj-section>
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
          href="https://beta.aviyel.com/projects/2069/cosmicvillage/community/summary"
        >
          View Details
        </mj-button>
      </mj-section>
    </>
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
            <mj-column>
              <mj-image
                align="left"
                src={useData("project_logo", "https://placeimg.com/44/44/tech")}
                height="44px"
                width="44px"
              />
            </mj-column>
            <mj-column>
              <mj-image
                align="right"
                src={logos.aviyel_small}
                height="24px"
                width="24px"
              />
            </mj-column>
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
            <mj-column>
              <mj-text
                font-size="24px"
                font-weight="600"
                color={colors.grey[1]}
              >
                <div style="display:table;">
                  <div style="display:table-cell;vertical-align:middle;">
                    <img
                      src="https://beta.aviyel.com/assets/uploads/static/email/community.png"
                      height="24px"
                      width="24px"
                      style="display:table-cell;margin-right:8px;height:24px;width:24px;vertical-align:middle;"
                    />
                  </div>
                  <span style="display:table-cell;vertical-align:middle;">
                    {useData("total_members", 450)}
                  </span>
                </div>
              </mj-text>
              <mj-text
                font-size="16px"
                font-weight="600"
                color={colors.grey[1]}
              >
                Total Members
              </mj-text>
            </mj-column>
            <mj-column>
              <mj-text
                font-size="24px"
                font-weight="600"
                color={colors.grey[1]}
              >
                <div style="display:table;">
                  <div style="display:table-cell;vertical-align:middle;">
                    <img
                      src="https://beta.aviyel.com/assets/uploads/static/email/community-new.png"
                      height="24px"
                      width="24px"
                      style="display:table-cell;margin-right:8px;height:24px;width:24px;vertical-align:middle;"
                    />
                  </div>
                  <span style="display:table-cell;vertical-align:middle;">
                    {useData("new_members", 450)}
                  </span>
                </div>
              </mj-text>
              <mj-text
                font-size="16px"
                font-weight="600"
                color={colors.grey[1]}
              >
                New Members
              </mj-text>
            </mj-column>
            <mj-column>
              <mj-text
                font-size="24px"
                font-weight="600"
                color={colors.grey[1]}
              >
                <div style="display:table;">
                  <div style="display:table-cell;vertical-align:middle;">
                    <img
                      src="https://beta.aviyel.com/assets/uploads/static/email/community-active.png"
                      height="24px"
                      width="24px"
                      style="display:table-cell;margin-right:8px;height:24px;width:24px;vertical-align:middle;"
                    />
                  </div>
                  <span style="display:table-cell;vertical-align:middle;">
                    {useData("active_members", 450)}
                  </span>
                </div>
              </mj-text>
              <mj-text
                font-size="16px"
                font-weight="600"
                color={colors.grey[1]}
              >
                Active Members
              </mj-text>
            </mj-column>
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
