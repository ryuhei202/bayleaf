export const TAX = 0.1;

export const withTax = (price: number) => {
  return Math.ceil(price + price * TAX);
};
