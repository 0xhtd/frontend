import { Component, ReactNode } from "react";
import ToiletCard from "../../components/Cards/ToiletCard";

class HomeContainer extends Component {
  render(): ReactNode {
    return (
      <>
        <div>
          <ToiletCard
            name="장교빌딩"
            type={"man"}
            number={3}
            available={true}
          />
          <ToiletCard
            name="아주좋습니다"
            type="disabled"
            number={3}
            available={false}
          />
          <ToiletCard
            name="아주좋습니다"
            type="woman"
            number={3}
            available={true}
          />
        </div>
      </>
    );
  }
}

export default HomeContainer;
