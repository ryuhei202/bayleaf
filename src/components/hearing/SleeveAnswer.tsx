import { TStylingReferenceShowResponse } from "../../api/stylingReference/TStylingReferenceShowResponse";
import { Button } from "../baseParts/Button";
import { Divider } from "../baseParts/Divider";
import { EditIcon } from "../baseParts/icons/EditIcon";
import { Typography } from "../baseParts/Typography";
import { EditableLayout } from "./EditableLayout";
import { TitledAnswer } from "./TitledAnswer";

type Props = {
  readonly stylingReference?: TStylingReferenceShowResponse;
};
export const SleeveAnswer = ({ stylingReference }: Props) => {
  return (
    <div>
      <EditableLayout>
        <TitledAnswer
          titleText="トップス枚数"
          choice={stylingReference?.choices.map((choice) => choice.name).pop()}
          className="mb-4"
        />
      </EditableLayout>
    </div>
  );
};
