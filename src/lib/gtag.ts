export type TGAEvent = {
  readonly action: string;
  readonly category: string;
  readonly memberId?: number;
};

export const analyzeEvent = ({ action, category, memberId }: TGAEvent) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: String(memberId),
  });
};
