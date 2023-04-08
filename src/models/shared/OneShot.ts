import { TAX } from "./Tax";

export const withTax = (price: number) => {
  return price + price * TAX;
};

export const OneShot = {
  price: {
    withTax: withTax(5000),
    withoutTax: 5000,
  },
};
