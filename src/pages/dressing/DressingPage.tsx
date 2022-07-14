import { Tab } from "@headlessui/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { TDressing } from "../../api/dressings/TDressing";
import { IdTokenContext, StylistIdContext } from "../../App";
import { Button } from "../../components/baseParts/Button";
import { Divider } from "../../components/baseParts/Divider";
import { Page } from "../../components/baseParts/Page";
import { PageHeader } from "../../components/baseParts/PageHeader";
import { TabAlt } from "../../components/baseParts/tabs/TabAlt";
import { DressingAdvice } from "../../components/dressing/DressingAdvice";
import { DressingChangeItem } from "../../components/dressing/DressingChangeItem";
import { DressingDescription } from "../../components/dressing/DressingDescription";
import { DressingFootwear } from "../../components/dressing/DressingFootwear";
import { DressingHearing } from "../../components/dressing/DressingHearing";

type TProps = {
  readonly dressings: TDressing[];
};

// 型TDressingを全てnot nullにする
type RequiredNotNull<T> = {
  [P in keyof T]: NonNullable<T[P]>;
};
type Ensure<T, K extends keyof T> = T & RequiredNotNull<Pick<T, K>>;
type TNonNullableDressing = Ensure<
  TDressing,
  "categorizedForms" | "description" | "comment" | "footwear"
>;

export const DressingPage = ({ dressings }: TProps) => {
  const idToken = useContext(IdTokenContext);
  const stylistId = useContext(StylistIdContext);
  const tabs =
    dressings.length > 1 ? (
      <>
        (
        {dressings.map((_, index) => (
          <TabAlt>コーデ{index + 1}</TabAlt>
        ))}
        )
      </>
    ) : (
      <></>
    );
  return (
    <Page className="p-5">
      <PageHeader
        title="着こなしページ"
        subtitle="服を着る時に是非参考にしてみてください！"
        className="mb-10"
      />
      <Tab.Group>
        <Tab.List>{tabs}</Tab.List>
        <Tab.Panels>
          {dressings.map((dressing) => (
            <Tab.Panel>
              {dressing.categorizedForms && (
                <DressingHearing hearings={dressing.categorizedForms} />
              )}
              <Divider className="mb-16" />
              {dressing.description && dressing.comment && (
                <DressingDescription
                  description={dressing.description}
                  comment={dressing.comment}
                  coordinateItems={dressing.coordinateItems
                    .filter((i) => !i.isChangeItem)
                    .map((i) => i.item)}
                />
              )}
              <Divider className="mb-16" />
              <DressingAdvice advices={dressing.advices} />
              <Divider className="mb-16" />
              {dressing.footwear && (
                <DressingFootwear footwear={dressing.footwear} />
              )}
              <Divider className="mb-16" />
              {dressing.coordinateItems.filter((i) => i.isChangeItem).length >
                0 && (
                <DressingChangeItem
                  changeItems={dressing.coordinateItems
                    .filter((i) => i.isChangeItem)
                    .map((i) => i.item)}
                />
              )}
              <Divider className="mb-16" />
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
