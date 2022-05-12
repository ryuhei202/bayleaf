import { TConsultingItem } from "../../../models/consult/TConsultingItem";

type TProps = {
  readonly items: TConsultingItem[];
};

export const SceneConsultContainer = ({ items }: TProps) => {
  const getItemImagePaths = (): string[] => {
    return items.map((item) => item.imagePaths.thumb);
  };
  return <></>;
};
