import { Tab } from "@headlessui/react";
import { ComponentProps, Fragment } from "react";
import { Button } from "../Button";

export const TabAlt = (
  props: Omit<ComponentProps<typeof Button>, "variant">
) => {
  return (
    <Tab as={Fragment}>
      {({ selected }) => (
        <Button variant={selected ? "primary" : "default"} {...props} />
      )}
    </Tab>
  );
};
