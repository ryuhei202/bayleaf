type TProps = {
  readonly caption?: string;
};
export const Loader = ({ caption }: TProps) => {
  return (
    <div className="flex flex-col justify-center items-center text-themeGray">
      <div className="animate-spin h-10 w-10 border-4 border-themeGray rounded-full border-t-transparent" />
      <span className="text-sm pt-2">{caption ?? ""}</span>
    </div>
  );
};
