import { Tab } from "@headlessui/react";
import { TNonNullableDressing } from "../../api/dressings/TDressing";
import { Page } from "../../components/baseParts/legacy/Page";
import { TabAlt } from "../../components/baseParts/legacy/tabs/TabAlt";

type TProps = {
  readonly dressings: TNonNullableDressing[];
};


  return (
    <Page className="p-5 pb-5">
      <Tab.Group>
        {dressings.length > 1 ? (
          <Tab.List className="w-full flex sticky top-0">
            {dressings.map((_, index) => (
              <TabAlt
                disableElevation={true}
                size="small"
                radius="small"
                key={index}
              >
                コーデ{index + 1}
              </TabAlt>
            ))}
          </Tab.List>
        ) : (
          <></>
        )}
        <Tab.Panels className="mt-10">
          {dressings.map((dressing, index) => (
            <Tab.Panel key={index}>
            
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </Page>
  );
};
