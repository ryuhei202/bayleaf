import { Tab } from "@headlessui/react";
import { TCoordinateIndexResponse } from "../../api/coordinates/TCoordinateIndexResponse";
import { Page } from "../../components/baseParts/legacy/Page";
import { TabAlt } from "../../components/baseParts/legacy/tabs/TabAlt";
import { DressingPanelFetcher } from "./DressingPanelFetcher";

type TProps = {
  readonly coordinateDatas: TCoordinateIndexResponse;
};

export const DressingPage = ({ coordinateDatas }: TProps) => {
  return (
    <Page className="p-5 pb-5">
      <Tab.Group>
        {coordinateDatas.coordinates.length > 1 ? (
          <Tab.List className="w-full flex sticky top-0 z-10">
            {coordinateDatas.coordinates.map((_, index) => (
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
          {coordinateDatas.coordinates.map((coordinateData, index) => (
            <Tab.Panel key={index}>
              <DressingPanelFetcher coordinateId={coordinateData.id} />
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </Page>
  );
};
