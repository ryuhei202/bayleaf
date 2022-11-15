import { Typography } from "../../baseParts/Typography";

type Props = {
  readonly titleText: string;
  readonly choice?: string;
  readonly text?: string;
  readonly className?: string;
};
export const TitledAnswer = ({ titleText, choice, className, text }: Props) => {
  return (
    <div className={className ?? ""}>
      <Typography color="primary" size="sm" className="mb-3">
        {titleText}
      </Typography>
      <Typography color="strong-gray">{choice}</Typography>
      {text && (
        <Typography size="sm" color="strong-gray" className="mt-2">
          テキスト: {text}
        </Typography>
      )}
    </div>
  );
};
