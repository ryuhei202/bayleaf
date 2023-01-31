import JACKET_IMAGE from "../../../images/icons/cloths/4.svg";
import DIGONAL_LINE_IMAGE from "../../../images/icons/diagonal-line.svg";
import { TPlan } from "../../../models/shared/Plans";

type TProps = {
  plan: TPlan;
};

export const PlanChangeCard = ({ plan }: TProps) => {
  return (
    <div className="text-themeGray duration-1000 font-medium">
      <p className="text-center mb-12">{plan.description}</p>
      <div className="relative">
        <div className="absolute bg-themeGray rounded-full w-20 h-20 right-0 bottom-0 top-[-2.5rem]">
          <div className="relative mt-1">
            <img
              src={JACKET_IMAGE}
              alt="cloth-icon"
              className="relative w-1/2 m-auto"
            />
            {!plan.isJacketAvailable && (
              <p className="absolute text-red leading-none text-[3rem] top-0 right-1/2 transform translate-x-1/2">
                ×
              </p>
            )}
            <p className="text-xs text-clay text-center">
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
      <div className="border-solid border border-themeGray rounded-md mx-3">
        <div>
          <p className="text-center mt-6 mb-2 leading-none">
            月額
            <span className="text-[10vw] sm:text-4xl ml-2 font-lora font-bold">{`¥${plan.price.withoutTax.toLocaleString()}`}</span>
            （税別）
          </p>
          <div className="flex flex-wrap justify-center space-x-3 mb-6">
            <div className="text-[4vw] sm:text-xl">
              <span className="text-gray">{`¥${plan.price.withTax.toLocaleString()}（税込）`}</span>
              <a
                href={`${process.env.REACT_APP_SIRNIGHT_URL}/faq/payment#fc24azedyv`}
                target="_blank"
                rel="noreferrer"
                className="text-themeGray font-normal underline decoration-from-font underline-offset-2"
              >
                継続割引について
              </a>
            </div>
          </div>
        </div>
        <div className="bg-themeGray text-clay text-center text-[4vw] sm:text-xl py-1">
          コーデ数
        </div>
        <div className="h-full font-medium flex flex-col justify-evenly">
          <div className="h-[5rem] mx-auto">
            <p className="h-full flex items-center text-center text-xs">
              <span className="font-lora text-[7vw] sm:text-3xl mr-[1vw] sm:mr-1">
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
              <span className="font-lora text-[7vw] sm:text-3xl mr-[1vw] sm:mr-1">
                {plan.itemNum}
              </span>
              アイテム
            </p>
          </div>
          <hr className="border border-dashed border-[#C8C9C3]" />
          <div className="h-[5rem] mx-auto">
            <p className="h-full flex items-center text-center text-xs sm:text-sm">
              トップス
              <span className="font-lora text-2xl mr-[1vw] sm:mr-1 ml-1">
                {plan.topsNum}
              </span>
              <span className="text-gray mx-1">＋</span>
              ボトムス
              <span className="font-lora text-2xl mr-[1vw] sm:mr-1 ml-1">
                {plan.bottomsNum}
              </span>
              {plan.isJacketAvailable && (
                <>
                  <span className="text-gray mx-1">＋</span>
                  <div className="flex flex-col text-xs text-left">
                    <p>ジャケット or</p>
                    <p>ライトアウター</p>
                  </div>
                  <span className="font-lora text-2xl mr-[1vw] sm:mr-1 ml-1">
                    1
                  </span>
                </>
              )}
            </p>
          </div>
        </div>
        <div className="bg-themeGray text-clay text-center text-[4vw] sm:text-xl py-1">
          ポイント
        </div>
        <div className="flex items-center text-center h-[5rem]">
          <p className="mx-auto text-sm">
            毎月決済時に
            <span className="font-lora text-[7vw] sm:text-2xl mr-[1vw] sm:mr-1 ml-1">
              {plan.point}
            </span>
            ポイント付与
          </p>
        </div>
        <div className="bg-themeGray text-clay text-center text-[4vw] sm:text-xl py-1">
          割引機能
        </div>
        <div className="flex flex-col text-xs ml-2">
          <p className="my-4">
            ・洋服は全て
            <span className="font-lora text-[7vw] sm:text-2xl mr-[1vw] sm:mr-1 ml-1">
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
