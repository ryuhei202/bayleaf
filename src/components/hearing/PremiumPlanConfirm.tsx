import { Button } from "../baseParts/Button";
import { Page } from "../baseParts/Page";
import { PageHeader } from "../baseParts/PageHeader";

type TProps = {
  readonly onClick: () => void;
  readonly onCancel?: () => void;
};
export const PremiumPlanConfirm = ({ onClick, onCancel }: TProps) => {
  return (
    <Page>
      <div className="flex flex-col h-full justify-between">
        <div className="space-y-1	h-[50vh] relative">
          <div className="absolute w-[100vw] px-5 py-3 bottom-0">
            <PageHeader
              title="プレミアムプランの方は2コーデですので2回答えていただきます"
              className="mb-8"
            />
          </div>
        </div>
        <div className="flex flex-col space-y-1 align-middle px-5 py-3 my-auto">
          <Button onClick={onClick} variant="primary">
            二度目のヒアリングに進む
          </Button>
          <Button onClick={onCancel} variant="text">
            一つ前に戻る
          </Button>
        </div>
      </div>
    </Page>
  );
};
