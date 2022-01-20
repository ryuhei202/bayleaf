import { TStylingReferenceShowResponse } from "../../api/stylingReference/TStylingReferenceShowResponse";
import { Divider } from "../baseParts/Divider";
import { Page } from "../baseParts/Page";
import { PageHeader } from "../baseParts/PageHeader";
import { Paper } from "../baseParts/Paper";
import { InpressionsAnswer } from "./InpressionsAnswer";
import { SleeveAnswer } from "./SleeveAnswer";
import { TargetAnswer } from "./TargetAnswer";
import { TextAnswer } from "./TextAnswer";

type Props = {
  readonly stylingReference: TStylingReferenceShowResponse[];
};

export const ReferenceDocument = ({ stylingReference }: Props) => {
  const findCategoryData = (id: number): TStylingReferenceShowResponse => {
    const category = stylingReference.find((s) => s.categoryId === id);
    return category!;
  };
  return (
    <Page>
      <PageHeader title="前回のコーデ情報" className="mt-8 mb-8" />
      <Paper className="p-6">
        <TargetAnswer stylingReference={findCategoryData(1)} />
        <Divider />
        <InpressionsAnswer
          inpressionReference={findCategoryData(3)}
          especiallyInpressionReference={findCategoryData(4)}
        />
        <Divider />
        <SleeveAnswer stylingReference={findCategoryData(6)} />
        <Divider />
        <TextAnswer stylingReference={findCategoryData(8)} titleText="その他" />
        <Divider />
        <TextAnswer
          stylingReference={findCategoryData(7)}
          titleText="コーデイメージ"
        />
      </Paper>
    </Page>
  );
};
