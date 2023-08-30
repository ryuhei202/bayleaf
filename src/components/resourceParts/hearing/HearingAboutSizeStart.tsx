import { Button } from "../../baseParts/Button";
import { Page } from "../../baseParts/legacy/Page";
import { PageHeader } from "../../baseParts/legacy/PageHeader";

type TProps = {
  readonly onClick: () => void;
};
export const HearingAboutSizeStart = ({ onClick }: TProps) => {
  return (
    <Page className="flex min-h-screen flex-col items-center justify-between px-8">
      <div className="flex h-1/2 flex-col items-center justify-end">
        <PageHeader
          title="サイズについてのヒアリング"
          subtitle={
            <>
              このヒアリングは初回のみです。
              <br />
              コーデ作成にのみ利用させていただきます。
            </>
          }
        />
      </div>
      <Button size="large" className="mb-8" onClick={onClick}>
        回答をはじめる
      </Button>
    </Page>
  );
};
