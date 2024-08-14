import { Status } from "../../../types/enum";
import CleanScoreIcon from "./CleanScoreIcon";
import StatusIcon from "./StatusIcon";
import TypeIcon from "./TypeIcon";

const RestroomInfoIcons = ({
  types,
  status,
  cleanScore,
}: {
  types: string[];
  status?: Status;
  cleanScore: number;
}) => {
  return (
    <>
      <div className="flex flex-col gap-4 overflow-hidden rounded-md p-3 shadow-sm shadow-[#00000050]">
        <div className="flex flex-row items-center min-h-10 gap-2 overflow-hidden justify-center">
          {types?.map((type,index)=>{return <div key={index}>{TypeIcon({ type })}</div>})}
        </div>
        <div className="flex items-center gap-2">
          {CleanScoreIcon({ cleanScore })}
        </div>
        <div className="flex items-center gap-2 justify-center">
          {status?StatusIcon({ status }):""}
        </div>
      </div>
    </>
  );
};

export default RestroomInfoIcons;
