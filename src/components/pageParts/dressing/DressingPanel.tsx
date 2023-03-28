import { TNonNullableDressing } from "../../../api/dressings/TDressing";
import { Button } from "../../baseParts/Button";
import { SimpifiedHearing } from "../../resourceParts/simplifiedHearing/SimpifiedHearing";
import { DressingAdvice } from "./DressingAdvice";
import { DressingChangeItem } from "./DressingChangeItem";
import { DressingDescription } from "./DressingDescription";
import { DressingFootwear } from "./DressingFootwear";

type TProps = {
  readonly dressing: TNonNullableDressing;
  readonly hearingData: TSimplifiedHearing;
  readonly onClickGoToConsultation: () => void;
};

type TSimplifiedHearing = {
  target: string;
  scene: string;
  impression: string;
};

export const DressingPanel = ({
  dressing,
  hearingData,
  onClickGoToConsultation,
}: TProps) => {
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
      <Button
        className="mb-16"
        variant="default"
        onClick={onClickGoToConsultation}
      >
        着こなしの相談をする
      </Button>
      {getChangeItems(dressing).length > 0 && (
        <>
          <DressingChangeItem changeItems={getChangeItems(dressing)} />
          <Button variant="default" onClick={onClickGoToConsultation}>
            着こなしの相談をする
          </Button>
        </>
      )}
    </>
  );
};
