import { Tab } from "@headlessui/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { TNonNullableDressing } from "../../../api/dressings/TDressing";
import { StylistIdContext } from "../../../App";
import { Button } from "../../baseParts/Button";
import { TabAlt } from "../../baseParts/legacy/tabs/TabAlt";
import { DressingAdvice } from "./DressingAdvice";
import { DressingChangeItem } from "./DressingChangeItem";
import { DressingDescription } from "./DressingDescription";
import { DressingFootwear } from "./DressingFootwear";
import { DressingHearing } from "./DressingHearing";

type TProps = {
  readonly dressing: TNonNullableDressing;
  readonly dressingIndex: number;
};
export const DressingPanel = ({ dressing, dressingIndex }: TProps) => {
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
          <Link to={`/consult?stylistId=${stylistId}`}>
            着こなしの相談をする
          </Link>
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
      </Tab.Panels>
    </Tab.Group>
  );
};
