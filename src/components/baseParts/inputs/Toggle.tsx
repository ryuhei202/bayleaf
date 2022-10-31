import { Switch } from "@headlessui/react";
type TProps = {
  checked: boolean;
  onChange: (isDiscountDatePeriod: boolean) => void;
};

export const Toggle = ({ checked, onChange }: TProps) => {
  return (
    <Switch
      checked={checked}
      onChange={onChange}
      className={`${
        checked ? "bg-themeGray" : "bg-clay"
      } relative inline-flex h-6 w-11 items-center rounded-full `}
    >
      <span
        className={`${
          checked ? "translate-x-6" : "translate-x-1"
        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
      />
    </Switch>
  );
};
