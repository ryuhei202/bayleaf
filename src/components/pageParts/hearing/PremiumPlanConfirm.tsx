import { Button } from "../../baseParts/Button";
import { Page } from "../../baseParts/legacy/Page";
import { PageHeader } from "../../baseParts/legacy/PageHeader";

type TProps = {
  readonly onClick: () => void;
  readonly onCancel?: () => void;
};
export const PremiumPlanConfirm = ({ onClick, onCancel }: TProps) => {
  return (
    <Page>
      <div className="flex h-full flex-col justify-between">
        <div className="relative	h-[50vh] space-y-1">
          <div className="absolute bottom-0 w-[100vw] px-5 py-3">
            <PageHeader
              title="プレミアムプランの方は2コーデですので2回答えていただきます"
              className="mb-8"
            />
          </div>
        </div>
        <div className="my-auto flex flex-col space-y-1 px-5 py-3 align-middle">
          <Button onClick={onClick} dataTestId="nextHearingLabel">
            二度目のヒアリングに進む
          </Button>
          <Button onClick={onCancel} variant="line">
            一つ前に戻る
          </Button>
        </div>
      </div>
    </Page>
  );
};
