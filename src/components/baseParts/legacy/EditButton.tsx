import { Button } from "./Button";
import { EditIcon } from "./icons/EditIcon";
import { Typography } from "./Typography";

type Props = {
  onClick?: () => void;
};

export const EditButton = ({ ...props }: Props) => {
  return (
    <Button
      {...props}
      disableElevation
      border
      radius="small"
      size="none"
      className="flex h-8 justify-center"
    >
      <Typography size="xs" className="my-auto">
        <EditIcon className="my-auto mr-1 text-base" />
        編集
      </Typography>
    </Button>
  );
};
