import colors from "../common/colors";
import { font } from "../common/styles";
import { logos } from "../images/common";
import { If, useData } from "../utils";

function WorkflowRewardsUnlocked() {
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
                src={useData(
                  "project_logo",
                  "https://placeimg.com/24/100/tech"
                )}
                height="24px"
                width="100px"
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
          <mj-section padding="32px 40px" background-color={colors.grey[8]}>
            <mj-column>
              <mj-image
                src={useData(
                  "reward_image",
                  "https://placeimg.com/340/100/tech"
                )}
                height="100px"
              />
            </mj-column>
          </mj-section>

          <mj-spacer height="16px" />
          <mj-text font-size="18px" font-weight="600" color={colors.grey[1]}>
            Congratulations {useData("username", "John Doe")}!
          </mj-text>

          <mj-spacer height="16px" />
          <mj-text font-size="16px" font-weight="600" color={colors.grey[1]}>
            You have unlocked {useData("username", "Badge Name")} badge with{" "}
            {useData("username", "250")} seeds!
          </mj-text>
          <mj-text font-size="16px" color={colors.grey[2]}>
            Only {useData("username", "5")} other people have done the same in{" "}
            {useData("username", "Typesense")}.
          </mj-text>

          <mj-spacer height="16px" />
          <mj-text font-size="16px" color={colors.grey[2]}>
            Your contributions are valued in {useData("username", "Typesense")}.
            <br />
            You are {useData("username", "5")}th on the leaderboard for
            contributors. Keep at it!
            <br />
            <br />
            You can go claim your new badge on{" "}
            <a
              href="https://aviyel.com/rewards/claim"
              target="_blank"
              rel="noopener noreferrer"
              style={`color:${colors.primary.main};`}
            >
              aviyel.com/rewards/claim
            </a>{" "}
            You can mint this badge as a Proof of Contribution NFT on Aviyel as
            well!
          </mj-text>

          <mj-spacer height="16px" />
          <mj-button
            font-size="14px"
            font-weight="600"
            color={colors.white}
            padding="8px 20px"
            background-color={colors.primary.main}
          >
            Claim your new badge
          </mj-button>

          <mj-spacer height="16px" />
          <mj-text font-size="16px" color={colors.grey[2]}>
            Don’t forget to add your badge to your github readme using{" "}
            <a
              href="https://aviyel.com/github-readme"
              target="_blank"
              rel="noopener noreferrer"
              style={`color:${colors.grey[2]};`}
            >
              Aviyel’s readme generator!
            </a>
          </mj-text>

          <mj-spacer height="28px" />
          <mj-text
            align="center"
            font-size="16px"
            font-weight="600"
            color={colors.grey[2]}
          >
            Next Goal :
          </mj-text>

          <If name="next_level" condition={true}>
            <mj-spacer height="16px" />
            <mj-section padding="0px">
              <mj-column padding="0px">
                <mj-image
                  src={useData(
                    "next_level",
                    "https://placeimg.com/100/100/tech"
                  )}
                  height="100px"
                  width="100px"
                  border-radius="4px"
                  border={`1px solid ${colors.grey[6]}`}
                />

                <mj-spacer height="8px" />
                <mj-text align="center" color={colors.grey[2]} font-size="11px">
                  {useData("next_level_name", "Kite Shield")}
                </mj-text>

                <mj-spacer height="8px" />
                <mj-section
                  font-size="13px"
                  padding="6px 16px"
                  border-radius="50px"
                  margin="auto"
                  background-color={colors.grey[8]}
                >
                  <mj-text
                    align="center"
                    padding="0px"
                    color={colors.grey[2]}
                    container-background-color={colors.grey[8]}
                  >
                    200 seeds away from next level.
                  </mj-text>
                </mj-section>
              </mj-column>
            </mj-section>
          </If>

          <mj-spacer height="28px" />
          <mj-text font-size="16px" color={colors.grey[2]}>
            Keep on contributing and keep on inspiring others!
          </mj-text>
        </mj-section>
      </mj-body>
    </mjml>
  );
}

export default WorkflowRewardsUnlocked;
