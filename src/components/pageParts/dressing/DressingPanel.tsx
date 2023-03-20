import { useContext } from "react";
import { Link } from "react-router-dom";
import { TNonNullableDressing } from "../../../api/dressings/TDressing";
import { TNonNullableHearing } from "../../../api/dressings/THearing";
import { StylistIdContext } from "../../../App";
import { Button } from "../../baseParts/Button";
import { SimpifiedHearing } from "../../resourceParts/simplifiedHearing/SimpifiedHearing";
import { DressingAdvice } from "./DressingAdvice";
import { DressingChangeItem } from "./DressingChangeItem";
import { DressingDescription } from "./DressingDescription";
import { DressingFootwear } from "./DressingFootwear";

type TProps = {
  readonly dressing: TNonNullableDressing;
  readonly hearingData: TNonNullableHearing;
};
export const DressingPanel = ({ dressing, hearingData }: TProps) => {
  const stylistId = useContext(StylistIdContext);

  const getChangeItems = (dressing: TNonNullableDressing) =>
    dressing.coordinateItems.filter((i) => i.isChangeItem).map((i) => i.item);
  return (
    <>
      <SimpifiedHearing
        target={hearingData.target}
        scene={hearingData.scene}
        impression={hearingData.impression}
      />
      <DressingDescription
        description={dressing.description}
        comment={dressing.comment}
        coordinateItems={dressing.coordinateItems
          .filter((i) => !i.isChangeItem)
          .map((i) => i.item)}
      />
      <DressingAdvice advices={dressing.advices} />
      <DressingFootwear footwear={dressing.footwear} />
      <Button className="mb-16" variant="default">
        <Link to={`/consult?stylistId=${stylistId}`}>着こなしの相談をする</Link>
      </Button>
      {getChangeItems(dressing).length > 0 && (
        <>
          <DressingChangeItem changeItems={getChangeItems(dressing)} />
          <Button variant="default">
            <Link to={`/consult?stylistId=${stylistId}`}>
              着こなしの相談をする
            </Link>
          </Button>
        </>
      )}
    </>
  );
};
