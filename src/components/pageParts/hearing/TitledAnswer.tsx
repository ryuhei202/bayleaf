import { Typography } from "../../baseParts/legacy/Typography";

type Props = {
  readonly titleText: string;
  readonly choice?: string;
  readonly text?: string;
  readonly className?: string;
};
export const TitledAnswer = ({ titleText, choice, className, text }: Props) => {
  return (
    <div className={className ?? ""}>
      <Typography color="gray" size="xs" className="mb-2">
        {titleText}
      </Typography>
      <div className="mb-4">
        <Typography color="primary">{choice}</Typography>
        {text && (
          <Typography color="primary" className="mt-2">
            {text}
          </Typography>
        )}
      </div>
    </div>
  );
};
