import { TStylingReferenceShowResponse } from "../../api/stylingReference/TStylingReferenceShowResponse";
import { Button } from "../baseParts/Button";
import { Divider } from "../baseParts/Divider";
import { Page } from "../baseParts/Page";
import { PageHeader } from "../baseParts/PageHeader";
import { Paper } from "../baseParts/Paper";
import { ImpressionsAnswer } from "./ImpressionsAnswer";
import { SleeveAnswer } from "./SleeveAnswer";
import { TargetAnswer } from "./TargetAnswer";
import { TextAnswer } from "./TextAnswer";

type Props = {
  readonly stylingReference: TStylingReferenceShowResponse[];
};

export const ReferenceDocument = ({ stylingReference }: Props) => {
  const findCategoryData = (
    id: number
  ): TStylingReferenceShowResponse | undefined => {
    return stylingReference.find((s) => s.categoryId === id);
  };
  return (
    <>
      <div className="px-4 pb-8 overflow-auto h-fit bg-slate-200">
        <PageHeader title="前回のコーデ情報" className="my-8" />
        <Paper>
          {findCategoryData(1) ? (
            <TargetAnswer stylingReference={findCategoryData(1)} />
          ) : (
            <></>
          )}
          {findCategoryData(3) && findCategoryData(4) ? (
            <>
              <Divider className="mb-4" />
              <ImpressionsAnswer
                impressionReference={findCategoryData(3)}
                especiallyImpressionReference={findCategoryData(4)}
              />
            </>
          ) : (
            <></>
          )}
          {findCategoryData(6) ? (
            <>
              <Divider className="mb-4" />
              <SleeveAnswer stylingReference={findCategoryData(6)} />
            </>
          ) : (
            <></>
          )}
          {findCategoryData(8) ? (
            <>
              <Divider />
              <TextAnswer
                stylingReference={findCategoryData(8)}
                titleText="その他"
                className="mb-4  mt-4"
              />
            </>
          ) : (
            <></>
          )}
          {findCategoryData(7) ? (
            <>
              <Divider />
              <TextAnswer
                stylingReference={findCategoryData(7)}
                titleText="コーデイメージ"
                className="mb-4  mt-4"
              />
            </>
          ) : (
            <></>
          )}
        </Paper>
      </div>
      <div className="p-3 space-y-3">
        <Button variant="primary">前回と同じ内容でコーデを作る</Button>
        <Button variant="primary">
          スタイリストと相談してからコーデを作る
        </Button>
      </div>
    </>
  );
};
