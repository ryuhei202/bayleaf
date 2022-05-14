import { TSizePart } from "../shared/TSizePart";
import { TConsultingItem } from "./TConsultingItem";

export type TSizeAnswer = {
  item: TConsultingItem;
  parts: TSizePart[];
  additionalText?: string;
};
