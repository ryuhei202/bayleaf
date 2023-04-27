import { Tab } from "@headlessui/react";
import { TCoordinateIndexResponse } from "../../api/coordinates/TCoordinateIndexResponse";
import { TabMenu } from "../../components/baseParts/TabMenu";
import { Page } from "../../components/baseParts/legacy/Page";
import { DressingPanelFetcher } from "./DressingPanelFetcher";

type TProps = {
  readonly coordinateDatas: TCoordinateIndexResponse;
};

export const DressingPage = ({ coordinateDatas }: TProps) => {
  return (
    <>
      <Page className="px-5 pb-5">
        <Tab.Group>
          {coordinateDatas.coordinates.length > 1 ? (
            <Tab.List className="w-full flex justify-center sticky top-0 z-10">
              {coordinateDatas.coordinates.map((_, index) => (
                <TabMenu className="basis-1/2 text-xl" key={index}>
                  コーデ 0{index + 1}
                </TabMenu>
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
    </>
  );
};
