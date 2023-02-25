import { Button } from "./Button";
import { BackIcon } from "./icons/BackIcon";
import { NextIcon } from "./icons/NextIcon";

type TProps = {
  maxPage: number;
  currentPage: number;
  onClickPagination: (page: number) => void;
};

export const Pagination = ({
  maxPage,
  currentPage,
  onClickPagination,
}: TProps) => {
  return (
    <div className="flex justify-around items-center">
      <Button
        className="rounded-[44px] bg-[#D8D8D2] w-[44px] h-[44px] relative"
        onClick={() => onClickPagination(currentPage)}
      >
        <BackIcon className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"></BackIcon>
      </Button>
      <div>
        <div className="text-themeGray flex text-2xl w-20 justify-around">
          {currentPage}
          <div className="text-[#C8C9C3]">/</div>
          {maxPage}
        </div>
      </div>
      <Button className="rounded-[44px] bg-[#D8D8D2] w-[44px] h-[44px] relative">
        <NextIcon className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"></NextIcon>
      </Button>
    </div>
  );
};
