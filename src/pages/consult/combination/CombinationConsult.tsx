import { Button } from "../../../components/baseParts/Button";
import { ImageUploader } from "../../../components/baseParts/ImageUploader";
import { Page } from "../../../components/baseParts/Page";
import { PageHeader } from "../../../components/baseParts/PageHeader";
import { useImageUploadHandler } from "../../../hooks/handler/image/useImageUploadHandler";
import PreviewDefault from "../../../images/preview_default.png";

type TProps = {
  readonly onClickNext: () => void;
  readonly onSubmit: (imageFileName: string, imageData: string) => void;
  readonly isLoading: boolean;
};

export const CombinationConsult = ({
  onClickNext,
  onSubmit,
  isLoading,
}: TProps) => {
  const { imageFileName, imageData, preUploadImage, onChangeFile } =
    useImageUploadHandler();

  return (
    <Page>
      <div className="flex flex-col px-5 h-full">
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
            onChange={onChangeFile}
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
