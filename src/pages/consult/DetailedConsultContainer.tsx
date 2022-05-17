import { TCoordinateResponse } from "../../api/coordinates/TCoordinateResponse";
import {
  ConsultChoice,
  ConsultChoiceType,
} from "../../models/consult/choice/ConsultChoice";
import { AgeConsultContainer } from "./AgeConsultContainer";
import { CheckOutfitConsultContainer } from "./CheckOutfitConsultContainer";
import { CombinationConsultContainer } from "./combination/CombinationConsultContainer";
import { DesignConsultContainer } from "./design/DesignConsultContainer";
import { SizeConsultContainer } from "./size/SizeConsultContainer";
import { SceneConsultContainer } from "./scene/SceneConsultContainer";

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
      return <SceneConsultContainer items={coordinate.items} />;
    case ConsultChoice.CONBINATION:
      return <CombinationConsultContainer items={coordinate.items} />;
    case ConsultChoice.CHECKOUTFIT:
      return <CheckOutfitConsultContainer coordinate={coordinate} />;
  }
};
