import { TCoordinateResponse } from "../../api/coordinates/TCoordinateResponse";
import {
  ConsultChoice,
  ConsultChoiceType,
} from "../../models/consult/choice/ConsultChoice";
import { AgeConsultContainer } from "./age/AgeConsultContainer";
import { CombinationConsultContainer } from "./combination/CombinationConsultContainer";
import { createCheckOutfitConsultFlexMessage } from "./createFlexMessage/createCheckOutfitConsultFlexMessage";
import { DesignConsultContainer } from "./design/DesignConsultContainer";
import { SceneConsultContainer } from "./scene/SceneConsultContainer";
import { SizeConsultContainer } from "./size/SizeConsultContainer";
import { WearingPhotoContainer } from "./WearingPhotoContainer";

type TProps = {
  selectedConsultOption: ConsultChoiceType;
  coordinate: TCoordinateResponse;
  onCancel: () => void;
};

export const DetailedConsultContainer = ({
  selectedConsultOption,
  coordinate,
  onCancel,
}: TProps) => {
  switch (selectedConsultOption) {
    case ConsultChoice.SIZE:
      return (
        <SizeConsultContainer items={coordinate.items} onCancel={onCancel} />
      );
    case ConsultChoice.DESIGN:
      return (
        <DesignConsultContainer items={coordinate.items} onCancel={onCancel} />
      );
    case ConsultChoice.AGE:
      return (
        <AgeConsultContainer items={coordinate.items} onCancel={onCancel} />
      );
    case ConsultChoice.SCENE:
      return (
        <SceneConsultContainer items={coordinate.items} onCancel={onCancel} />
      );
    case ConsultChoice.CONBINATION:
      return (
        <CombinationConsultContainer
          items={coordinate.items}
          onCancel={onCancel}
        />
      );
    case ConsultChoice.CHECKOUTFIT:
      return (
        <WearingPhotoContainer
          items={coordinate.items}
          flexMessage={createCheckOutfitConsultFlexMessage({
            itemImageUrls: coordinate.items.map(
              (item) => item.imagePaths.original
            ),
          })}
          onCancel={onCancel}
        />
      );
  }
};
