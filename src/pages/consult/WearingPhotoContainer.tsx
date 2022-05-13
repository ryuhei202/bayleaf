import { useState } from "react";
import { TImagePathsResponse } from "../../api/shared/TImagePathsResponse";
import { Page } from "../../components/baseParts/Page";
import { TConsultingItem } from "../../models/consult/TConsultingItem";
import { WearingPhoto } from "./WearingPhoto";

type TProps = {
  items: TConsultingItem[];
};

export const WearingPhotoContainer = ({ items }: TProps) => {
  const [uploadedImagePaths, setUploadedImagePaths] =
    useState<TImagePathsResponse | undefined>(undefined);

  return (
    <Page>
      {uploadedImagePaths ? (
        {
          /** 別タスクで実装*/
        }
      ) : (
        <WearingPhoto
          items={items}
          setUploadedImagePaths={setUploadedImagePaths}
        />
      )}
    </Page>
  );
};
