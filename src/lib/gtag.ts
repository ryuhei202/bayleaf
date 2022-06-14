export type TGAEvent = {
  readonly action: string;
  readonly category: string;
  readonly label?: string;
  readonly memberId?: number;
};

export const analyzeEvent = ({
  action,
  category,
  label,
  memberId,
}: TGAEvent) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: memberId,
  });
};
