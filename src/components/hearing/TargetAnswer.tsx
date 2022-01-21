import { TStylingReferenceShowResponse } from "../../api/stylingReference/TStylingReferenceShowResponse";
import { Typography } from "../baseParts/Typography";
import { EditableLayout } from "./EditableLayout";
import { TitledAnswer } from "./TitledAnswer";

type Props = {
  readonly stylingReference?: TStylingReferenceShowResponse;
};
export const TargetAnswer = ({ stylingReference }: Props) => {
  return (
    <EditableLayout>
      <TitledAnswer
        titleText="意識する相手"
        choice={stylingReference?.choices.map((choice) => choice.name).pop()}
        className="mb-4"
      />
      {stylingReference?.text !== null ? (
        <div className="bg-gray-100 mb-4 p-2">
          <Typography
            className="mb-3"
            bold
            color="primary"
            size="xs"
            children="スタイリストからの補足"
          />
          <Typography
            size="xs"
            color="strong-gray"
            children={stylingReference?.text}
          />
        </div>
      ) : (
        <></>
      )}
    </EditableLayout>
  );
};
