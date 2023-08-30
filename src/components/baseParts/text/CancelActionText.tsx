import ErrorIcon from "../../../images/icons/error.svg";

type TProps = {
  readonly children: string;
  readonly onClick: () => void;
};

export const CancelActionText = ({ children, onClick }: TProps) => {
  return (
    <button className="text-red" onClick={onClick}>
      <img className="inline h-5 w-5" src={ErrorIcon} alt={"ビックリマーク"} />
      <span className="align-middle text-sm font-thin underline decoration-0 underline-offset-2 ">
        {children}
      </span>
    </button>
  );
};
