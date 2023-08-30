import FIRST_CLOTH from "../../../images/icons/cloths/1.svg";
import THIRD_CLOTH from "../../../images/icons/cloths/3.svg";
import FORTH_CLOTH from "../../../images/icons/cloths/4.svg";
import DiagonalLineIcon from "../../../images/icons/diagonal-line.svg";

import { OneShot } from "../../../models/shared/OneShot";
import { withTax } from "../../../models/shared/Tax";

import { Button } from "../../baseParts/Button";
import { Page } from "../../baseParts/legacy/Page";
import { Typography } from "../../baseParts/legacy/Typography";
import { ScheduleDiagram } from "./ScheduleDiagram";

type TProps = {
  readonly discountPrice: number;
  readonly additionalPoint: number;
  readonly onClickStart: () => void;
};

export const WelcomePage = ({
  discountPrice,
  additionalPoint,
  onClickStart,
}: TProps) => {
  return (
    <Page className="flex h-full min-h-screen flex-col items-center justify-between px-3 pb-3 pt-8 text-themeGray">
      <Typography size="2xl" className="mb-8 text-center">
        単発レンタルを開始する
      </Typography>
      <div className="w-full rounded-md border border-solid border-themeGray bg-clay">
        <div className="bg-themeGray py-1 text-center text-[4vw] text-clay">
          料金
        </div>
        {discountPrice > 0 ? (
          <>
            <p className="mb-2 mt-5 text-center text-[5vw]">
              <span className="font-lora text-[10vw] line-through">{`¥${OneShot.price.withoutTax.toLocaleString()}`}</span>
              <br />
              <span className="text-[4vw] line-through">{`(税込 ¥${OneShot.price.withTax.toLocaleString()})`}</span>
            </p>
            <div className="indent-[50%]">
              <span className="font-bold">
                ↓<span className="ml-2 text-xs text-red">クーポン適用後</span>
              </span>
            </div>
            <p className="mb-5 text-center text-[5vw]">
              <span className="font-lora text-[10vw]">{`¥${(
                OneShot.price.withoutTax - discountPrice
              ).toLocaleString()}`}</span>
              <br />
              <span className="text-[4vw]">{`(税込 ¥${withTax(
                OneShot.price.withoutTax - discountPrice
              ).toLocaleString()})`}</span>
            </p>
          </>
        ) : (
          <>
            <p className="my-5 text-center text-[5vw]">
              <span className="font-lora text-[10vw]">{`¥${OneShot.price.withoutTax.toLocaleString()}`}</span>
              <br />
              <span className="text-[4vw]">{`(税込 ¥${OneShot.price.withTax.toLocaleString()})`}</span>
            </p>
          </>
        )}

        <div className="bg-themeGray py-1 text-center text-[4vw] text-clay">
          服の枚数
        </div>
        <div className="flex justify-center">
          <div className="flex w-1/3 py-8">
            <img
              src={FORTH_CLOTH}
              alt="cloth-icon"
              className="z-10 -mr-4 w-1/3"
            />
            <img src={FIRST_CLOTH} alt="cloth-icon" className="-mr-2 w-1/3" />
            <img src={THIRD_CLOTH} alt="cloth-icon" className="z-10 w-1/3" />
          </div>
          <p className="flex items-center justify-center py-5 text-center text-[5vw]">
            <span>
              <span className="font-lora text-[10vw]">1</span> コーデ
            </span>
            <img
              src={DiagonalLineIcon}
              alt="diagonal-line"
              width="18vw"
              className="mx-1"
            />
            <span>
              <span className="font-lora text-[10vw]">3</span> アイテム
            </span>
          </p>
        </div>
        <div className="bg-themeGray py-1 text-center text-[4vw] text-clay">
          レンタル期間
        </div>
        <div className="w-full p-4">
          <ScheduleDiagram />
        </div>
        <div className="bg-themeGray py-1 text-center text-[4vw] text-clay">
          ポイント
        </div>
        <p className="my-5 text-center text-[5vw]">
          <span className="font-lora text-[10vw]">{additionalPoint}</span>
          ポイント付与
          <br />
          <span className="text-[3vw]">
            *ポイントはアイテム購入にご利用できます
          </span>
        </p>
      </div>
      <Button size="large" className="mt-4" onClick={onClickStart}>
        利用を開始
      </Button>
    </Page>
  );
};
