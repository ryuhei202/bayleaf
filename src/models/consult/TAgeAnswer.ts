import { TAGE_CHOICES } from "./choice/AgeChoice";
import { TConsultingItem } from "./TConsultingItem";

export type TAgeAnswer = {
  item: TConsultingItem;
  ageOption: TAGE_CHOICES;
};
