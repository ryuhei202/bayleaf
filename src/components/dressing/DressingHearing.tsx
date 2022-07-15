import { TCategorizedForm } from "../../api/hearings/TCategorizedForm";
import { Typography } from "../baseParts/Typography";

type TProps = {
  readonly hearings: TCategorizedForm[];
};
export const DressingHearing = ({ hearings }: TProps) => {
  return (
    <div className="mb-16">
      <Typography size="xl">ヒアリング内容</Typography>
      <div className="m-3 bg-white p-3 shadow-sm">
        {hearings.map((h) => (
          <>
            <Typography size="xs" color="gray">
              {h.categoryName}
            </Typography>
            <div className="mx-2 my-1">
              {h.forms
                .sort((a, b) => {
                  return a.options.length - b.options.length;
                })
                .map((f) =>
                  f.options.length > 1 ? (
                    <Typography size="xs" color="strong-gray">
                      {f.options.map((o) => o.name).join(", ")}
                    </Typography>
                  ) : (
                    <Typography size="sm" weight="bold">
                      {f.options[0].name}
                    </Typography>
                  )
                )}
              {/* <Typography size="sm">
                {h.forms
                  .map((f) => f.options.map((o) => o.name).join(", "))
                  .join(" / ")}
              </Typography> */}
            </div>
          </>
        ))}
      </div>
    </div>
  );
};
