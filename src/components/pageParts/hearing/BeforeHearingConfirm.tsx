import { Link } from "react-router-dom";
import { M_PLAN_IDS } from "../../../models/shared/Plans";
import { Button } from "../../baseParts/Button";
import { Page } from "../../baseParts/legacy/Page";
import { PageHeader } from "../../baseParts/legacy/PageHeader";

type TProps = {
  readonly onClick: () => void;
  readonly planId: number;
};
export const BeforeHearingConfirm = ({ onClick, planId }: TProps) => {
  return (
    <Page>
      <div className="flex h-full flex-col justify-between">
        <div className="relative	h-[50vh] space-y-1">
          <div className="absolute bottom-0 w-[100vw] px-5 py-3">
            <PageHeader
              title="次回発送するコーディネートのために、ヒアリングに答えていただきます"
              subtitle={
                <>
                  ※全部で5~10問あります
                  <br />
                  {planId === M_PLAN_IDS.PREMIUM
                    ? "プレミアムプランのお客様は2回お答えください"
                    : ""}
                </>
              }
              className="mb-8"
            />
            <p className="text-red">
              プラン変更をご希望の方は、変更してから回答して頂きますようお願い致します
            </p>
            <p>
              変更は
              <Link to={`/plan_change`} className="underline">
                こちら
              </Link>
              から
            </p>
          </div>
        </div>
        <div className="my-auto flex flex-col space-y-1 px-5 py-3 align-middle">
          <Button onClick={onClick} dataTestId="startHearingLabel">
            ヒアリングに進む
          </Button>
        </div>
      </div>
    </Page>
  );
};
