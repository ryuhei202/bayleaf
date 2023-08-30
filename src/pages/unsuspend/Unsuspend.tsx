import { useEffect } from "react";
import { useMembersIndex } from "../../api/members/useMembersIndex";
import { Page } from "../../components/baseParts/legacy/Page";
import { Typography } from "../../components/baseParts/legacy/Typography";
import { ErrorPage } from "../../components/baseParts/pages/ErrorPage";
import { LoaderPage } from "../../components/baseParts/pages/LoaderPage";
import { UnsuspendContainer } from "./UnsuspendContainer";

export const Unsuspend = () => {
  const { data: membersData, error: membersError } = useMembersIndex();

  useEffect(() => {
    document.title = "停止再開 | UWear";
  }, []);

  if (membersError) return <ErrorPage message={membersError.message} />;

  if (!membersData) return <LoaderPage />;

  if (membersData.length === 0)
    return (
      <div data-testid="ValidationForNotExistingMember">
        <Page className="flex items-center justify-center">
          <Typography>ユーザーが存在しません</Typography>
        </Page>
      </div>
    );

  if (membersData.length > 1) {
    return (
      <div data-testid="ValidationForMultpleMember">
        <Page className="flex items-center justify-center">
          <Typography>
            ユーザーが複数人います。マイページから再開をお願いいたします
          </Typography>
        </Page>
      </div>
    );
  }

  if (!membersData[0].isSuspend || membersData[0].isPaymentError) {
    window.location.assign(`${process.env.REACT_APP_HOST_URL}/unsuspend`);
    return (
      <div className="flex h-screen items-center justify-center">
        <Typography>リダイレクト中...</Typography>
      </div>
    );
  }

  return (
    <div data-testid="UnsuspendContainer">
      <UnsuspendContainer memberData={membersData[0]} />
    </div>
  );
};
