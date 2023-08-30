import { Typography } from "../legacy/Typography";

type TProps = {
  listItems: { question: string; answer: React.ReactNode }[];
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
            className={`grid grid-cols-3 place-content-center justify-items-center py-5 ${
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
            <div className="col-span-2 flex items-center justify-self-start">
              <Typography color="primary">{listItem.answer}</Typography>
            </div>
          </div>
        );
      })}
    </div>
  );
};
