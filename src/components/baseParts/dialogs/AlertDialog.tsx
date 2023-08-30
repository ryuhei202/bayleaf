import { Button } from "../Button";
import { BaseDialog } from "./BaseDialog";

type TProps = {
  readonly open: boolean;
  readonly title: string;
  readonly description?: React.ReactNode;
  readonly okBtnText?: string;
  readonly hidden?: boolean;
  readonly onClick: () => void;
  readonly onClose: () => void;
};
export const AlertDialog = ({
  open,
  title,
  description,
  okBtnText,
  hidden,
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
        <div className="mb-7 flex">
          {!hidden && (
            <Button variant="default" onClick={onClick} className="mx-2">
              {okBtnText ?? "OK"}
            </Button>
          )}
        </div>
      }
    ></BaseDialog>
  );
};
