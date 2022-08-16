import { Dialog } from "@headlessui/react";
import { useState } from "react";
import { Button } from "../../components/baseParts/Button";

type TProps = {
  readonly onClickComplete: () => void;
  readonly onClickBack: () => void;
  readonly onClickReset: () => void;
  readonly isPostLoading: boolean;
};
export const FirstHearingConfirmButtons = ({
  onClickComplete,
  onClickBack,
  onClickReset,
  isPostLoading,
}: TProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button
        variant="primary"
        onClick={onClickComplete}
        disabled={isPostLoading}
        border={true}
      >
        ヒアリングを完了する
      </Button>
      <Button
        onClick={onClickBack}
        disabled={isPostLoading}
        variant="default"
        disableElevation
        border
      >
        ひとつ前に戻る
      </Button>
      <Button
        variant="text"
        onClick={() => setIsOpen(true)}
        disabled={isPostLoading}
      >
        最初からやり直す
      </Button>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="fixed inset-0 h-screen w-screen bg-black/50"
      >
        <Dialog.Panel className="fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-white w-[80vw] p-10 rounded-2xl max-w-[400px]">
          <Dialog.Title className="pb-5 text-xl mb-5">最初からやり直しますか？</Dialog.Title>
          <div className="space-y-3">
            <Button
              variant="primary"
              onClick={() => {
                setIsOpen(false);
                onClickReset();
              }}
            >
              OK
            </Button>
            <Button variant="default" onClick={() => setIsOpen(false)}>
              キャンセル
            </Button>
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  );
};
