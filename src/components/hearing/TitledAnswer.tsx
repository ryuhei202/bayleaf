import { Typography } from "../baseParts/Typography";

type Props = {
  readonly titleText: string;
  readonly choice?: string;
};
export const TitledAnswer = ({ titleText, choice }: Props) => {
  return (
    <>
      <Typography className="mb-3">{titleText}</Typography>
      <Typography bold variant="header" className="mb-4">
        {choice}
      </Typography>
    </>
  );
};
