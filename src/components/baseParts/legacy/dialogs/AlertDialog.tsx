import { Dialog } from "@headlessui/react";
import { Button } from "../Button";

type TProps = {
  readonly open: boolean;
  readonly onClose: () => void;
  readonly title: string;
  readonly description?: React.ReactNode;
  readonly onClickOk: () => void;
};
export const AlertDialog = ({
  open,
  onClose,
  title,
  description,
  onClickOk,
}: TProps) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      className="fixed inset-0 z-20 h-screen w-screen bg-black/50"
    >
      <Dialog.Panel className="fixed left-1/2 top-1/2 w-[80vw] max-w-[400px] translate-x-[-50%] translate-y-[-50%] rounded-2xl bg-white p-10">
        <Dialog.Title className="mb-5 text-xl">{title}</Dialog.Title>
        {description && (
          <Dialog.Description className="mb-5">
            {description}
          </Dialog.Description>
        )}
        <div className="space-y-3">
          <Button variant="primary" onClick={onClickOk}>
            OK
          </Button>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
};
