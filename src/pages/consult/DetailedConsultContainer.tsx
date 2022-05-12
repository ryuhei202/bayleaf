import { TCoordinateResponse } from "../../api/coordinates/TCoordinateResponse";
import {
  ConsultChoice,
  ConsultChoiceType,
} from "../../models/consult/choice/ConsultChoice";
import { AgeConsultContainer } from "./AgeConsultContainer";
import { CheckOutfitConsultContainer } from "./CheckOutfitConsultContainer";
import { CombinationConsultContainer } from "./combination/CombinationConsultContainer";
import { DesignConsultContainer } from "./DesignConsultContainer";
import { SceneConsultContainer } from "./SceneConsultContainer";
import { SizeConsultContainer } from "./SizeConsultContainer";

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
      return <SceneConsultContainer coordinate={coordinate} />;
    case ConsultChoice.CONBINATION:
      return <CombinationConsultContainer items={coordinate.items} />;
    case ConsultChoice.CHECKOUTFIT:
      return <CheckOutfitConsultContainer coordinate={coordinate} />;
  }
};
