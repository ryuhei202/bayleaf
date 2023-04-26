import { Button } from "./Button";
import { BackIcon } from "./icons/BackIcon";
import { NextIcon } from "./icons/NextIcon";

type TProps = {
  maxPage: number;
  currentPage: number;
  onClickPagination: (page: number) => void;
  className?: string;
};

export const Pagination = ({
  maxPage,
  currentPage,
  onClickPagination,
  className,
}: TProps) => {
  const isBackDisabled = currentPage <= 1;
  const isNextDisabled = currentPage >= maxPage;

  return (
    <div className={`flex justify-around items-center ${className ?? ""}`}>
      <div className="w-[44px] h-[44px]">
        <Button
          className={`rounded-[44px] h-[44px] relative`}
          variant={"light"}
          onClick={() => onClickPagination(currentPage - 1)}
          disabled={isBackDisabled}
        >
          <BackIcon className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"></BackIcon>
        </Button>
      </div>

      <div>
        <div className="text-themeGray flex text-xl w-20 justify-around">
          {currentPage}
          <div className="text-[#C8C9C3]">/</div>
          {maxPage}
        </div>
      </div>
      <div className="w-[44px]">
        <Button
          className={`rounded-[44px] h-[44px] relativ`}
          variant={"light"}
          onClick={() => onClickPagination(currentPage + 1)}
          disabled={isNextDisabled}
        >
          <NextIcon className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"></NextIcon>
        </Button>
      </div>
    </div>
  );
};
