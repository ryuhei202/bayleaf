import { useState } from "react";
import { TImagePathsResponse } from "../../api/shared/TImagePathsResponse";
import { Page } from "../../components/baseParts/Page";
import { WearingPhoto } from "./WearingPhoto";

export const WearingPhotoContainer = () => {
  const [imagePaths, setImagePaths] =
    useState<TImagePathsResponse | undefined>(undefined);

  return (
    <Page>
      {imagePaths ? (
        <div>AfterConsult</div>
      ) : (
        <WearingPhoto setImagePaths={setImagePaths} />
      )}
    </Page>
  );
};
