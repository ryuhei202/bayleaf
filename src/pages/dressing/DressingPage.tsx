import { Tab } from "@headlessui/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { TNonNullableDressing } from "../../api/dressings/TDressing";
import { IdTokenContext, StylistIdContext } from "../../App";
import { Button } from "../../components/baseParts/Button";
import { Divider } from "../../components/baseParts/Divider";
import { Page } from "../../components/baseParts/Page";
import { TabAlt } from "../../components/baseParts/tabs/TabAlt";
import { DressingAdvice } from "../../components/dressing/DressingAdvice";
import { DressingChangeItem } from "../../components/dressing/DressingChangeItem";
import { DressingDescription } from "../../components/dressing/DressingDescription";
import { DressingFootwear } from "../../components/dressing/DressingFootwear";
import { DressingHearing } from "../../components/dressing/DressingHearing";

type TProps = {
  readonly dressings: TNonNullableDressing[];
};

export const DressingPage = ({ dressings }: TProps) => {
  const idToken = useContext(IdTokenContext);
  const stylistId = useContext(StylistIdContext);

  return (
    <Page className="p-5 pb-5">
      <Tab.Group>
        {dressings.length > 1 ? (
          <Tab.List className="w-full flex sticky top-0">
            {dressings.map((_, index) => (
              <TabAlt disableElevation={true} size="small" radius="small">
                コーデ{index + 1}
              </TabAlt>
            ))}
          </Tab.List>
        ) : (
          <></>
        )}
        <Tab.Panels className="mt-10">
          {dressings.map((dressing) => (
            <Tab.Panel>
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
              <DressingChangeItem
                changeItems={dressing.coordinateItems
                  .filter((i) => i.isChangeItem)
                  .map((i) => i.item)}
              />
              <Button variant="primary">
                <Link to={`/consult?lineId=${idToken}&stylistId=${stylistId}`}>
                  着こなしの相談をする
                </Link>
              </Button>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </Page>
  );
};
