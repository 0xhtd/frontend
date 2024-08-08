import { Component, ReactNode } from "react";
import ListOfRestrooms from "../../components/Layout/ListOfToilets";

class HomeContainer extends Component {
  render(): ReactNode {
    return (
      <>
        <div>
          <ListOfRestrooms />
        </div>
      </>
    );
  }
}

export default HomeContainer;
