import { Component, ReactNode } from "react";
import CardInfo from "../../components/Cards/CardInfo";
import ToiletCard from "../../components/Cards/ToiletCard";

class HomeContainer extends Component {
  render(): ReactNode {
    return (
      <>
        <div>
          <button></button>
        </div>
        <div>
          <CardInfo />
        </div>
        <div>
          <ToiletCard name="아주좋습니다" number={3} />
        </div>
      </>
    );
  }
}

export default HomeContainer;
