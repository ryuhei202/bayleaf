import { Tab } from "@headlessui/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { TNonNullableDressing } from "../../api/dressings/TDressing";
import { StylistIdContext } from "../../App";
import { Button } from "../../components/baseParts/legacy/Button";
import { Page } from "../../components/baseParts/legacy/Page";
import { TabAlt } from "../../components/baseParts/legacy/tabs/TabAlt";
import { DressingAdvice } from "../../components/pageParts/dressing/DressingAdvice";
import { DressingChangeItem } from "../../components/pageParts/dressing/DressingChangeItem";
import { DressingDescription } from "../../components/pageParts/dressing/DressingDescription";
import { DressingFootwear } from "../../components/pageParts/dressing/DressingFootwear";
import { DressingHearing } from "../../components/pageParts/dressing/DressingHearing";

type TProps = {
  readonly dressings: TNonNullableDressing[];
};

export const DressingPage = ({ dressings }: TProps) => {
  const stylistId = useContext(StylistIdContext);

  const getChangeItems = (dressing: TNonNullableDressing) =>
    dressing.coordinateItems.filter((i) => i.isChangeItem).map((i) => i.item);

  return (
    <Page className="p-5 pb-5">
      <Tab.Group>
        {dressings.length > 1 ? (
          <Tab.List className="w-full flex sticky top-0">
            {dressings.map((_, index) => (
              <TabAlt
                disableElevation={true}
                size="small"
                radius="small"
                key={index}
              >
                コーデ{index + 1}
              </TabAlt>
            ))}
          </Tab.List>
        ) : (
          <></>
        )}
        <Tab.Panels className="mt-10">
          {dressings.map((dressing, index) => (
            <Tab.Panel key={index}>
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
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </Page>
  );
};
