import { TStylingReferenceShowResponse } from "../../../api/stylingReference/TStylingReferenceShowResponse";
import { Typography } from "../../baseParts/Typography";

type Props = {
  readonly titleText: string;
  readonly stylingReference: TStylingReferenceShowResponse;
  readonly className?: string;
};
export const TextAnswer = ({
  stylingReference,
  titleText,
  className,
}: Props) => {
  return (
    <div className={className ?? ""}>
      <Typography color="primary" size="sm" className="mb-3">
        {titleText}
      </Typography>
      <Typography color="strong-gray" size="xs" className="whitespace-pre-wrap">
        {stylingReference.text}
      </Typography>
    </div>
  );
};
