import { EditButton } from "../baseParts/EditButton";

type Props = {
  readonly children: React.ReactNode;
  readonly onClickEdit?: () => void;
};

export const EditableLayout = ({ children, onClickEdit }: Props) => {
  return (
    <div className="mb-4">
      {children}
      <EditButton onClick={onClickEdit} />
    </div>
  );
};
