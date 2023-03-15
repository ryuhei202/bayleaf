import { Button } from "../Button";
import { BaseDialog } from "./BaseDialog";

type TProps = {
  readonly open: boolean;
  readonly title: string;
  readonly description?: React.ReactNode;
  readonly okBtnText?: string;
  readonly onClick: () => void;
  readonly onClose: () => void;
};
export const AlertDialog = ({
  open,
  title,
  description,
  okBtnText,
  onClick,
  onClose,
}: TProps) => {
  return (
    <BaseDialog
      open={open}
      title={title}
      onClose={onClose}
      description={description}
      button={
        <div className="flex mb-7">
          <Button variant="default" onClick={onClick} className="mx-2">
            {okBtnText ?? "OK"}
          </Button>
        </div>
      }
    ></BaseDialog>
  );
};
