import { logos } from "../../images/common";
import { useData } from "../../utils";

function CommunityHeader() {
  return (
    <mj-table>
      <tr>
        <td>
          <img
            align="left"
            src={useData("project_logo", "https://placeimg.com/44/44/tech")}
            height="44px"
            width="44px"
          />
        </td>
        <td>
          <img
            align="right"
            src={logos.aviyel_small}
            height="24px"
            width="24px"
          />
        </td>
      </tr>
    </mj-table>
  );
}

export { CommunityHeader };
