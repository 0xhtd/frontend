import ListOfRestrooms from "../../components/Layout/ListOfToilets";
import Deploy from "../../components/Button/Deploy";
import Register from "../../components/Button/Register";
import Enter from "../../components/Button/Enter";
import Exit from "../../components/Button/Exit";
import instance from "../../lib/rest";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { setContractId } from "../../store/slices/wallet";
import { useEffect } from "react";

const HomeContainer = () => {
  const contractId = useSelector((state: RootState) => state.wallet.contractId);
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    if (contractId === undefined) {
      instance({
        method: "GET",
        url: "/api/v1/htd/get-contract",
      })
        .then((value) => {
          if (value.data.response_info.is_success) {
            dispatch(setContractId(value.data.page_info));
          }
        })
        .catch((reason) => {
          console.error(reason);
        });
    }
  }, [dispatch, contractId]);
  return (
    <>
      <div>
        <Deploy /> &nbsp;
        <Register /> &nbsp;
        <Enter /> &nbsp;
        <Exit />
      </div>
      <br></br>
      <div>
        <ListOfRestrooms items={[]} />
      </div>
    </>
  );
};

export default HomeContainer;
