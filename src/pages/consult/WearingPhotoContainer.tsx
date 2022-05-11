import { useEffect, useState } from "react";
import { Page } from "../../components/baseParts/Page";
import { WearingPhoto } from "./WearingPhoto";

export const WearingPhotoContainer = () => {
  const [alreadySent, setAlreadySent] = useState<boolean>(false);

  return (
    <Page>
      {alreadySent ? (
        <div>AfterConsult</div>
      ) : (
        <WearingPhoto setAlreadySent={setAlreadySent} />
      )}
    </Page>
  );
};
