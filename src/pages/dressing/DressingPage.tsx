import { TCoordinateIndexResponse } from "../../api/coordinates/TCoordinateIndexResponse";
import { Page } from "../../components/baseParts/legacy/Page";
import { DressingPanelFetcher } from "./DressingPanelFetcher";

type TProps = {
  readonly coordinateDatas: TCoordinateIndexResponse;
};

export const DressingPage = ({ coordinateDatas }: TProps) => {
  return (
    <Page className="p-5 pb-5">
      {coordinateDatas.coordinates.map((data, index) => {
        return (
          <DressingPanelFetcher
            coordinateId={data.id}
            coordinateIndex={index}
          />
        );
      })}
    </Page>
  );
};
