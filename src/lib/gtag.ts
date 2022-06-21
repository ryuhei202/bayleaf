export type TGAEvent = {
  readonly action: string;
  readonly category: string;
  readonly label?: number;
};

export const analyzeEvent = ({ action, category, label }: TGAEvent) => {
  if (process.env.NODE_ENV !== "production") return;
  window.gtag("event", action, {
    event_category: category,
    event_label: String(label),
  });
};
