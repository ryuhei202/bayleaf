import { TStylingReferenceShowResponse } from "../../api/stylingReference/TStylingReferenceShowResponse";
import { Button } from "../baseParts/Button";
import { Divider } from "../baseParts/Divider";
import { EditButton } from "../baseParts/EditButton";
import { EditIcon } from "../baseParts/icons/EditIcon";
import { Typography } from "../baseParts/Typography";
import { EditableLayout } from "./EditableLayout";
import { TitledAnswer } from "./TitledAnswer";

type Props = {
  readonly stylingReference?: TStylingReferenceShowResponse;
};
export const TargetAnswer = ({ stylingReference }: Props) => {
  return (
    <div>
      <EditableLayout>
        <TitledAnswer
          titleText="意識する相手"
          choice={stylingReference?.choices.map((choice) => choice.name).pop()}
        />
        {stylingReference?.text !== null ? (
          <div className="bg-gray-100 mb-4 p-2">
            <Typography
              className="mb-3"
              bold
              variant="body"
              children="スタイリストからの補足"
            />
            <Typography
              variant="body"
              color="strong-gray"
              children={stylingReference?.text}
            />
          </div>
        ) : (
          <></>
        )}
      </EditableLayout>
    </div>
  );
};
