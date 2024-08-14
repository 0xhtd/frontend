import "./ToiletCard.css";
import RestroomInfoIcons from "../Icon/RestroomInfoIcons";
import { Status } from "../../../types/enum";
import React, { useEffect, useState } from "react";
export type Toilet = {
  name: string;
  location: { lat: number; lon: number };
  types: string[];
  entranceFee: number;
  additionalFee: number;
  cleanScore: number;
  available: boolean;
  status?: Status;
}

const ToiletCard :React.FC<Toilet> = (props) => {
  const [properties,setProperties] = useState(props);
  useEffect(()=>{
    setProperties(props);
  },[props]);
  return (
    <>
      {/* <input id="switch" type="checkbox" checked={!properties.available}></input> */}
      <div>{properties.name}</div>
      <div className="box">
        <RestroomInfoIcons
          types={properties.types}
          status={properties?.status}
          cleanScore={properties.cleanScore}
        />
      </div>        
    </>
  );
};
export default ToiletCard;
