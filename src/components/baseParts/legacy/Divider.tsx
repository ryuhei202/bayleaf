type Props = {
  className?: string;
};

export const Divider = ({ className }: Props) => {
  return <hr className={`${className ?? ""} w-full text-slate-200`} />;
};
