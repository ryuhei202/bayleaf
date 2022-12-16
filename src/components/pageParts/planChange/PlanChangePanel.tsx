import { TPlan } from "../../../models/shared/Plans";
import { Button } from "../../baseParts/Button";
import { Typography } from "../../baseParts/legacy/Typography";
import { PlanChangeCard } from "./PlanChangeCard";
type TProps = {
  plan: TPlan;
  text: React.ReactNode;
  children: React.ReactNode;
};

export const PlanChangePanel = ({ plan, text, children }: TProps) => {
  return (
    <>
      <Typography className="text-center py-8">{text}</Typography>
      <PlanChangeCard plan={plan} />
      <div className="flex flex-col py-4 text-[3vw] sm:text-xs">
        <div className="flex mb-3">
          <span>※</span>
          <p>
            コーデのご利用シーンにジャケットorライトアウターが不要な場合、トップスを1点追加（スタンダード：4アイテム、プレミアム7アイテム）
          </p>
        </div>
        <div className="flex justify-start mb-3">
          <span>※</span>
          <p>
            コーデ交換をしない場合は、次月の月額が割引（詳しくは
            <a
              href={`${process.env.REACT_APP_SIRNIGHT_URL}/faq/payment#fc24azedyv`}
              target="_blank"
              className="underline underline-offset-2"
            >
              こちら
            </a>
            ）
          </p>
        </div>
        <div className="flex justify-start mb-3">
          <span>※</span>
          <p>
            毎月の決済でポイント付与。最大10％還元（詳しくは
            <a
              href={`${process.env.REACT_APP_SIRNIGHT_URL}/faq/point#vvrhq78wzg`}
              target="_blank"
              className="underline underline-offset-2"
            >
              こちら
            </a>
            ）
          </p>
        </div>
        <div className="flex justify-start mb-3">
          <span>※</span>
          <p>洋服は全て25%OFFで購入可能</p>
        </div>
      </div>
      {children}
    </>
  );
};
