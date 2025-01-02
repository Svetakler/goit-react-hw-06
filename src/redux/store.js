import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import contactsReducer from "./contactsSlice";
import filtersReducer from "./filtersSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["contacts"],
};

const rootReducer = {
  contacts: persistReducer(persistConfig, contactsReducer),
  filters: filtersReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

const persistor = persistStore(store);

export { store, persistor };
