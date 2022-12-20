import { Dialog } from "@headlessui/react";
import { Button } from "../Button";

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
    <Dialog
      open={open}
      onClose={onClose}
      className="fixed inset-0 h-screen w-screen bg-black/50 z-30"
    >
      <Dialog.Panel className="fixed bottom-0 left-1/2 translate-x-[-50%] bg-[#F6F6F6] w-screen px-10 py-6 rounded-t-2xl text-themeGray text-center">
        <Dialog.Title className="pb-5 font-bold">{title}</Dialog.Title>
        <Dialog.Description className="mb-7 text-xs">
          {description}
        </Dialog.Description>
        <div className="flex mb-7">
          <Button variant="default" onClick={onClick} className="mx-2">
            {okBtnText ?? "OK"}
          </Button>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
};
