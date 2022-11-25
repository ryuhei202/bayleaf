import {
  LIGHT_PLAN,
  PREMIUM_PLAN,
  STANDARD_PLAN,
} from "../../../models/hearing/MPlanIds";
import FIRST_CLOTH from "../../../images/icons/cloths/1.svg";
import SECOND_CLOTH from "../../../images/icons/cloths/2.svg";
import THIRD_CLOTH from "../../../images/icons/cloths/3.svg";
import FORTH_CLOTH from "../../../images/icons/cloths/4.svg";

type TProps = {
  planId: number;
};

export const Cloths = ({ planId }: TProps) => {
  switch (planId) {
    case LIGHT_PLAN.id:
      return (
        <div className="w-1/3 flex py-8">
          <img
            src={FIRST_CLOTH}
            alt="cloth-icon"
            className="w-1/3 -mr-4 z-10"
          />
          <img src={SECOND_CLOTH} alt="cloth-icon" className="w-1/3 -mr-2" />
          <img src={THIRD_CLOTH} alt="cloth-icon" className="w-1/3 z-10" />
        </div>
      );
    case STANDARD_PLAN.id:
      return (
        <div className="w-1/3 flex py-8">
          <img
            src={FORTH_CLOTH}
            alt="cloth-icon"
            className="w-1/3 -mr-4 z-10"
          />
          <img src={FIRST_CLOTH} alt="cloth-icon" className="w-1/3 -mr-2" />
          <img src={THIRD_CLOTH} alt="cloth-icon" className="w-1/3 z-10" />
        </div>
      );
    case PREMIUM_PLAN.id:
      return (
        <div className="w-1/3 h-[111px] flex flex-wrap pt-5">
          <div className="my-auto">
            <div className="flex">
              <img
                src={FIRST_CLOTH}
                alt="cloth-icon"
                className="w-1/3 -mr-4 z-0"
              />
              <img
                src={SECOND_CLOTH}
                alt="cloth-icon"
                className="w-1/3 -mr-2"
              />
              <img src={THIRD_CLOTH} alt="cloth-icon" className="w-1/3 z-0" />
            </div>
            <div className="flex translate-x-[15%] translate-y-[-50%] z-20">
              <img
                src={FORTH_CLOTH}
                alt="cloth-icon"
                className="w-1/3 -mr-4 z-20"
              />
              <img
                src={FIRST_CLOTH}
                alt="cloth-icon"
                className="w-1/3 -mr-2 z-10"
              />
              <img src={THIRD_CLOTH} alt="cloth-icon" className="w-1/3 z-20" />
            </div>
          </div>
        </div>
      );
    default:
      return <></>;
  }
};
