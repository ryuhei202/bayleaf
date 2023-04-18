import { withTax } from "./Tax";

export const OneShot = {
  price: {
    withTax: withTax(5000),
    withoutTax: 5000,
  },
};
