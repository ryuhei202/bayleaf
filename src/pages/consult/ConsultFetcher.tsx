import React, { useState } from "react";
import { TCoordinateResponse } from "../../api/coordinates/TCoordinateResponse";
import { useCoordinateIndex } from "../../api/coordinates/useCoordinateIndex";
import { Typography } from "../../components/baseParts/legacy/Typography";
import { ErrorPage } from "../../components/baseParts/pages/ErrorPage";
import { LoaderPage } from "../../components/baseParts/pages/LoaderPage";
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
  if (coordinateError) return <ErrorPage message={coordinateError.message} />;

  if (!coordinateData) return <LoaderPage />;

  if (coordinateData.coordinates.length === 0)
    return (
      <div className="flex h-screen items-center justify-center">
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
