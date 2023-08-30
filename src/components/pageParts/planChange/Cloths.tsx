import {
  LIGHT_PLAN,
  PREMIUM_PLAN,
  STANDARD_PLAN,
} from "../../../models/shared/Plans";
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
        <div className="flex w-1/3 py-8">
          <img
            src={FIRST_CLOTH}
            alt="cloth-icon"
            className="z-10 -mr-4 w-1/3"
          />
          <img src={SECOND_CLOTH} alt="cloth-icon" className="-mr-2 w-1/3" />
          <img src={THIRD_CLOTH} alt="cloth-icon" className="z-10 w-1/3" />
        </div>
      );
    case STANDARD_PLAN.id:
      return (
        <div className="flex w-1/3 py-8">
          <img
            src={FORTH_CLOTH}
            alt="cloth-icon"
            className="z-10 -mr-4 w-1/3"
          />
          <img src={FIRST_CLOTH} alt="cloth-icon" className="-mr-2 w-1/3" />
          <img src={THIRD_CLOTH} alt="cloth-icon" className="z-10 w-1/3" />
        </div>
      );
    case PREMIUM_PLAN.id:
      return (
        <div className="flex h-[111px] w-1/3 flex-wrap pt-5">
          <div className="my-auto">
            <div className="flex">
              <img
                src={FIRST_CLOTH}
                alt="cloth-icon"
                className="z-0 -mr-4 w-1/3"
              />
              <img
                src={SECOND_CLOTH}
                alt="cloth-icon"
                className="-mr-2 w-1/3"
              />
              <img src={THIRD_CLOTH} alt="cloth-icon" className="z-0 w-1/3" />
            </div>
            <div className="z-20 flex translate-x-[15%] translate-y-[-50%]">
              <img
                src={FORTH_CLOTH}
                alt="cloth-icon"
                className="z-20 -mr-4 w-1/3"
              />
              <img
                src={FIRST_CLOTH}
                alt="cloth-icon"
                className="z-10 -mr-2 w-1/3"
              />
              <img src={THIRD_CLOTH} alt="cloth-icon" className="z-20 w-1/3" />
            </div>
          </div>
        </div>
      );
    default:
      return <></>;
  }
};
