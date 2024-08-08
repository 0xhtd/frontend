import { STATUS } from "../../../types/enum";
import CleanScoreIcon from "./CleanScoreIcon";
import StatusIcon from "./StatusIcon";
import TypeIcon from "./TypeIcon";

const RestroomInfoIcons = ({
  type,
  status,
  cleanScore,
}: {
  type: string;
  status: STATUS;
  cleanScore: number;
}) => {
  return (
    <>
      <div className="flex flex-col items-start gap-4 overflow-hidden rounded-md p-6 shadow-sm shadow-[#00000050]">
        <div className="flex items-center gap-4">
          {TypeIcon({ type })}
          {StatusIcon({ status })}
          {CleanScoreIcon({ cleanScore })}
        </div>
      </div>
    </>
  );
};

export default RestroomInfoIcons;
