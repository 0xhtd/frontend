import "./ToiletCard.css";
import RestroomInfoIcons from "../Icon/RestroomInfoIcons";
import { STATUS } from "../../../types/enum";
const ToiletCard = ({
  name,
  location,
  type,
  entranceFee,
  additionalFee,
  cleanScore,
  available,
  status,
}: {
  name: string;
  location: { lat: number; lon: number };
  type: string;
  entranceFee: number;
  additionalFee: number;
  cleanScore: number;
  available: boolean;
  status: STATUS;
}) => {
  return (
    <>
      <input id="switch" type="checkbox" checked={!available}></input>
      <div className="app">
        <div className="body">
          <div className="phone">
            <div className="content">
              <div>{name}</div>
              <RestroomInfoIcons
                type={type}
                status={status}
                cleanScore={cleanScore}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ToiletCard;
