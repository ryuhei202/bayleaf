import { M_PLAN_IDS } from "../../../models/hearing/MPlanIds";
import { Button } from "../../baseParts/Button";
import { Page } from "../../baseParts/Page";
import { PageHeader } from "../../baseParts/PageHeader";

type TProps = {
  readonly onClick: () => void;
  readonly planId: number;
};
export const BeforeHearingConfirm = ({ onClick, planId }: TProps) => {
  return (
    <Page>
      <div className="flex flex-col h-full justify-between">
        <div className="space-y-1	h-[50vh] relative">
          <div className="absolute w-[100vw] px-5 py-3 bottom-0">
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
              <a
                className="underline"
                href={`${process.env.REACT_APP_HOST_URL}/plan_change`}
              >
                こちら
              </a>
              から
            </p>
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
