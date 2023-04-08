import { ChangeEventHandler } from "react";

import { Button } from "../../components/baseParts/legacy/Button";
import { IconButton } from "../../components/baseParts/legacy/IconButton";
import { ArrowIcon } from "../../components/baseParts/legacy/icons/ArrowIcon";
import { ImageAlt } from "../../components/baseParts/legacy/images/ImageAlt";
import { ImageUploader } from "../../components/baseParts/legacy/ImageUploader";
import { PageHeader } from "../../components/baseParts/legacy/PageHeader";
import { Typography } from "../../components/baseParts/legacy/Typography";
import PreviewWearing from "../../images/preview_wearing.png";
import { TConsultingItem } from "../../models/consult/TConsultingItem";

type TProps = {
  items: TConsultingItem[];
  preUploadImage: string | null;
  imageFileName: string;
  imageData: string;
  onChangeFile: ChangeEventHandler<HTMLInputElement>;
  onSubmit: () => void;
  isLoading: boolean;
  onSkip: () => void;
  onCancel: () => void;
};

export const WearingPhoto = ({
  items,
  preUploadImage,
  imageFileName,
  imageData,
  onChangeFile,
  onSubmit,
  isLoading,
  onSkip,
  onCancel,
}: TProps) => {
  return (
    <div className="m-8">
      <IconButton onClick={onCancel}>
        <ArrowIcon className="h-10 my-auto" />
      </IconButton>
      <PageHeader title="着用写真を送ってください" />
      <Typography className="my-6">
        以下のアイテムを着用している写真を送ってください。
        <br />
        着用写真をもとにサイズ感や着こなしを確認します。
      </Typography>

      <div className="flex h-[150px] justify-center space-x-3 mt-4">
        {items.map((item) => {
          return <ImageAlt imageSrc={item.imagePaths.large} key={item.id} />;
        })}
      </div>
      <hr className="border-none h-1 bg-gray-400 my-5" />

      <ImageUploader
        onChange={onChangeFile}
        preUploadImage={preUploadImage}
        defaultSrc={PreviewWearing}
      />

      <Button
        onClick={onSubmit}
        isLoading={isLoading}
        disabled={!imageFileName && !imageData}
      >
        次へ
      </Button>
      <Button
        variant="text"
        className="mt-4 px-10"
        onClick={onSkip}
        disabled={!!imageFileName && !!imageData}
      >
        <Typography className="text-lg text-indigo-900 underline underline-offset-4">
          あとで着用写真を送る
        </Typography>
      </Button>
    </div>
  );
};
