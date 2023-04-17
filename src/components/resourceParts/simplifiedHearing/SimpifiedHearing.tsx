import { Typography } from "../../baseParts/legacy/Typography";

type TProps = {
  target: string;
  scene: string;
  impression: string;
  className?: string;
};
export const SimpifiedHearing = ({
  target,
  scene,
  impression,
  className,
}: TProps) => {
  const hearings = [
    { question: "誰と", answer: target },
    { question: "利用シーン", answer: scene },
    { question: "見せたい印象", answer: impression },
  ];
  if (target === "") return <></>;

  return (
    <div className={className ?? ""}>
      <Typography size="xl">利用シーン</Typography>
      <div className="border-[1px] border-gray my-5" />
      <div className=" m-5 border-2 border-dashed border-themeGray">
        {hearings.map((hearing, index) => {
          return (
            <div
              className={`py-5 grid grid-cols-3 place-content-center justify-items-center ${
                index !== hearings.length - 1
                  ? "border-b-2 border-dashed border-themeGray"
                  : ""
              }`}
              key={hearing.question}
            >
              <div className="flex items-center">
                <Typography weight="regular" color="primary" size="sm">
                  {hearing.question}
                </Typography>
              </div>
              <div className="col-span-2 justify-self-start flex items-center">
                <Typography>{hearing.answer}</Typography>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
