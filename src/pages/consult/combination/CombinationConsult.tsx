import { Button } from "../../../components/baseParts/legacy/Button";
import { IconButton } from "../../../components/baseParts/legacy/IconButton";
import { ArrowIcon } from "../../../components/baseParts/legacy/icons/ArrowIcon";
import { ImageUploader } from "../../../components/baseParts/legacy/ImageUploader";
import { Page } from "../../../components/baseParts/legacy/Page";
import { PageHeader } from "../../../components/baseParts/legacy/PageHeader";
import { useImageUploadHandler } from "../../../hooks/handler/image/useImageUploadHandler";
import PreviewDefault from "../../../images/preview_default.png";

type TProps = {
  readonly onClickNext: () => void;
  readonly onSubmit: (imageFileName: string, imageData: string) => void;
  readonly isLoading: boolean;
  readonly onCancel: () => void;
};

export const CombinationConsult = ({
  onClickNext,
  onSubmit,
  isLoading,
  onCancel,
}: TProps) => {
  const { imageFileName, imageData, preUploadImage, handleChangeFile } =
    useImageUploadHandler();

  return (
    <Page>
      <IconButton onClick={onCancel} className="ml-5 mt-5">
        <ArrowIcon className="my-auto h-10" />
      </IconButton>
      <div className="flex h-full flex-col px-5">
        <PageHeader
          title={
            <>
              使いたいアイテムの写真を
              <br />
              送ってください
            </>
          }
          className="mb-8"
        />
        <div>
          <ImageUploader
            onChange={handleChangeFile}
            preUploadImage={preUploadImage}
            defaultSrc={PreviewDefault}
          />
          <Button
            onClick={() => onSubmit(imageFileName!, imageData!)}
            className="mb-3"
            isLoading={isLoading}
            disabled={!imageFileName && !imageData}
          >
            次へ
          </Button>
          <Button
            onClick={onClickNext}
            disabled={!!imageFileName && !!imageData}
            variant="text"
          >
            今は写真を用意できない
          </Button>
        </div>
      </div>
    </Page>
  );
};
