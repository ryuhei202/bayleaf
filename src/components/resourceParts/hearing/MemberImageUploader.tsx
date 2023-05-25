import PreviewDefault from "../../../images/preview_default.png";
import { Button } from "../../baseParts/Button";
import { IconButton } from "../../baseParts/legacy/IconButton";
import { ImageUploader } from "../../baseParts/legacy/ImageUploader";
import { Page } from "../../baseParts/legacy/Page";
import { PageHeader } from "../../baseParts/legacy/PageHeader";
import { ArrowIcon } from "../../baseParts/legacy/icons/ArrowIcon";
type TProps = {
  readonly onClickNext: () => void;
  readonly onSubmit: (imageFileName: string, imageData: string) => void;
  readonly onCancel: () => void;
  imageFileName: string | null;
  imageData: string | null;
  preUploadImage: string | null;
  handleChangeFile: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const MemberImageUploader = ({
  onClickNext,
  onSubmit,
  onCancel,
  imageFileName,
  imageData,
  preUploadImage,
  handleChangeFile,
}: TProps) => {
  return (
    <Page>
      <IconButton onClick={onCancel} className="mt-5 ml-5">
        <ArrowIcon className="h-10 my-auto" />
      </IconButton>
      <div className="flex flex-col px-5 h-full">
        <PageHeader
          title={
            <>
              写真をいただくとあなたの雰囲気に合うコーデを提案しやすくなります。
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
            className="my-3"
            disabled={!imageFileName && !imageData}
          >
            次へ
          </Button>
          {!(!!imageFileName && !!imageData) && (
            <p
              onClick={onClickNext}
              className="text-center text-sm text-themeGray underline cursor-pointer mt-4"
            >
              今は写真を用意できない
            </p>
          )}
        </div>
      </div>
    </Page>
  );
};
