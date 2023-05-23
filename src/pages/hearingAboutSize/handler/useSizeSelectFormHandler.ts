import { useState } from "react";
import { TMemberSizeOptionsIndexResponse } from "../../../api/memberSizeOptions/useMemberSizeOptionsIndex";
import { TPropertyRecord } from "../../../models/shared/TPropertyRecord";
import { TStep } from "../SizeFormsContainer";
type TSizeStep = "tops" | "bottoms" | "shoulder" | "waist" | "hip" | "bust";

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
  readonly handleStep: (step: TStep) => void;
};

type TUseFormHandler = {
  readonly tops?: number;
  readonly bottoms?: number;
  readonly shoulder?: number;
  readonly waist?: number;
  readonly hip?: number;
  readonly bust?: number;
  readonly getFormProps: () => TFormProps;
  readonly handleCancelImageUpload: () => void;
};

export const useSizeSelectFormHandler = ({
  memberSizeOptions,
  handleStep,
}: TArgs): TUseFormHandler => {
  const [sizeStep, setSizeStep] = useState<TSizeStep>("tops");
  const [tops, setTops] = useState<number>();
  const [bottoms, setBottoms] = useState<number>();
  const [shoulder, setShoulder] = useState<number>();
  const [waist, setWaist] = useState<number>();
  const [hip, setHip] = useState<number>();
  const [bust, setBust] = useState<number>();

  const getFormProps = (): TFormProps => {
    switch (sizeStep) {
      case "tops":
        return {
          key: "tops",
          title: "トップスのサイズを選択してください",
          options: memberSizeOptions.tops,
          selectedId: tops,
          onClick: (id: number) => setTops(id),
          onSubmit: () => setSizeStep("bottoms"),
          onCancel: () => handleStep("start"),
        };
      case "bottoms":
        return {
          key: "bottoms",
          title: "ボトムスのサイズを選択してください",
          options: memberSizeOptions.bottoms,
          selectedId: bottoms,
          onClick: (id: number) => setBottoms(id),
          onSubmit: () => setSizeStep("shoulder"),
          onCancel: () => {
            setTops(undefined);
            setSizeStep("tops");
          },
        };
      case "shoulder":
        return {
          key: "shoulder",
          title: "肩幅のサイズを選択してください",
          options: memberSizeOptions.shoulders,
          selectedId: shoulder,
          onClick: (id: number) => setShoulder(id),
          onSubmit: () => setSizeStep("waist"),
          onCancel: () => {
            setBottoms(undefined);
            setSizeStep("bottoms");
          },
        };
      case "waist":
        return {
          key: "waist",
          title: "ウエストのサイズを選択してください",
          options: memberSizeOptions.waists,
          selectedId: waist,
          onClick: (id: number) => setWaist(id),
          onSubmit: () => setSizeStep("hip"),
          onCancel: () => {
            setShoulder(undefined);
            setSizeStep("shoulder");
          },
        };
      case "hip":
        return {
          key: "hip",
          title: "ヒップのサイズを選択してください",
          options: memberSizeOptions.hips,
          selectedId: hip,
          onClick: (id: number) => setHip(id),
          onSubmit: () => setSizeStep("bust"),
          onCancel: () => {
            setWaist(undefined);
            setSizeStep("waist");
          },
        };
      case "bust":
        return {
          key: "bust",
          title: "胸囲のサイズを選択してください",
          options: memberSizeOptions.busts,
          selectedId: bust,
          onClick: (id: number) => setBust(id),
          onSubmit: () => handleStep("image"),
          onCancel: () => {
            setHip(undefined);
            setSizeStep("hip");
          },
        };
      default:
        throw new Error("invalid step");
    }
  };

  const handleCancelImageUpload = () => {
    setBust(undefined);
    handleStep("select");
  };

  return {
    tops,
    bottoms,
    shoulder,
    waist,
    hip,
    bust,
    getFormProps,
    handleCancelImageUpload,
  };
};
