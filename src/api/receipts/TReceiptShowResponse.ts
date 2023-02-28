export type TReceiptShowResponse = {
  receiptDetails: {
    readonly title: string;
    readonly priceTaxIn: number;
  }[];
  readonly cardBrand: string;
  readonly cardNumber: string;
};
