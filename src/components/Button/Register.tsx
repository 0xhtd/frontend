import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal";
import { AppDispatch, RootState } from "../../store/store";
import { HashConnectConnectionState } from "hashconnect";
import styles from "./Button.module.scss";
import { useState } from "react";
import {
  AccountId,
  ContractExecuteTransaction,
  ContractFunctionParameters,
  Hbar,
  TransactionId,
} from "@hashgraph/sdk";
import { toHexString } from "../../lib/hex";
import instance from "../../lib/rest";
import { setLoad } from "../../store/slices/wallet";
Modal.setAppElement("#root");
const Register = () => {
  const accountId = useSelector((state: RootState) => state.wallet.accountId);
  const contractId = useSelector((state: RootState) => state.wallet.contractId);
  const hashconnect = useSelector((state: RootState) => state.wallet.connect);
  const hashconnectState = useSelector(
    (state: RootState) => state.wallet.state
  );
  const dispatch: AppDispatch = useDispatch();
  const [openedRegister, setOpenRegister] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [symbol, setSymbol] = useState<string>("");
  const [memo, setMemo] = useState<string>("");
  const [maxSupply, setMaxSupply] = useState<number>(1);
  const openRegister = () => {
    setOpenRegister(true);
  };
  const closeRegister = () => {
    setOpenRegister(false);
    setName("");
    setSymbol("");
    setMemo("");
    setMaxSupply(1);
  };
  const register = async () => {
    if (
      hashconnect == undefined ||
      accountId == undefined ||
      contractId == undefined ||
      hashconnectState == HashConnectConnectionState.Disconnected ||
      name == "" ||
      symbol == "" ||
      memo == "" ||
      maxSupply <= 0
    ) {
      console.log(
        hashconnect,
        accountId,
        contractId,
        hashconnectState,
        name,
        symbol,
        memo,
        maxSupply
      );
      return;
    }
    const metadata =
      "ipfs://bafybeibcuj2ibcbbzbrjxsodgb2245qsomedigpu647zjrgilojhkifqhy/0/";
    const mintToken = new ContractExecuteTransaction()
      .setContractId(contractId)
      .setGas(4000000)
      .setPayableAmount(new Hbar(50))
      .setFunction(
        "registerToilet",
        new ContractFunctionParameters()
          .addString(name)
          .addString(symbol)
          .addString(memo)
          .addInt64(maxSupply)
          .addString(metadata)
      )
      .setTransactionId(TransactionId.generate(accountId))
      .setNodeAccountIds([new AccountId(3)])
      .freeze();
    const signedTx = await hashconnect.signTransaction(accountId, mintToken);
    const result = await instance.post("/register-toilet", {
      tx: toHexString(signedTx.toBytes()),
      name: name,
      symbol: symbol,
      memo: memo,
      maxSupply: maxSupply,
      metadata: metadata,
    });
    if (result.status != 200) {
      alert("failed to send transaction");
      return;
    }
    dispatch(setLoad(false));
    alert("success");
    closeRegister();
  };
  return (
    <>
      <button className={styles.button} onClick={openRegister}>
        Register
      </button>
      <Modal
        isOpen={openedRegister}
        onRequestClose={closeRegister}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
          content: {
            width: "300px",
            height: "400px",
            margin: "auto",
            borderRadius: "4px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
            padding: "20px",
          },
        }}
      >
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Name"
        ></input>
        <input
          onChange={(e) => {
            setSymbol(e.target.value);
          }}
          placeholder="Symbol"
        ></input>
        <br />
        <input
          onChange={(e) => {
            setMemo(e.target.value);
          }}
          placeholder="Memo"
        ></input>
        <br />
        <input
          onChange={(e) => {
            setMaxSupply(Number(e.target.value));
          }}
          placeholder="Max Supply(default=1)"
        ></input>
        <br />
        <button onClick={register}>생성</button> &nbsp;
        <button onClick={closeRegister}>닫기</button>
      </Modal>
    </>
  );
};

export default Register;
