import { useContext } from "react";
import { Link } from "react-router-dom";
import { TNonNullableDressing } from "../../../api/dressings/TDressing";
import { StylistIdContext } from "../../../App";
import { Button } from "../../baseParts/Button";
import { DressingAdvice } from "./DressingAdvice";
import { DressingChangeItem } from "./DressingChangeItem";
import { DressingDescription } from "./DressingDescription";
import { DressingFootwear } from "./DressingFootwear";
import { DressingHearing } from "./DressingHearing";

type TProps = {
  readonly dressing: TNonNullableDressing;
};
export const DressingPanel = ({ dressing }: TProps) => {
  const stylistId = useContext(StylistIdContext);

  const getChangeItems = (dressing: TNonNullableDressing) =>
    dressing.coordinateItems.filter((i) => i.isChangeItem).map((i) => i.item);
  return (
    <>
      <DressingHearing hearings={dressing.categorizedForms} />
      <DressingDescription
        description={dressing.description}
        comment={dressing.comment}
        coordinateItems={dressing.coordinateItems
          .filter((i) => !i.isChangeItem)
          .map((i) => i.item)}
      />
      <DressingAdvice advices={dressing.advices} />
      <DressingFootwear footwear={dressing.footwear} />
      <Button className="mb-16" variant="primary">
        <Link to={`/consult?stylistId=${stylistId}`}>着こなしの相談をする</Link>
      </Button>
      {getChangeItems(dressing).length > 0 && (
        <>
          <DressingChangeItem changeItems={getChangeItems(dressing)} />
          <Button variant="primary">
            <Link to={`/consult?stylistId=${stylistId}`}>
              着こなしの相談をする
            </Link>
          </Button>
        </>
      )}
    </>
  );
};
