import { Tab } from "@headlessui/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { TNonNullableDressing } from "../../../api/dressings/TDressing";
import { TNonNullableHearing } from "../../../api/dressings/THearing";
import { StylistIdContext } from "../../../App";
import { Button } from "../../baseParts/Button";
import { TabAlt } from "../../baseParts/legacy/tabs/TabAlt";
import { SimpifiedHearing } from "../../resourceParts/simplifiedHearing/SimpifiedHearing";
import { DressingAdvice } from "./DressingAdvice";
import { DressingChangeItem } from "./DressingChangeItem";
import { DressingDescription } from "./DressingDescription";
import { DressingFootwear } from "./DressingFootwear";

type TProps = {
  readonly dressing: TNonNullableDressing;
  readonly hearingData: TNonNullableHearing;
  readonly dressingIndex: number;
};
export const DressingPanel = ({
  dressing,
  hearingData,
  dressingIndex,
}: TProps) => {
  const stylistId = useContext(StylistIdContext);

  const getChangeItems = (dressing: TNonNullableDressing) =>
    dressing.coordinateItems.filter((i) => i.isChangeItem).map((i) => i.item);
  return (
    <Tab.Group>
      <Tab.List className="w-full flex sticky top-0">
        <TabAlt disableElevation={true} size="small" radius="small">
          コーデ{dressingIndex + 1}
        </TabAlt>
      </Tab.List>
      <Tab.Panels className="mt-10">
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
          <Link to={`/consult?stylistId=${stylistId}`}>
            着こなしの相談をする
          </Link>
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
      </Tab.Panels>
    </Tab.Group>
  );
};
