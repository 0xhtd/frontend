import { useEffect, useState } from "react";
import { Status } from "../../../types/enum";

const array:string[] = []
Object.keys(Status).filter((v) => isNaN(Number(v))).forEach((key)=>{array.push(`/images/${key}.jpg`)});

const StatusIcon = ({ status }: { status: Status }) => {
  const [imgSrc,setImgSrc] = useState<string>(array[status]);

  useEffect(()=>{setImgSrc(array[status])},[status]);

  return (
    <div className="rounded-full w-3/5 rounded-full border-4 border-red-700" style={{overflow:'hidden'}}>
      <img src={imgSrc}/>
    </div>
  );
};

export default StatusIcon;
