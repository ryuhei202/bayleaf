import { Page } from "../../components/baseParts/legacy/Page";
import { PageHeader } from "../../components/baseParts/legacy/PageHeader";

export const HearingPostSuccess = () => {
  return (
    <Page>
      <PageHeader
        title={
          <>
            ヒアリングの回答
            <br />
            ありがとうございます！
          </>
        }
        className="m-4"
        subtitle="スタイリストが対応します。少々お待ちください。"
      />
    </Page>
  );
};
