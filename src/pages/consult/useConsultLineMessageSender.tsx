import liff from "@line/liff/dist/lib";
import { TImagePathsResponse } from "../../api/shared/TImagePathsResponse";
import { OUTFIT_TEST_IMAGE_URL } from "../../images/TestImageUrl";
import { useLineMessageCreate } from "../../api/lineMessages/useLineMessageCreate";
import { useState } from "react";

type ConsultLineMessage = {
  readonly send: (
    flexMessage: string,
    isPhotoSendable: boolean,
    wearingPhoto?: TImagePathsResponse
  ) => void;
  readonly isSending: boolean;
  readonly isError: boolean;
  readonly isSuccess: boolean;
};

export const useConsultLineMessageSender = (): ConsultLineMessage => {
  const { mutate, isLoading, isSuccess } = useLineMessageCreate();
  const [isSendingLineMessage, setIsSendingLineMessage] = useState(false);
  const [isError, setIsError] = useState(false);

  const send = (
    flexMessage: string,
    isPhotoSendable: boolean,
    wearingPhoto?: TImagePathsResponse
  ) => {
    const consultLineMessages: any[] = [
      {
        type: "text",
        text: "コーデの着こなし相談を受け付けました！",
        sender: true,
      },
    ];
    consultLineMessages.push(JSON.parse(flexMessage));
    if (isPhotoSendable) {
      if (wearingPhoto !== undefined) {
        consultLineMessages.push({
          type: "image",
          sender: true,
          originalContentUrl:
            process.env.REACT_APP_ENV === "development"
              ? OUTFIT_TEST_IMAGE_URL
              : wearingPhoto.original,
          previewImageUrl:
            process.env.REACT_APP_ENV === "development"
              ? OUTFIT_TEST_IMAGE_URL
              : wearingPhoto.large,
        });
        consultLineMessages.push({
          type: "text",
          text: "追ってスタイリストが対応しますので、しばらくお待ちください！",
          sender: true,
        });
      } else {
        consultLineMessages.push({
          type: "text",
          text: "追ってスタイリストが対応しますので、着用写真の送信をお願いします！",
          sender: true,
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
        });
      }
    } else {
      consultLineMessages.push({
        type: "text",
        text: "追ってスタイリストが対応しますので、しばらくお待ちください！",
        sender: true,
      });
    }

    setIsSendingLineMessage(true);
    liff
      .sendMessages([
        {
          type: "text",
          text: "> コーデの着こなし相談をする",
        },
      ])
      .then(() => {
        setIsSendingLineMessage(false);
        mutate(
          { messages: consultLineMessages },
          {
            onError: () => setIsError(true),
          }
        );
      })
      .catch(() => {
        setIsError(true);
      });
  };

  return {
    send,
    isSending: isLoading || isSendingLineMessage,
    isError,
    isSuccess,
  };
};
