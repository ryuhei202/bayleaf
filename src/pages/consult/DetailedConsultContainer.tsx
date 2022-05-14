import { TCoordinateResponse } from "../../api/coordinates/TCoordinateResponse";
import {
  ConsultChoice,
  ConsultChoiceType,
} from "../../models/consult/choice/ConsultChoice";
import { AgeConsultContainer } from "./AgeConsultContainer";
import { CombinationConsultContainer } from "./CombinationConsultContainer";
import { DesignConsultContainer } from "./DesignConsultContainer";
import { SceneConsultContainer } from "./scene/SceneConsultContainer";
import { SizeConsultContainer } from "./SizeConsultContainer";
import { WearingPhotoContainer } from "./WearingPhotoContainer";

type TProps = {
  selectedConsultOption: ConsultChoiceType;
  coordinate: TCoordinateResponse;
};

export const DetailedConsultContainer = ({
  selectedConsultOption,
  coordinate,
}: TProps) => {
  switch (selectedConsultOption) {
    case ConsultChoice.SIZE:
      return <SizeConsultContainer coordinate={coordinate} />;
    case ConsultChoice.DESIGN:
      return <DesignConsultContainer coordinate={coordinate} />;
    case ConsultChoice.AGE:
      return <AgeConsultContainer coordinate={coordinate} />;
    case ConsultChoice.SCENE:
      return <SceneConsultContainer items={coordinate.items} />;
    case ConsultChoice.CONBINATION:
      return <CombinationConsultContainer coordinate={coordinate} />;
    case ConsultChoice.CHECKOUTFIT:
      return <WearingPhotoContainer items={coordinate.items} />;
  }
};
