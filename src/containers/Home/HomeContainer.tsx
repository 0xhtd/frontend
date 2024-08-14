import { Component, ReactNode } from "react";
import ListOfRestrooms from "../../components/Layout/ListOfToilets";
import Deploy from "../../components/Button/Deploy";

class HomeContainer extends Component {
  render(): ReactNode {
    return (
      <>
        <div>
          <Deploy />
        </div>
        <br></br>
        <div>
          <ListOfRestrooms items={[]} />
        </div>
      </>
    );
  }
}

export default HomeContainer;
