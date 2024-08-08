import "./ToiletCard.css";
import RestroomInfoIcons from "../Icon/RestroomInfoIcons";
const ToiletCard = ({
  name,
  type,
  number,
  available,
}: {
  name: string;
  type: string;
  number: number;
  available: boolean;
}) => {
  return (
    <>
      <input
        id="switch"
        type="checkbox"
        checked={!available}
        onClick={() => {}}
      ></input>
      <div className="app">
        <div className="body">
          <div className="phone">
            <div className="content">
              <div>{name}</div>
              <div>Toilet #{number} </div>
              <RestroomInfoIcons type={type} />
              <label htmlFor="switch">
                <div className="toggle"></div>
                <div className="names">
                  <p className="light">Vacant</p>
                  <p className="dark">Occupied</p>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ToiletCard;
