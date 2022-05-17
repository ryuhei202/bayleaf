import { ChangeEventHandler } from "react";
import { Button } from "../../../components/baseParts/Button";
import { ImageUploader } from "../../../components/baseParts/ImageUploader";
import { Page } from "../../../components/baseParts/Page";
import { PageHeader } from "../../../components/baseParts/PageHeader";
import PreviewDefault from "../../../images/preview_default.png";

type TProps = {
  readonly onClickNext: () => void;
  readonly onChangeFile: ChangeEventHandler<HTMLInputElement>;
  readonly preUploadImage: string | null;
  readonly onSubmit: ({}) => void;
  readonly isLoading: boolean;
  readonly imageData: string | null;
  readonly imageFileName: string | null;
};

export const CombinationConsult = ({
  onClickNext,
  onChangeFile,
  preUploadImage,
  onSubmit,
  isLoading,
  imageData,
  imageFileName,
}: TProps) => {
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
            onClick={() => onSubmit({})}
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
