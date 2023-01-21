import PackageIcon from "../../../images/icons/package.svg";
import WearIcon from "../../../images/icons/wear.svg";

type TProps = {
  readonly wearDate?: string;
};

export const ScheduleDiagram = ({ wearDate }: TProps) => {
  console.log(wearDate);
  const getDateString = (daysDifference: number) => {
    if (wearDate === undefined) return "";

    const convertedWearDate = new Date(wearDate);
    convertedWearDate.setDate(convertedWearDate.getDate() + daysDifference);
    return convertedWearDate.toLocaleDateString("ja-JP");
  };

  return (
    <div className="w-full grid grid-cols-5 text-center text-xs bg-white">
      <div className="border-r py-2">お届け日</div>
      <div className="bg-lightBeige border-r"></div>
      <div className="border-r py-2">利用日</div>
      <div className="bg-lightBeige border-r"></div>
      <div className="py-2">返却期日</div>
      {wearDate && (
        <>
          <div className="border-r pb-2">{getDateString(-2)}</div>
          <div className="bg-lightBeige border-r"></div>
          <div className="border-r pb-2">{getDateString(0)}</div>
          <div className="bg-lightBeige border-r"></div>
          <div className="pb-2">{getDateString(2)}</div>
        </>
      )}
      <div className="bg-themeGray col-span-5 text-clay rounded-full">
        ４泊５日
      </div>
      <div className="border-r flex justify-center">
        <img src={PackageIcon} alt="package" className="my-2 w-2/4 stroke-1" />
      </div>
      <div className="bg-lightBeige border-r"></div>
      <div className="border-r flex justify-center">
        <img src={WearIcon} alt="package" className="my-2 w-2/4" />
      </div>
      <div className="bg-lightBeige border-r"></div>
      <div className="flex justify-center">
        <img src={PackageIcon} alt="package" className="my-2 w-2/4" />
      </div>
    </div>
  );
};
