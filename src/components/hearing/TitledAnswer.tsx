import { Typography } from "../baseParts/Typography";

type Props = {
  readonly titleText: string;
  readonly choice?: string;
  readonly className?: string;
};
export const TitledAnswer = ({ titleText, choice, className }: Props) => {
  return (
    <div className={className ?? ""}>
      <Typography bold color="primary" size="sm" className="mb-3">
        {titleText}
      </Typography>
      <Typography bold color="strong-gray">
        {choice}
      </Typography>
    </div>
  );
};
