import { useState } from "react";
import { TMemberSizeOptionsIndexResponse } from "../../../api/memberSizeOptions/useMemberSizeOptionsIndex";
import { TPropertyRecord } from "../../../models/shared/TPropertyRecord";
type TStep =
  | "start"
  | "tops"
  | "bottoms"
  | "shoulder"
  | "waist"
  | "hip"
  | "bust"
  | "imageInput"
  | "confirm";

type TFormProps = {
  readonly key: string;
  readonly title: string;
  readonly options: (TPropertyRecord & { imageFilePath?: string })[];
  readonly selectedId: number | undefined;
  readonly onClick: (id: number) => void;
  readonly onSubmit: () => void;
  readonly onCancel: () => void;
};

type TArgs = {
  readonly memberSizeOptions: TMemberSizeOptionsIndexResponse;
};

type TUseFormHandler = {
  readonly step: TStep;
  readonly tops?: number;
  readonly bottoms?: number;
  readonly shoulder?: number;
  readonly waist?: number;
  readonly hip?: number;
  readonly bust?: number;
  readonly getFormProps: () => TFormProps;
  readonly handleStep: (nextStep: TStep) => void;
  readonly handleCancelImageUpload: () => void;
};

export const useFormHandler = ({
  memberSizeOptions,
}: TArgs): TUseFormHandler => {
  const [step, setStep] = useState<TStep>("start");
  const [tops, setTops] = useState<number>();
  const [bottoms, setBottoms] = useState<number>();
  const [shoulder, setShoulder] = useState<number>();
  const [waist, setWaist] = useState<number>();
  const [hip, setHip] = useState<number>();
  const [bust, setBust] = useState<number>();

  const getFormProps = (): TFormProps => {
    switch (step) {
      case "tops":
        return {
          key: "tops",
          title: "トップスのサイズを選択してください",
          options: memberSizeOptions.tops,
          selectedId: tops,
          onClick: (id: number) => setTops(id),
          onSubmit: () => setStep("bottoms"),
          onCancel: () => setStep("start"),
        };
      case "bottoms":
        return {
          key: "bottoms",
          title: "ボトムスのサイズを選択してください",
          options: memberSizeOptions.bottoms,
          selectedId: bottoms,
          onClick: (id: number) => setBottoms(id),
          onSubmit: () => setStep("shoulder"),
          onCancel: () => {
            setTops(undefined);
            setStep("tops");
          },
        };
      case "shoulder":
        return {
          key: "shoulder",
          title: "肩幅のサイズを選択してください",
          options: memberSizeOptions.shoulders,
          selectedId: shoulder,
          onClick: (id: number) => setShoulder(id),
          onSubmit: () => setStep("waist"),
          onCancel: () => {
            setBottoms(undefined);
            setStep("bottoms");
          },
        };
      case "waist":
        return {
          key: "waist",
          title: "ウエストのサイズを選択してください",
          options: memberSizeOptions.waists,
          selectedId: waist,
          onClick: (id: number) => setWaist(id),
          onSubmit: () => setStep("hip"),
          onCancel: () => {
            setShoulder(undefined);
            setStep("shoulder");
          },
        };
      case "hip":
        return {
          key: "hip",
          title: "ヒップのサイズを選択してください",
          options: memberSizeOptions.hips,
          selectedId: hip,
          onClick: (id: number) => setHip(id),
          onSubmit: () => setStep("bust"),
          onCancel: () => {
            setWaist(undefined);
            setStep("waist");
          },
        };
      case "bust":
        return {
          key: "bust",
          title: "バストのサイズを選択してください",
          options: memberSizeOptions.busts,
          selectedId: bust,
          onClick: (id: number) => setBust(id),
          onSubmit: () => setStep("imageInput"),
          onCancel: () => {
            setHip(undefined);
            setStep("hip");
          },
        };
      default:
        throw new Error("invalid step");
    }
  };

  const handleStep = (nextStep: TStep) => {
    setStep(nextStep);
  };

  const handleCancelImageUpload = () => {
    setBust(undefined);
    setStep("bust");
  };

  return {
    step,
    tops,
    bottoms,
    shoulder,
    waist,
    hip,
    bust,
    getFormProps,
    handleStep,
    handleCancelImageUpload,
  };
};
