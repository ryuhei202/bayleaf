import { Typography } from "../legacy/Typography";

type TProps = {
  listItems: { question: string; answer: string }[];
  className?: string;
};

export const DottedList = ({ listItems, className }: TProps) => {
  return (
    <div
      className={`border-2 border-dashed border-themeGray ${className ?? ""}`}
    >
      {listItems.map((listItem, index) => {
        return (
          <div
            className={`py-5 grid grid-cols-3 place-content-center justify-items-center ${
              index !== listItems.length - 1
                ? "border-b-2 border-dashed border-themeGray"
                : ""
            }`}
            key={listItem.question}
          >
            <div className="flex items-center">
              <Typography weight="regular" color="primary" size="sm">
                {listItem.question}
              </Typography>
            </div>
            <div className="col-span-2 justify-self-start flex items-center">
              <Typography>{listItem.answer}</Typography>
            </div>
          </div>
        );
      })}
    </div>
  );
};
