import { TStylingReferenceShowResponse } from "../../api/stylingReference/TStylingReferenceShowResponse";
import { Typography } from "../baseParts/Typography";

type Props = {
  readonly stylingReference?: TStylingReferenceShowResponse;
  readonly titleText: string;
  readonly className?: string;
};
export const TextAnswer = ({
  stylingReference,
  titleText,
  className,
}: Props) => {
  return (
    <div className={className ?? ""}>
      <Typography bold color="primary" size="sm" className="mb-3">
        {titleText}
      </Typography>
      <Typography
        bold
        color="strong-gray"
        size="xs"
        className="whitespace-pre-wrap"
      >
        {stylingReference?.text}
      </Typography>
    </div>
  );
};
