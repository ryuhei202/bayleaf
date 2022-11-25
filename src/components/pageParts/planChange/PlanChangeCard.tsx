import React from "react";
import { TPlan } from "../../../models/hearing/MPlanIds";
import { Cloths } from "./Cloths";
import DIGONAL_LINE_IMAGE from "../../../images/icons/diagonal-line.svg";

type TProps = {
  plan: TPlan;
  disabled: boolean;
};
const rowClassName = (index: number, length: number) => {
  let classes = [];
  if (index % 2 === 0) classes.push("border-r-2");
  if (length % 2 === 0) {
    if (index < length - 2) classes.push("border-b-2");
  } else {
    if (index < length - 1) classes.push("border-b-2");
  }
  return classes.join(" ");
};

export const PlanChangeCard = ({ plan, disabled }: TProps) => {
  return (
    <div
      className={`duration-1000 font-medium ${disabled ? "opacity-20" : ""}`}
    >
      <div className="border-solid border border-themeGray rounded-md mx-3 bg-clay">
        <div className="">
          <p className="text-center text-[5vw] sm:text-xl my-6">
            月額
            <span className="text-[10vw] sm:text-4xl ml-2 font-lora font-bold">{`¥${plan.price.withTax.toLocaleString()}`}</span>
            （税込）
          </p>
          <div className="flex flex-wrap justify-center space-x-3 mb-6">
            <p className="text-[4vw] sm:text-xl text-[#979B9A]">
              {`¥${plan.price.withoutTax.toLocaleString()}（税抜） `}
              <a
                href={"/news/cro5lzty_e72/"}
                className="text-themeGray font-normal underline decoration-from-font underline-offset-2"
                target="_blank"
              >
                継続割引について
              </a>
            </p>
          </div>
        </div>
        <div className="bg-themeGray text-clay text-center text-[4vw] sm:text-xl py-1">
          こんな方におすすめ
        </div>
        <div
          className={`h-[30vw] sm:h-44 font-medium flex flex-col justify-evenly ${
            plan.targets.length % 2 === 0 ? "" : ""
          }`}
        >
          {plan.targets.map((target, index) => (
            <React.Fragment key={index}>
              <p
                className={`text-[3.5vw] sm:text-base flex justify-center items-center`}
              >
                {target}
              </p>
              {index === plan.targets.length - 1 ? (
                <></>
              ) : (
                <hr className="border border-dashed border-[#C8C9C3]" />
              )}
            </React.Fragment>
          ))}
        </div>
        <div className="bg-themeGray text-clay text-center text-[4vw] sm:text-xl py-1">
          シーン例
        </div>
        <div className="flex flex-wrap text-center font-medium">
          {plan.scenes.map((scene, index) => (
            <p
              className={`w-1/2 text-[3.5vw] sm:text-base py-4 border-dashed border-[#C8C9C3] ${rowClassName(
                index,
                plan.scenes.length
              )}`}
              key={index}
            >
              {typeof scene === "string" ? (
                scene
              ) : (
                <>
                  {scene.main}
                  <span className="font-normal ml-[1vw] sm:ml-3">
                    {scene.sub}
                  </span>
                </>
              )}
            </p>
          ))}
        </div>
        <div className="bg-themeGray text-clay text-center text-[4vw] sm:text-xl py-1">
          コーデ数
        </div>
        <div className="h-[25.5vw] sm:h-fit mx-auto flex justify-center text-[3.5vw] sm:text-base items-center font-medium">
          <Cloths planId={plan.id} />
          <div className="py-8">
            <p className="h-full flex items-center">
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
        </div>
      </div>
    </div>
  );
};
