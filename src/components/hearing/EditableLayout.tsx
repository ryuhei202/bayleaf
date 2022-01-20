import { Divider } from "../baseParts/Divider";
import { EditButton } from "../baseParts/EditButton";

type Props = {
  readonly children: React.ReactNode;
};

export const EditableLayout = ({ children }: Props) => {
  return (
    <div className="mb-4">
      {children}
      <EditButton />
    </div>
  );
};
