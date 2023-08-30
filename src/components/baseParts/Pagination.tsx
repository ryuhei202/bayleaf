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
    <div className={`flex items-center justify-around ${className ?? ""}`}>
      <div className="h-[44px] w-[44px]">
        <Button
          className={`relative h-[44px] rounded-[44px]`}
          variant={"light"}
          onClick={() => onClickPagination(currentPage - 1)}
          disabled={isBackDisabled}
        >
          <BackIcon className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]"></BackIcon>
        </Button>
      </div>

      <div>
        <div className="flex w-20 justify-around text-xl text-themeGray">
          {currentPage}
          <div className="text-[#C8C9C3]">/</div>
          {maxPage}
        </div>
      </div>
      <div className="w-[44px]">
        <Button
          className={`h-[44px] rounded-[44px]`}
          variant={"light"}
          onClick={() => onClickPagination(currentPage + 1)}
          disabled={isNextDisabled}
        >
          <NextIcon className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]"></NextIcon>
        </Button>
      </div>
    </div>
  );
};
