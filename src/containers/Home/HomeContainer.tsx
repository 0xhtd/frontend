import ListOfRestrooms from "../../components/Layout/ListOfToilets";
import Deploy from "../../components/Button/Deploy";

const HomeContainer = () => {
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
};

export default HomeContainer;
