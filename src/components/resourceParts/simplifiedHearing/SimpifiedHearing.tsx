import { Typography } from "../../baseParts/Typography";

type TProps = {
  title: string;
  target: string;
  scene: string;
  impression: string;
};
export const SimpifiedHearing = ({
  title,
  target,
  scene,
  impression,
}: TProps) => {
  const hearings = [
    { question: "意識する相手", answer: target },
    { question: "使いたいシーン", answer: scene },
    { question: "与えたい印象", answer: impression },
  ];
  return (
    <div className=" m-5 bg-white p-5">
      <Typography className="mb-5" size="xl">
        {title}
      </Typography>
      <div>
        {hearings.map((hearing) => {
          return (
            <div className="py-3" key={hearing.question}>
              <Typography>{hearing.question}</Typography>
              <p className="py-1 font-thin">・{hearing.answer}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
