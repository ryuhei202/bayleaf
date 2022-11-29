import { TStylingReferenceShowResponse } from "../../../api/stylingReference/TStylingReferenceShowResponse";
import { EditableLayout } from "./EditableLayout";
import { TitledAnswer } from "./TitledAnswer";

type Props = {
  readonly multipleImpressionsReference: TStylingReferenceShowResponse;
  readonly primaryImpressionReference: TStylingReferenceShowResponse;
  readonly onClickEdit?: () => void;
};
export const ImpressionsAnswer = ({
  multipleImpressionsReference,
  primaryImpressionReference,
  ...props
}: Props) => {
  return (
    <EditableLayout {...props}>
      <TitledAnswer
        titleText="与えたい印象"
        choice={multipleImpressionsReference?.choices
          .map((choice) => choice.name)
          .join(" / ")}
        className="mb-4"
      />
      <TitledAnswer
        titleText="特に与えたい印象"
        choice={
          primaryImpressionReference?.choices.map((choice) => choice.name)[0]
        }
        className="mb-4"
      />
    </EditableLayout>
  );
};
