import { Dialog } from "@headlessui/react";
import { Button } from "../Button";

type TProps = {
  readonly open: boolean;
  readonly onClose: () => void;
  readonly title: string;
  readonly onClickOk: () => void;
  readonly onClickCancel: () => void;
};
export const ConfirmDialog = ({
  open,
  onClose,
  title,
  onClickOk,
  onClickCancel,
}: TProps) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      className="fixed inset-0 h-screen w-screen bg-black/50"
    >
      <Dialog.Panel className="fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-white w-[80vw] p-10 rounded-2xl max-w-[400px]">
        <Dialog.Title className="pb-5 text-xl mb-5">{title}</Dialog.Title>
        <div className="space-y-3">
          <Button variant="primary" onClick={onClickOk}>
            OK
          </Button>
          <Button variant="default" onClick={onClickCancel}>
            キャンセル
          </Button>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
};
