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
      className="flex justify-center h-8"
    >
      <Typography size="xs" className="my-auto">
        <EditIcon className="text-base my-auto mr-1" />
        編集
      </Typography>
    </Button>
  );
};
