import JACKET_IMAGE from "../../../images/icons/cloths/4.svg";
import DIGONAL_LINE_IMAGE from "../../../images/icons/diagonal-line.svg";
import { TPlan } from "../../../models/shared/Plans";

type TProps = {
  plan: TPlan;
};

export const PlanChangeCard = ({ plan }: TProps) => {
  return (
    <div className="font-medium text-themeGray duration-1000">
      <p className="mb-12 text-center">{plan.description}</p>
      <div className="relative">
        <div className="absolute bottom-0 right-0 top-[-2.5rem] h-20 w-20 rounded-full bg-themeGray">
          <div className="relative mt-1">
            <img
              src={JACKET_IMAGE}
              alt="cloth-icon"
              className="relative m-auto w-1/2"
            />
            {!plan.isJacketAvailable && (
              <p className="absolute right-1/2 top-0 translate-x-1/2 text-[3rem] leading-none text-red">
                ×
              </p>
            )}
            <p className="text-center text-xs text-clay">
              {plan.isJacketAvailable ? (
                <>
                  ジャケット
                  <br />
                  あり
                </>
              ) : (
                <>
                  ジャケット
                  <br />
                  なし
                </>
              )}
            </p>
          </div>
        </div>
      </div>
      <div className="mx-3 rounded-md border border-solid border-themeGray">
        <div>
          <p className="mb-2 mt-6 text-center leading-none">
            月額
            <span className="sm:text-4xl ml-2 font-lora text-[10vw] font-bold">{`¥${plan.price.withoutTax.toLocaleString()}`}</span>
            （税別）
          </p>
          <div className="mb-6 flex flex-wrap justify-center space-x-3">
            <div className="sm:text-xl text-[4vw]">
              <span className="text-gray">{`¥${plan.price.withTax.toLocaleString()}（税込）`}</span>
              <a
                href={`${process.env.REACT_APP_SIRNIGHT_URL}/faq/payment#fc24azedyv`}
                target="_blank"
                rel="noreferrer"
                className="font-normal text-themeGray underline decoration-from-font underline-offset-2"
              >
                継続割引について
              </a>
            </div>
          </div>
        </div>
        <div className="sm:text-xl bg-themeGray py-1 text-center text-[4vw] text-clay">
          コーデ数
        </div>
        <div className="flex h-full flex-col justify-evenly font-medium">
          <div className="mx-auto h-[5rem]">
            <p className="flex h-full items-center text-center text-xs">
              <span className="sm:text-3xl sm:mr-1 mr-[1vw] font-lora text-[7vw]">
                {plan.coordinateNum}
              </span>
              コーデ
              <span className="mx-2">
                <img
                  src={DIGONAL_LINE_IMAGE}
                  alt="diagonal-line"
                  width="18vw"
                />
              </span>
              <span className="sm:text-3xl sm:mr-1 mr-[1vw] font-lora text-[7vw]">
                {plan.itemNum}
              </span>
              アイテム
            </p>
          </div>
          <hr className="border border-dashed border-[#C8C9C3]" />
          <div className="mx-auto h-[5rem]">
            <p className="sm:text-sm flex h-full items-center text-center text-xs">
              トップス
              <span className="sm:mr-1 ml-1 mr-[1vw] font-lora text-2xl">
                {plan.topsNum}
              </span>
              <span className="mx-1 text-gray">＋</span>
              ボトムス
              <span className="sm:mr-1 ml-1 mr-[1vw] font-lora text-2xl">
                {plan.bottomsNum}
              </span>
              {plan.isJacketAvailable && (
                <>
                  <span className="mx-1 text-gray">＋</span>
                  <span className="flex flex-col text-left text-xs">
                    <span>ジャケット or</span>
                    <span>ライトアウター</span>
                  </span>
                  <span className="sm:mr-1 ml-1 mr-[1vw] font-lora text-2xl">
                    1
                  </span>
                </>
              )}
            </p>
          </div>
        </div>
        <div className="sm:text-xl bg-themeGray py-1 text-center text-[4vw] text-clay">
          ポイント
        </div>
        <div className="flex h-[5rem] items-center text-center">
          <p className="mx-auto text-sm">
            毎月決済時に
            <span className="sm:text-2xl sm:mr-1 ml-1 mr-[1vw] font-lora text-[7vw]">
              {plan.point}
            </span>
            ポイント付与
          </p>
        </div>
        <div className="sm:text-xl bg-themeGray py-1 text-center text-[4vw] text-clay">
          割引機能
        </div>
        <div className="ml-2 flex flex-col text-xs">
          <p className="my-4">
            ・洋服は全て
            <span className="sm:text-2xl sm:mr-1 ml-1 mr-[1vw] font-lora text-[7vw]">
              25
            </span>
            ％OFFで購入可能
          </p>
          <p className="mb-4">
            ・コーデ交換をしない場合、次月金額が割引（
            <a
              href={`${process.env.REACT_APP_SIRNIGHT_URL}/faq/payment#fc24azedyv`}
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-2"
            >
              詳細
            </a>
            ）
          </p>
        </div>
      </div>
    </div>
  );
};
