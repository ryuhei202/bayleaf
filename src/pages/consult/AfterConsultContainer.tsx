import liff from "@line/liff/dist/lib";
import { useState } from "react";
import { Loader } from "semantic-ui-react";
import { TImagePathsResponse } from "../../api/shared/TImagePathsResponse";
import { ErrorMessage } from "../../components/shared/ErrorMessage";
import { AfterConsult } from "./AfterConsult";

type TProps = {
  readonly flexMessage: string;
  readonly isPhotoSendable: boolean;
  readonly wearingPhoto?: TImagePathsResponse;
};
export const AfterConsultContainer = ({
  flexMessage,
  isPhotoSendable,
  wearingPhoto,
}: TProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | undefined>(undefined);

  const createAdditionalMessage = () => {
    return wearingPhoto !== undefined
      ? {
          type: "image",
          originalContentUrl: wearingPhoto.large,
          previewImageUrl: wearingPhoto.largeThumb,
        }
      : {
          type: "text",
          text: "> 「あとで着用写真を送信します」を選択しました。",
        };
  };

  const additionalMessage = isPhotoSendable ? createAdditionalMessage() : null;

  const parseFlexMessage =
    additionalMessage === null
      ? [JSON.parse(flexMessage)]
      : [JSON.parse(flexMessage), additionalMessage];

  liff
    .sendMessages(parseFlexMessage)
    .then(() => {
      setIsLoading(false);
    })
    .catch((error) => {
      setError(error);
    });

  if (error) return <ErrorMessage message={error.message} />;
  if (isLoading) return <Loader active />;
  return isPhotoSendable && wearingPhoto !== undefined ? (
    <AfterConsult
      title={
        <>
          LINEで相談したいアイテムの
          <br />
          着用写真をお送りください！
        </>
      }
      subTitle="ご相談したいアイテムの着用写真をお送り次第、スタイリストからLINEでご相談内容を詳しく伺います。"
      btnText="LINEへ戻る"
      onClick={() => liff.closeWindow()}
    />
  ) : (
    <AfterConsult
      title={
        <>
          スタイリストからLINEで
          <br />
          ご相談内容を詳しく伺います！
        </>
      }
      subTitle="コーデを自信を持って着ていただけるように、お悩み内容を確認しスタイリストからご連絡させていただきます。"
      btnText="LINEへ戻る"
      onClick={() => liff.closeWindow()}
    />
  );
};
