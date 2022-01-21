import { TStylingReferenceShowResponse } from "../../api/stylingReference/TStylingReferenceShowResponse";
import { EditableLayout } from "./EditableLayout";
import { TitledAnswer } from "./TitledAnswer";

type Props = {
  readonly impressionReference?: TStylingReferenceShowResponse;
  readonly especiallyInpressionReference?: TStylingReferenceShowResponse;
};
export const ImpressionsAnswer = ({
  impressionReference,
  especiallyInpressionReference,
}: Props) => {
  return (
    <EditableLayout>
      <TitledAnswer
        titleText="与えたい印象"
        choice={impressionReference?.choices
          .map((choice) => choice.name)
          .join(" / ")}
        className="mb-4"
      />
      <TitledAnswer
        titleText="特に与えたい印象"
        choice={especiallyInpressionReference?.choices
          .map((choice) => choice.name)
          .pop()}
        className="mb-4"
      />
    </EditableLayout>
  );
};
