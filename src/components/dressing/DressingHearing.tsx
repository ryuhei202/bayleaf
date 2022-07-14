import { TCategorizedForm } from "../../api/hearings/TCategorizedForm";
import { Typography } from "../baseParts/Typography";

type TProps = {
  readonly hearings: TCategorizedForm[];
};
export const DressingHearing = ({ hearings }: TProps) => {
  return (
    <div>
      <Typography>ヒアリング内容</Typography>
      <div className="mx-2">
        {hearings.map((h) => (
          <>
            <Typography size="xs" color="gray">
              {h.categoryName}
            </Typography>
            <div className="mx-2 my-1">
              <Typography size="sm">
                {h.forms
                  .map((f) => f.options.map((o) => o.name).join(", "))
                  .join(" / ")}
              </Typography>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};
