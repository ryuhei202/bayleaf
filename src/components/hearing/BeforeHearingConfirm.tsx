import { Button } from "../baseParts/Button";
import { Page } from "../baseParts/Page";
import { PageHeader } from "../baseParts/PageHeader";

type TProps = {
  readonly onClick: () => void;
};
export const BeforeHearingConfirm = ({ onClick }: TProps) => {
  return (
    <Page>
      <div className="flex flex-col h-full justify-between">
        <div className="space-y-1	h-[50vh] relative">
          <div className="absolute w-[100vw] px-5 py-3 bottom-0">
            <PageHeader
              title="次回発送するコーディネートのために、ヒアリングに答えていただきます"
              subtitle="※全部で5~10問あります"
              className="mb-8"
            />
          </div>
        </div>
        <div className="flex flex-col space-y-1 align-middle px-5 py-3 my-auto">
          <Button onClick={onClick} variant="primary">
            ヒアリングに進む
          </Button>
        </div>
      </div>
    </Page>
  );
};
