import { TStylingReferenceShowResponse } from "../../api/stylingReference/TStylingReferenceShowResponse";
import { EditableLayout } from "./EditableLayout";
import { TitledAnswer } from "./TitledAnswer";

type Props = {
  readonly inpressionReference: TStylingReferenceShowResponse;
  readonly especiallyInpressionReference: TStylingReferenceShowResponse;
};
export const InpressionsAnswer = ({
  inpressionReference,
  especiallyInpressionReference,
}: Props) => {
  return (
    <EditableLayout>
      <TitledAnswer
        titleText="与えたい印象"
        choice={inpressionReference?.choices
          .map((choice) => choice.name)
          .join(" / ")}
      />
      <TitledAnswer
        titleText="特に与えたい印象"
        choice={especiallyInpressionReference?.choices
          .map((choice) => choice.name)
          .pop()}
      />
    </EditableLayout>
  );
};
