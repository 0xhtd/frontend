import "./ListofToilets.css";
import ToiletCard, { Toilet } from "../Cards/ToiletCard";
import { Status } from "../../../types/enum";
import { useState } from "react";

const tempItem: Toilet[] = [
  {
    name: "OFFICE TOWER",
    location: { lat: 42.195, lon: 92.112 },
    types: ["man", "woman", "disabled"],
    entranceFee: 5,
    additionalFee: 1,
    cleanScore: 5,
    available: true,
    // status:Status["working"]
  },
  {
    name: "Royal Building",
    location: { lat: 42.295, lon: 92.111 },
    types: ["man", "woman"],
    entranceFee: 3,
    additionalFee: 2,
    cleanScore: 4,
    available: true,
    status: Status["repairing"],
  },
  {
    name: "Central Tower",
    location: { lat: 42.195, lon: 92.112 },
    types: ["disabled"],
    entranceFee: 5,
    additionalFee: 1,
    cleanScore: 2,
    available: true,
    status: Status["cleaning"],
  },
  {
    name: "OFFICE TOWER",
    location: { lat: 42.195, lon: 92.112 },
    types: ["man"],
    entranceFee: 5,
    additionalFee: 1,
    cleanScore: 1,
    available: true,
    status: Status["working"],
  },
];

const ListOfToilets = ({ items }: { items: Toilet[] | undefined }) => {
  // const [restroomList,setRestroomList] = useState<Toilet[]>(items);
  // useState(()=>{
  //   setRestroomList(tempItem);
  // },[items])
  return (
    <>
      <h1>near</h1>
      <div className="card-list">
        {items?.length
          ? items?.map((item, index) => (
              <div key={index} className="card">
                <ToiletCard {...item} />
              </div>
            ))
          : ""}
      </div>
    </>
  );
};

export default ListOfToilets;
