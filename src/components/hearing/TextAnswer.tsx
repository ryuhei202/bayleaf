import { TStylingReferenceShowResponse } from "../../api/stylingReference/TStylingReferenceShowResponse";
import { Button } from "../baseParts/Button";
import { Divider } from "../baseParts/Divider";
import { EditIcon } from "../baseParts/icons/EditIcon";
import { Typography } from "../baseParts/Typography";

type Props = {
  readonly stylingReference?: TStylingReferenceShowResponse;
  readonly titleText: string;
};
export const TextAnswer = ({ stylingReference, titleText }: Props) => {
  return (
    <div>
      <Typography className="mb-3 mt-4">{titleText}</Typography>
      <Typography bold variant="header" className="mb-4">
        {stylingReference?.text}
      </Typography>
    </div>
  );
};
