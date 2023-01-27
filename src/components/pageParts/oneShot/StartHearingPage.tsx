import { Button } from "../../baseParts/Button";
import { FooterWrapper } from "../../baseParts/legacy/FooterWrapper";
import { Page } from "../../baseParts/legacy/Page";
import { PageHeader } from "../../baseParts/legacy/PageHeader";

type TProps = {
  readonly onClick: () => void;
  readonly onCancel: () => void;
};
export const StartHearingPage = ({ onClick, onCancel }: TProps) => {
  return (
    <Page>
      <div className="flex flex-col h-full justify-between">
        <div className="space-y-1	h-[50vh] relative">
          <div className="absolute w-[100vw] px-5 py-3 bottom-0">
            <PageHeader
              title="コーディネートの参考にするために、ヒアリングに答えていただきます"
              subtitle="※全部で5~10問あります"
              className="mb-8"
            />
          </div>
        </div>
        <FooterWrapper className="px-3 py-4">
          <Button onClick={onClick} variant="default">
            ヒアリングに進む
          </Button>
          <Button onClick={onCancel} variant="line">
            日付選択に戻る
          </Button>
        </FooterWrapper>
      </div>
    </Page>
  );
};
