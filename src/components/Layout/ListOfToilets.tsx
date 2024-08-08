import { STATUS } from "../../../types/enum";
import ToiletCard from "../Cards/ToiletCard";

const ListOfRestrooms = () => {
  return (
    <div>
      <div className="scroll-pl-6 snap-x">
        <div className="flex space-x-4">
          <ToiletCard
            name="OFFICE TOWER"
            location={{ lat: 42.195, lon: 92.112 }}
            type={"man"}
            entranceFee={5}
            additionalFee={1}
            cleanScore={4}
            available={true}
            status={STATUS["working"]}
          />
          <ToiletCard
            name="Royal Building"
            location={{ lat: 42.295, lon: 92.111 }}
            type={"woman"}
            entranceFee={3}
            additionalFee={2}
            cleanScore={5}
            available={false}
            status={STATUS["cleaning"]}
          />
          <ToiletCard
            name="Central Tower"
            location={{ lat: 42.198, lon: 92.113 }}
            type={"man"}
            entranceFee={5}
            additionalFee={1}
            cleanScore={2}
            available={false}
            status={STATUS["repairing"]}
          />
        </div>
      </div>
    </div>
  );
};

export default ListOfRestrooms;
