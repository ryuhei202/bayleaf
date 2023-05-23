import liff from "@line/liff/dist/lib";
import { useState } from "react";
import { TMemberSizeOptionsIndexResponse } from "../../api/memberSizeOptions/useMemberSizeOptionsIndex";
import { useMemberSizesCreate } from "../../api/memberSizes/useMemberSizesCreate";
import { AlertDialog } from "../../components/baseParts/dialogs/AlertDialog";
import { CheckIcon } from "../../components/baseParts/icons/CheckIcon";
import { ErrorPage } from "../../components/baseParts/pages/ErrorPage";
import { HearingAboutSizeConfirm } from "../../components/resourceParts/hearing/HearingAboutSizeConfirm";
import { HearingAboutSizeStart } from "../../components/resourceParts/hearing/HearingAboutSizeStart";
import { HearingSelectForm } from "../../components/resourceParts/hearing/HearingSelectForm";
import { MemberImageUploader } from "../../components/resourceParts/hearing/MemberImageUploader";
import { useImageUploadHandler } from "../../hooks/handler/image/useImageUploadHandler";
import { useSizeSelectFormHandler } from "./handler/useSizeSelectFormHandler";

type TProps = {
  memberId: number;
  memberSizeOptions: TMemberSizeOptionsIndexResponse;
};
export type TStep = "start" | "select" | "image" | "confirm";

export const SizeFormsContainer = ({ memberId, memberSizeOptions }: TProps) => {
  const { mutate, isLoading, error, isSuccess } = useMemberSizesCreate({
    memberId,
  });
  const [step, setStep] = useState<TStep>("start");

  const handleStep = (step: TStep) => setStep(step);
  const {
    tops,
    bottoms,
    shoulder,
    waist,
    hip,
    bust,
    getFormProps,
    handleCancelImageUpload,
  } = useSizeSelectFormHandler({ memberSizeOptions, handleStep });

  const { imageFileName, imageData, preUploadImage, handleChangeFile } =
    useImageUploadHandler();

  if (error) return <ErrorPage message={error.message} />;

  switch (step) {
    case "start":
      return <HearingAboutSizeStart onClick={() => setStep("select")} />;
    case "select":
      return <HearingSelectForm {...getFormProps()} />;
    case "image":
      return (
        <MemberImageUploader
          onClickNext={() => setStep("confirm")}
          onSubmit={() => setStep("confirm")}
          onCancel={handleCancelImageUpload}
          imageFileName={imageFileName}
          imageData={imageData}
          preUploadImage={preUploadImage}
          handleChangeFile={handleChangeFile}
        />
      );

    case "confirm":
      return (
        <>
          <HearingAboutSizeConfirm
            topsChoice={
              memberSizeOptions.tops.find((t) => t.id === tops)?.name!
            }
            bottomsChoice={
              memberSizeOptions.bottoms.find((t) => t.id === bottoms)?.name!
            }
            waistChoice={
              memberSizeOptions.waists.find((t) => t.id === waist)?.name!
            }
            shoulderChoice={
              memberSizeOptions.shoulders.find((t) => t.id === shoulder)?.name!
            }
            hipChoice={memberSizeOptions.hips.find((t) => t.id === hip)?.name!}
            bustChoice={
              memberSizeOptions.busts.find((t) => t.id === bust)?.name!
            }
            imageSrc={preUploadImage!}
            isLoading={isLoading}
            onSubmit={() => {
              if (!(tops && bottoms && shoulder && waist && hip && bust)) {
                throw new Error("サイズが選択されていません");
              }
              mutate({
                tops,
                bottoms,
                shoulder,
                waist,
                hip,
                bust,
                image:
                  imageData && imageFileName
                    ? { imageData, imageFileName }
                    : undefined,
              });
            }}
            onClickBack={() => setStep("image")}
          />
          <AlertDialog
            open={isSuccess}
            title={"サイズを登録しました！"}
            description={<CheckIcon />}
            onClick={() => liff.closeWindow()}
            onClose={() => liff.closeWindow()}
            okBtnText="閉じる"
          />
        </>
      );
    default:
      throw new Error("stepが不正です");
  }
};
