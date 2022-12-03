import { Dialog } from "@headlessui/react";
import { Button } from "../Button";

type TProps = {
  readonly open: boolean;
  readonly title: string;
  readonly description?: React.ReactNode;
  readonly okBtnText?: string;
  readonly cancelBtnText?: string;
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
  onClickOk,
  onClickCancel,
  onClose,
}: TProps) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      className="fixed inset-0 h-screen w-screen bg-black/50"
    >
      <Dialog.Panel className="fixed bottom-0 left-1/2 translate-x-[-50%] bg-white w-screen px-10 py-6 rounded-t-2xl text-themeGray text-center">
        <Dialog.Title className="pb-5 font-bold">{title}</Dialog.Title>
        <Dialog.Description className="mb-7 text-xs">
          {description}
        </Dialog.Description>
        <div className="flex mb-7">
          <Button
            variant="line"
            onClick={onClickCancel}
            className="mx-2 w-[70%]"
          >
            {cancelBtnText ?? "キャンセル"}
          </Button>
          <Button variant="default" onClick={onClickOk} className="mx-2">
            {okBtnText ?? "OK"}
          </Button>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
};
