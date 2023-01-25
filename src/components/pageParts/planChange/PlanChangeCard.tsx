import React from "react";
import DIGONAL_LINE_IMAGE from "../../../images/icons/diagonal-line.svg";
import { TPlan } from "../../../models/shared/Plans";
import { Cloths } from "./Cloths";

type TProps = {
  plan: TPlan;
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

export const PlanChangeCard = ({ plan }: TProps) => {
  return (
    <div className="text-themeGray duration-1000 font-medium">
      <div className="border-solid border border-themeGray rounded-md bg-clay">
        <div>
          <p className="text-center text-[5vw] my-6">
            月額
            <span className="text-[10vw] ml-2 font-lora">{`¥${plan.price.withoutTax.toLocaleString()}`}</span>
          </p>
          <div className="flex flex-wrap justify-center space-x-3 mb-6">
            <p className="text-[4vw]">
              {`(税込 ¥${plan.price.withTax.toLocaleString()}) `}
              <a
                href={`${process.env.REACT_APP_SIRNIGHT_URL}/faq/payment#fc24azedyv`}
                className="text-themeGray font-normal underline decoration-from-font underline-offset-2"
                target="_blank"
                rel="noreferrer"
              >
                継続割引について
              </a>
            </p>
          </div>
        </div>
        <div className="bg-themeGray text-clay text-center text-[4vw] py-1">
          こんな方におすすめ
        </div>
        <div
          className={`h-[30vw] font-medium flex flex-col justify-evenly ${
            plan.targets.length % 2 === 0 ? "" : ""
          }`}
        >
          {plan.targets.map((target, index) => (
            <React.Fragment key={index}>
              <p className={`text-[3.5vw] flex justify-center items-center`}>
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
        <div className="bg-themeGray text-clay text-center text-[4vw] py-1">
          シーン例
        </div>
        <div className="flex flex-wrap text-center font-medium">
          {plan.scenes.map((scene, index) => (
            <p
              className={`w-1/2 text-[3.5vw] py-4 border-dashed border-[#C8C9C3] ${rowClassName(
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
                  <span className="font-normal ml-[1vw]">{scene.sub}</span>
                </>
              )}
            </p>
          ))}
        </div>
        <div className="bg-themeGray text-clay text-center text-[4vw] py-1">
          コーデ数
        </div>
        <div className="h-[25.5vw] mx-auto flex justify-center text-[3.5vw] items-center font-medium">
          <Cloths planId={plan.id} />
          <div className="py-8">
            <p className="h-full flex items-center">
              <span className="font-lora text-[7vw] mr-[1vw]">
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
              <span className="font-lora text-[7vw] mr-[1vw]">
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
