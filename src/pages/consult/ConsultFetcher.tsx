import React from "react";
import { useState } from "react";
import { Loader } from "semantic-ui-react";

import { TCoordinateResponse } from "../../api/coordinates/TCoordinateResponse";
import { useCoordinateIndex } from "../../api/coordinates/useCoordinateIndex";
import { Typography } from "../../components/baseParts/legacy/Typography";
import { ErrorMessage } from "../../components/shared/ErrorMessage";
import { ConsultOption } from "./ConsultOption";
import { CoordinateListContainer } from "./CoordinateListContainer";

type TProps = {
  readonly chartId: number;
};

export const ConsultChartIdContext =
  React.createContext<number | undefined>(undefined);

export const ConsultFetcher = ({ chartId }: TProps) => {
  const [selectedCoordinate, setSelectedCoordinate] =
    useState<TCoordinateResponse>();
  const { data: coordinateData, error: coordinateError } = useCoordinateIndex({
    chartId,
  });
  if (coordinateError)
    return <ErrorMessage message={coordinateError.message} />;

  if (!coordinateData) return <Loader active />;

  if (coordinateData.coordinates.length === 0)
    return (
      <div className="flex justify-center items-center h-screen">
        <Typography>
          <>着こなし相談対象のコーデはありません。</>
        </Typography>
      </div>
    );

  return selectedCoordinate ? (
    <ConsultChartIdContext.Provider value={chartId}>
      <ConsultOption coordinate={selectedCoordinate} />
    </ConsultChartIdContext.Provider>
  ) : (
    <CoordinateListContainer
      coordinates={coordinateData.coordinates}
      setSelectedCoordinate={setSelectedCoordinate}
    />
  );
};
