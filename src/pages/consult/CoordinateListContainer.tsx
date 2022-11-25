import { TCoordinateResponse } from "../../api/coordinates/TCoordinateResponse";
import { Page } from "../../components/baseParts/legacy/Page";
import { CoordinateList } from "../../components/pageParts/consult/CoordinateList";

type TProps = {
  coordinates: TCoordinateResponse[];
  setSelectedCoordinate: (coordinate: TCoordinateResponse) => void;
};

export const CoordinateListContainer = ({
  coordinates,
  setSelectedCoordinate,
}: TProps) => {
  if (coordinates.length === 1) {
    setSelectedCoordinate(coordinates[0]);
  }
  return (
    <Page>
      <CoordinateList
        coordinates={coordinates}
        onClickCoordinate={setSelectedCoordinate}
      />
    </Page>
  );
};
