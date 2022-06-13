import { useMembersIndex } from "../api/members/useMembersIndex";

export type TGAEvent = {
  readonly action: string;
  readonly category: string;
  readonly label?: string;
};

const { data } = useMembersIndex();

export const analyzeEvent = ({ action, category, label }: TGAEvent) => {
  if (data === undefined) return;

  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: data[0].id,
  });
};
