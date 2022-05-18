import liff from "@line/liff/dist/lib";
import { useEffect } from "react";
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

  const sendMessages = async (messages: any[]) => {
    const liff = (await import("@line/liff")).default;
    liff.sendMessages(messages);
  };

  const closeWindow = async () => {
    const liff = (await import("@line/liff")).default;
    liff.closeWindow();
  };

  // 相談LINEメッセージを送信
  useEffect(() => {
    const consultLineMessages: any[] = [
      {
        type: "text",
        text: "コーデの着こなし相談をします！",
      },
    ];
    consultLineMessages.push(JSON.parse(flexMessage));
    if (isPhotoSendable) {
      consultLineMessages.push(
        wearingPhoto !== undefined
          ? {
              type: "image",
              originalContentUrl: wearingPhoto.original,
              previewImageUrl: wearingPhoto.large,
            }
          : {
              type: "text",
              text: "> 「あとで着用写真を送信します」を選択しました。",
            }
      );
    }
    sendMessages(consultLineMessages)
      .then(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
      });
  }, [flexMessage, isPhotoSendable, wearingPhoto]);

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
      subTitle="ご相談したいアイテムの着用写真をお受け取り次第、スタイリストからLINEでご相談内容を詳しく伺います。"
      btnText="LINEへ戻る"
      onClick={closeWindow}
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
      onClick={closeWindow}
    />
  );
};
