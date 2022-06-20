export type TGAEvent = {
  readonly action: string;
  readonly category: string;
  readonly label?: string;
};

export const analyzeEvent = ({ action, category, label }: TGAEvent) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
  });
};
