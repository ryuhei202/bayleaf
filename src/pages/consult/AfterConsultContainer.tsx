import liff from "@line/liff/dist/lib";
import * as Sentry from "@sentry/react";
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
    // テスト用
    consultLineMessages.push({
      type: "image",
      originalContentUrl:
        "https://p1-078379c8.imageflux.jp/f=webp:auto%2Cw=1200/images/b29d452d0c3ac40400615aa8ad7326da.jpg",
      previewImageUrl:
        "https://p1-078379c8.imageflux.jp/f=webp:auto%2Cw=1200/images/b29d452d0c3ac40400615aa8ad7326da.jpg",
    });
    liff
      .sendMessages(consultLineMessages)
      .then(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        Sentry.captureException(error);
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
      onClick={liff.closeWindow}
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
      onClick={liff.closeWindow}
    />
  );
};
