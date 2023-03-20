import { TNonNullableDressing } from "../../api/dressings/TDressing";
import { useDressingShow } from "../../api/dressings/useDressingShow";
import { useSimplifiedHearingShow } from "../../api/simplifiedHearings/useSimplifiedHearingShow";
import { ErrorPage } from "../../components/baseParts/pages/ErrorPage";
import { LoaderPage } from "../../components/baseParts/pages/LoaderPage";
import { DressingPanel } from "../../components/pageParts/dressing/DressingPanel";

type TProps = {
  coordinateId: number;
};

export const DressingPanelFetcher = ({ coordinateId }: TProps) => {
  const { data: dressingShowData, error: dressingShowError } = useDressingShow({
    coordinateId: coordinateId,
  });
  const { data: simplifiedHearingShowData, error: simplifiedHearingShowError } =
    useSimplifiedHearingShow({ coordinateId: coordinateId });

  if (dressingShowError)
    return <ErrorPage message={dressingShowError.message} />;
  if (simplifiedHearingShowError)
    return <ErrorPage message={simplifiedHearingShowError.message} />;

  if (!simplifiedHearingShowData || !dressingShowData) return <LoaderPage />;

  return (
    <DressingPanel
      dressing={dressingShowData as TNonNullableDressing}
      hearingData={simplifiedHearingShowData}
    />
  );
};
