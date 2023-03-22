import { Button } from "../Button";
import { BaseDialog } from "./BaseDialog";

type TProps = {
  readonly open: boolean;
  readonly title: string;
  readonly description?: React.ReactNode;
  readonly okBtnText?: string;
  readonly cancelBtnText?: string;
  readonly isLoading?: boolean;
  readonly onClickOk: () => void;
  readonly onClickCancel: () => void;
  readonly onClose: () => void;
};
export const ConfirmDialog = ({
  open,
  title,
  description,
  okBtnText,
  cancelBtnText,
  isLoading,
  onClickOk,
  onClickCancel,
  onClose,
}: TProps) => {
  return (
    <BaseDialog
      open={open}
      title={title}
      onClose={isLoading ? () => undefined : onClose}
      description={description}
      button={
        <div className="flex">
          <Button
            variant="line"
            onClick={onClickCancel}
            isLoading={isLoading}
            className="mx-2 w-[70%]"
          >
            {cancelBtnText ?? "キャンセル"}
          </Button>
          <Button
            variant="default"
            onClick={onClickOk}
            disabled={isLoading}
            className="mx-2"
          >
            {okBtnText ?? "OK"}
          </Button>
        </div>
      }
    ></BaseDialog>
  );
};
