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
      <Dialog.Panel className="fixed left-1/2 top-1/2 w-[80vw] max-w-[400px] translate-x-[-50%] translate-y-[-50%] rounded-2xl bg-white p-10">
        <Dialog.Title className="mb-5 pb-5 text-xl">{title}</Dialog.Title>
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
