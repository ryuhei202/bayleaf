import { useState } from "react";
import {
  COMBINATION_FORM,
  TCombiantionForm,
} from "../../../models/consult/TCombinationForm";
import { TConsultingItem } from "../../../models/consult/TConsultingItem";
import { CombinationConsult } from "./CombinationConsult";

type TProps = {
  readonly items: TConsultingItem[];
};
export const CombinationConsultContainer = ({ items }: TProps) => {
  const [currentFormType, setCurrentFormType] = useState<TCombiantionForm>(
    COMBINATION_FORM.IMAGE_SEND
  );
  switch (currentFormType) {
    case COMBINATION_FORM.IMAGE_SEND:
      return <CombinationConsult setCurrentFormType={setCurrentFormType} />;
    case COMBINATION_FORM.ITEM_CATEGORY:
      return <></>;
    case COMBINATION_FORM.ITEM_DETAIL:
      return <></>;
    default:
      return <></>;
  }
};
