import ErrorIcon from "../../../images/icons/error.svg";

type TProps = {
  readonly children: string;
  readonly onClick: () => void;
};

export const CancelActionText = ({ children, onClick }: TProps) => {
  return (
    <button className="text-red" onClick={onClick}>
      <img className="inline w-5 h-5" src={ErrorIcon} alt={"ビックリマーク"} />
      <span className="underline underline-offset-2 decoration-0 font-thin text-sm align-middle ">
        {children}
      </span>
    </button>
  );
};
