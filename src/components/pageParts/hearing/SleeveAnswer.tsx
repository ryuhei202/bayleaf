import { TStylingReferenceShowResponse } from "../../../api/stylingReference/TStylingReferenceShowResponse";
import { EditableLayout } from "./EditableLayout";
import { TitledAnswer } from "./TitledAnswer";

type Props = {
  readonly stylingReference: TStylingReferenceShowResponse;
  readonly onClickEdit?: () => void;
};
export const SleeveAnswer = ({ stylingReference, ...props }: Props) => {
  return (
    <div>
      <EditableLayout {...props}>
        <TitledAnswer
          titleText="トップス枚数"
          choice={stylingReference?.choices.map((choice) => choice.name)[0]}
          className="mb-4"
        />
      </EditableLayout>
    </div>
  );
};
