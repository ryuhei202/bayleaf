import { TCoordinateResponse } from "../../api/coordinates/TCoordinateResponse";
import {
  ConsultChoice,
  ConsultChoiceType,
} from "../../models/consult/choice/ConsultChoice";
import { AgeConsultContainer } from "./AgeConsultContainer";
import { CheckOutfitConsultContainer } from "./CheckOutfitConsultContainer";
import { CombinationConsultContainer } from "./CombinationConsultContainer";
import { DesignConsultContainer } from "./design/DesignConsultContainer";
import { SceneConsultContainer } from "./SceneConsultContainer";
import { SizeConsultContainer } from "./size/SizeConsultContainer";

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
      return <SizeConsultContainer items={coordinate.items} />;
    case ConsultChoice.DESIGN:
      return <DesignConsultContainer items={coordinate.items} />;
    case ConsultChoice.AGE:
      return <AgeConsultContainer coordinate={coordinate} />;
    case ConsultChoice.SCENE:
      return <SceneConsultContainer coordinate={coordinate} />;
    case ConsultChoice.CONBINATION:
      return <CombinationConsultContainer coordinate={coordinate} />;
    case ConsultChoice.CHECKOUTFIT:
      return <CheckOutfitConsultContainer coordinate={coordinate} />;
  }
};
