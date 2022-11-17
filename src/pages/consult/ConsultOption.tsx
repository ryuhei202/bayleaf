import { useState } from "react";

import { TCoordinateResponse } from "../../api/coordinates/TCoordinateResponse";
import { Page } from "../../components/baseParts/legacy/Page";
import { ConsultChoiceType } from "../../models/consult/choice/ConsultChoice";
import { ConsultSelection } from "./ConsultSelection";
import { DetailedConsultContainer } from "./DetailedConsultContainer";

type TProps = {
  coordinate: TCoordinateResponse;
};

export const ConsultOption = ({ coordinate }: TProps) => {
  const [selectedConsultOption, setSelectedConsultOption] =
    useState<ConsultChoiceType | undefined>(undefined);

  return (
    <Page>
      {selectedConsultOption ? (
        <DetailedConsultContainer
          selectedConsultOption={selectedConsultOption}
          coordinate={coordinate}
          onCancel={() => setSelectedConsultOption(undefined)}
        />
      ) : (
        <ConsultSelection onClickOption={setSelectedConsultOption} />
      )}
    </Page>
  );
};
