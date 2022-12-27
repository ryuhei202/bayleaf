import { AxiosResponse } from "axios";
import { useContext } from "react";
import { useState } from "react";
import {
  TMemberPhotoCreateParams,
  TMemberPhotoCreateResponse,
  useMemberPhotoCreate,
} from "../../api/memberPhotos/useMemberPhotoCreate";
import { Page } from "../../components/baseParts/legacy/Page";
import { LoaderPage } from "../../components/baseParts/pages/LoaderPage";
import { ErrorMessage } from "../../components/shared/ErrorMessage";
import { useImageUploadHandler } from "../../hooks/handler/image/useImageUploadHandler";
import { MEMBER_PHOTO_CATEGORY_ID } from "../../models/consult/MemberPhotoCategoryId";
import { TConsultingItem } from "../../models/consult/TConsultingItem";
import { AfterConsultContainer } from "./AfterConsultContainer";
import { ConsultChartIdContext } from "./ConsultFetcher";
import { useConsultLineMessageSender } from "./useConsultLineMessageSender";
import { WearingPhoto } from "./WearingPhoto";

type TProps = {
  items: TConsultingItem[];
  flexMessage: string;
  onCancel: () => void;
};

export const WearingPhotoContainer = ({
  items,
  flexMessage,
  onCancel,
}: TProps) => {
  const { imageFileName, imageData, preUploadImage, handleChangeFile } =
    useImageUploadHandler();
  const { mutate, isLoading } = useMemberPhotoCreate();
  const chartId = useContext(ConsultChartIdContext);
  const { send, isSending, isError, isSuccess } = useConsultLineMessageSender();
  const [isSkipped, setIsSkipped] = useState(false);

  const handleSubmit = () => {
    if (imageData && imageFileName) {
      const params: TMemberPhotoCreateParams = {
        image: {
          memberPhotoCategoryId: MEMBER_PHOTO_CATEGORY_ID.WEARING,
          imageData: imageData,
          imageFileName: imageFileName,
          chartId,
          itemIds: items.map((item) => item.id),
        },
      };
      mutate(params, {
        onSuccess: (data: void | AxiosResponse<TMemberPhotoCreateResponse>) => {
          if (data && data.data) {
            send(flexMessage, true, data.data.imagePaths);
          }
        },
      });
    }
  };

  const handleSkip = () => {
    setIsSkipped(true);
    send(flexMessage, true);
  };

  if (isSuccess)
    return <AfterConsultContainer displayUploadGuide={isSkipped} />;
  if (isError) return <ErrorMessage message="予期せぬエラーが発生しました" />;
  if (isSending) return <LoaderPage />;
  return (
    <Page>
      <WearingPhoto
        items={items}
        preUploadImage={preUploadImage ?? null}
        imageFileName={imageFileName ?? ""}
        imageData={imageData ?? ""}
        onChangeFile={handleChangeFile}
        onSubmit={handleSubmit}
        isLoading={isLoading}
        onSkip={handleSkip}
        onCancel={onCancel}
      />
    </Page>
  );
};
