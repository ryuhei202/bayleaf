import { useState } from "react";
import { TConsultingItem } from "../../../models/consult/TConsultingItem";
import { AfterConsultContainer } from "../AfterConsultContainer";
import { SceneDetailForm } from "./SceneDetailForm";

type TProps = {
  readonly items: TConsultingItem[];
};

export const SceneConsultContainer = ({ items }: TProps) => {
  const [flexMessage, setFlexMessage] = useState<string | null>(null);
  const getItemImageUrls = (): string[] => {
    return items.map((item) => item.imagePaths.thumb);
  };
  return (
    <>
      {flexMessage ? (
        <AfterConsultContainer
          flexMessage={flexMessage}
          isPhotoSendable={false}
        />
      ) : (
        <SceneDetailForm
          itemImageUrls={getItemImageUrls()}
          setFlexMessage={setFlexMessage}
        />
      )}
    </>
  );
};
