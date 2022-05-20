import liff from "@line/liff/dist/lib";
import { useEffect } from "react";
import { useState } from "react";
import { Loader } from "semantic-ui-react";
import { useLineMessageCreate } from "../../api/lineMessages/useLineMessageCreate";
import { TImagePathsResponse } from "../../api/shared/TImagePathsResponse";
import { ErrorMessage } from "../../components/shared/ErrorMessage";
import { OUTFIT_TEST_IMAGE_URL } from "../../images/TestImageUrl";
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
  const { mutate } = useLineMessageCreate();

  // 相談LINEメッセージを送信
  useEffect(() => {
    const consultLineMessages: any[] = [
      {
        type: "text",
        text: "コーデの着こなし相談を受け付けました！",
      },
    ];
    consultLineMessages.push(JSON.parse(flexMessage));
    if (isPhotoSendable) {
      consultLineMessages.push(
        wearingPhoto !== undefined
          ? {
              type: "image",
              originalContentUrl:
                process.env.REACT_APP_ENV === "production"
                  ? wearingPhoto.original
                  : OUTFIT_TEST_IMAGE_URL,
              previewImageUrl:
                process.env.REACT_APP_ENV === "production"
                  ? wearingPhoto.large
                  : OUTFIT_TEST_IMAGE_URL,
            }
          : {
              type: "text",
              text: "着用写真の送信をお願いします！",
              quickReply: {
                items: [
                  {
                    type: "action",
                    action: {
                      type: "cameraRoll",
                      label: "カメラロール",
                    },
                  },
                  {
                    type: "action",
                    action: {
                      type: "camera",
                      label: "カメラ",
                    },
                  },
                ],
              },
            }
      );
    }
    liff
      .sendMessages([
        {
          type: "text",
          text: "> コーデの着こなし相談をする",
        },
      ])
      .then(() => {
        mutate(
          { messages: consultLineMessages },
          {
            onSuccess: () => {
              setIsLoading(false);
            },
            onError: (error) => {
              setError(error);
            },
          }
        );
      })
      .catch((error) => {
        setError(error);
      });
  }, [flexMessage, isPhotoSendable, wearingPhoto, mutate]);

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
