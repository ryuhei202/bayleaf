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
      className="fixed inset-0 h-screen w-screen bg-black/50 z-20"
    >
      <Dialog.Panel className="fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-white w-[80vw] p-10 rounded-2xl max-w-[400px]">
        <Dialog.Title className="text-xl mb-5">{title}</Dialog.Title>
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
