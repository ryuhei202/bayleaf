import { Typography } from "../../baseParts/legacy/Typography";
import { DottedList } from "../../baseParts/lists/DottedList";

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
      <Typography size="xl">コーデの利用シーンと見せたい印象</Typography>
      <div className="my-5 border-[1px] border-gray " />
      <DottedList listItems={hearings} className="mx-5" />
    </div>
  );
};
