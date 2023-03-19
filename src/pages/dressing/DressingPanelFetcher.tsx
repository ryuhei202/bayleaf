import { TNonNullableDressing } from "../../api/dressings/TDressing";
import { useDressingShow } from "../../api/dressings/useDressingShow";
import { useSimplifiedHearingShow } from "../../api/simplifiedHearings/useSimplifiedHearingShow";
import { ErrorPage } from "../../components/baseParts/pages/ErrorPage";
import { LoaderPage } from "../../components/baseParts/pages/LoaderPage";
import { DressingPanel } from "../../components/pageParts/dressing/DressingPanel";

type TProps = {
  coordinateId: number;
  coordinateIndex: number;
};

export const DressingPanelFetcher = ({
  coordinateId,
  coordinateIndex,
}: TProps) => {
  const { data: DressingShowData, error: DressingShowError } = useDressingShow({
    coordinateId: coordinateId,
  });
  const { data: SimplifiedHearingShowDate, error: SimplifiedHearingShowError } =
    useSimplifiedHearingShow({ coordinateId: coordinateId });

  if (DressingShowError)
    return <ErrorPage message={DressingShowError.message} />;
  if (SimplifiedHearingShowError)
    return <ErrorPage message={SimplifiedHearingShowError.message} />;

  if (!SimplifiedHearingShowDate || !DressingShowData) return <LoaderPage />;

  return (
    <DressingPanel
      dressing={DressingShowData as TNonNullableDressing}
      hearingData={SimplifiedHearingShowDate}
      dressingIndex={coordinateIndex}
    />
  );
};
