import React from "react";
import MobileStepper from "@material-ui/core/MobileStepper";
import { SwiperViewData } from "./viewData/SwiperViewData";
import { SwiperCallback } from "./callback/SwiperCallback";
import SwipeableViews from "react-swipeable-views";

// ----------------------------------------
// props
// ----------------------------------------
export interface SwiperProps {
  viewData: SwiperViewData;
  callback: SwiperCallback;
  children: React.ReactNode;
}

// ----------------------------------------
// component
// ----------------------------------------
const Swiper = (props: SwiperProps) => (
  // ----------------------------------------
  // Life Cycle
  // ----------------------------------------
  <>
    <SwipeableViews
      onChangeIndex={props.callback.onChangeStep}
      slideStyle={{
        padding: props.viewData.padding ? props.viewData.padding : "",
      }}
    >
      {props.children}
    </SwipeableViews>
    <MobileStepper
      variant="dots"
      position="static"
      steps={props.viewData.maxSteps}
      activeStep={props.viewData.activeStep}
      nextButton={<></>}
      backButton={<></>}
    />
  </>
);

export default Swiper;
