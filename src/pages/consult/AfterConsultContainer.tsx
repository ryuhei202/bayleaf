import liff from "@line/liff/dist/lib";
import { useState } from "react";
import { Loader } from "semantic-ui-react";
import { TImagePathsResponse } from "../../api/shared/TImagePathsResponse";
import { ErrorMessage } from "../../components/shared/ErrorMessage";
import { AfterConsult } from "./AfterConsult";

type TProps = {
  readonly flexMessage: string;
  readonly wearingPhoto?: TImagePathsResponse;
};
export const AfterConsultContainer = ({
  flexMessage,
  wearingPhoto,
}: TProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | undefined>(undefined);

  let photoMessage;

  if (wearingPhoto) {
    photoMessage = {
      type: "image",
      originalContentUrl: wearingPhoto.large,
      previewImageUrl: wearingPhoto.largeThumb,
    };
  }
  const parseFlexMessage = photoMessage
    ? [JSON.parse(flexMessage), photoMessage]
    : [JSON.parse(flexMessage)];

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
  return (
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
