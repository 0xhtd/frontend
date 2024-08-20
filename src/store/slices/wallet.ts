import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HashConnect, HashConnectConnectionState } from "hashconnect";
import { AccountId, ContractId } from "@hashgraph/sdk";

type WalletState = {
  connect: HashConnect | undefined;
  state: HashConnectConnectionState;
  accountId: AccountId | undefined;
  contractId: ContractId | undefined;
};

const initialState: WalletState = {
  connect: undefined,
  state: HashConnectConnectionState.Disconnected,
  accountId: undefined,
  contractId: undefined,
};

const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    setConnect: (state, action: PayloadAction<HashConnect>) => {
      state.connect = action.payload;
    },
    setState: (state, action: PayloadAction<HashConnectConnectionState>) => {
      state.state = action.payload;
    },
    setAccountId: (state, action: PayloadAction<AccountId>) => {
      state.accountId = action.payload;
    },
    setContractId: (state, action: PayloadAction<ContractId>) => {
      state.contractId = action.payload;
    },
  },
});

export const { setConnect, setState, setAccountId, setContractId } =
  walletSlice.actions;
export default walletSlice.reducer;
