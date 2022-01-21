import { Button } from "./Button";
import { EditIcon } from "./icons/EditIcon";
import { Typography } from "./Typography";

export const EditButton = () => {
  return (
    <Button
      disableElevation
      border
      radius="small"
      size="none"
      className="flex justify-center h-8"
    >
      <EditIcon className="h-4 w-fit my-auto mr-1" />
      <Typography bold size="xs" className="my-auto">
        編集
      </Typography>
    </Button>
  );
};
