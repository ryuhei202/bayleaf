import { Dialog } from "@headlessui/react";
import { Button } from "../Button";

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
    <Dialog
      open={open}
      onClose={onClose}
      className="fixed inset-0 h-screen w-screen bg-black/50 z-20"
    >
      <Dialog.Panel className="fixed h-fit bottom-0 left-1/2 translate-x-[-50%] bg-[#F6F6F6] w-screen px-10 py-6 rounded-t-2xl text-themeGray text-center">
        <Dialog.Title className="pb-5 font-bold">{title}</Dialog.Title>
        <Dialog.Description className="h-full mb-7 text-xs">
          {description}
        </Dialog.Description>
        <div className="flex mb-7">
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
      </Dialog.Panel>
    </Dialog>
  );
};
