import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import instance from "../../lib/rest";
import { HashConnectConnectionState } from "hashconnect";
// import {
//   ContractFunctionParameters,
//   ContractExecuteTransaction,
//   ContractId,
//   Hbar,
// } from "@hashgraph/sdk";

const Deploy = () => {
  const accountId = useSelector((state: RootState) => state.wallet.accountId);
  const hashconnect = useSelector((state: RootState) => state.wallet.connect);
  const hashconnectState = useSelector(
    (state: RootState) => state.wallet.state
  );
  const deploy = async () => {
    if (
      hashconnect == undefined ||
      accountId == undefined ||
      hashconnectState == HashConnectConnectionState.Disconnected
    ) {
      console.log(hashconnect);
      console.log(accountId);
      console.log(hashconnectState);
      return;
    }
    console.log(
      await instance({
        method: "GET",
        url: "/api",
      })
    );
    // const metadata =
    //   "ipfs://bafyreie3ichmqul4xa7e6xcy34tylbuq2vf3gnjf7c55trg3b6xyjr4bku/metadata.json";

    // const contractId: ContractId = ContractId.fromString("0.0.4673808");

    // // Mint NFT
    // const mintToken = new ContractExecuteTransaction()
    //   .setContractId(contractId)
    //   .setGas(4000000)
    //   .setPayableAmount(new Hbar(50))
    //   // .setMaxTransactionFee(new Hbar(20)) //Use when HBAR is under 10 cents
    //   .setFunction(
    //     "registerToilet",
    //     new ContractFunctionParameters()
    //       .addString("test") // Token address
    //       .addString("test")
    //       .addString("memo")
    //       .addInt64(2)
    //       .addString(metadata)
    //   );
    // const mintTokenTxawait = await hashconnect.sendTransaction(
    //   accountId,
    //   mintToken
    // );

    // console.log(mintTokenTxawait);
  };
  return <button onClick={deploy}>Deploy</button>;
};

export default Deploy;
