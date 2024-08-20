import ListOfRestrooms from "../../components/Layout/ListOfToilets";
import Deploy from "../../components/Button/Deploy";
import Register from "../../components/Button/Register";
import instance from "../../lib/rest";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { setContractId, setLoad } from "../../store/slices/wallet";
import { useEffect, useState } from "react";
import { Toilet } from "../../components/Cards/ToiletCard";
import { Status } from "../../../types/enum";

const HomeContainer = () => {
  const contractId = useSelector((state: RootState) => state.wallet.contractId);
  const loaded = useSelector((state: RootState) => state.wallet.loaded);
  const dispatch: AppDispatch = useDispatch();
  const [toilets, setToilets] = useState<Toilet[]>();
  useEffect(() => {
    if (contractId === undefined) {
      instance({
        method: "GET",
        url: "/get-contract",
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
  useEffect(() => {
    if (!loaded) {
      instance({
        method: "GET",
        url: "/get-nft-all",
      })
        .then((value) => {
          console.log(value);
          if (value.data.response_info.is_success) {
            const toilets: Toilet[] = new Array<Toilet>();
            for (let i = 0; i < value.data.page_info.length; i++) {
              const toilet = {
                name: value.data.page_info[i].name,
                location: { lat: 42.195, lon: 92.112 },
                types: ["man", "woman", "disabled"],
                entranceFee: 5,
                additionalFee: 1,
                cleanScore: 5,
                available: true,
                status: Status["working"],
              };
              toilets.push(toilet);
            }
            setToilets(toilets);
            dispatch(setLoad(true));
          }
        })
        .catch((reason) => {
          console.error(reason);
        });
    }
  }, [dispatch, loaded, toilets]);
  return (
    <>
      {contractId === undefined ? (
        <div>
          <Deploy />
        </div>
      ) : (
        <div>
          <Register />
        </div>
      )}
      <br></br>
      <div>{toilets !== undefined && <ListOfRestrooms items={toilets} />}</div>
    </>
  );
};

export default HomeContainer;
