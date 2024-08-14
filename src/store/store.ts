import { configureStore } from "@reduxjs/toolkit";
import walletReducer from "./slices/wallet";

const store = configureStore({
  reducer: {
    wallet: walletReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // 직렬화 검사 비활성화
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
