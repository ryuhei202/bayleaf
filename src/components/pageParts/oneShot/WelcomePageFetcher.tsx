import { useMembersIndex } from "../../../api/members/useMembersIndex";
import { useSerialCodesIndex } from "../../../api/serialCodes/useSerialCodesIndex";
import { ErrorPage } from "../../baseParts/pages/ErrorPage";
import { LoaderPage } from "../../baseParts/pages/LoaderPage";
import { WelcomePage } from "./WelcomePage";

type TProps = {
  readonly onClickStart: () => void;
};
export const WelcomePageFetcher = ({ onClickStart }: TProps) => {
  const { data: membersData, error: membersError } = useMembersIndex();

  const { data: serialCodesIndexData, error: serialCodesIndexError } =
    useSerialCodesIndex({
      memberId: membersData ? membersData[0].id : undefined,
    });
  if (membersError) return <ErrorPage message={membersError.message} />;
  if (!membersData) return <LoaderPage />;

  if (serialCodesIndexError)
    return <ErrorPage message={serialCodesIndexError.message} />;
  if (!serialCodesIndexData) return <LoaderPage />;

  return (
    <WelcomePage
      serialCodesIndexData={serialCodesIndexData}
      onClickStart={onClickStart}
    />
  );
};
