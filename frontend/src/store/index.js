import { configureStore } from "@reduxjs/toolkit";
import recordsReducer from "./features/recordsSlice";

const store = configureStore({
    reducer: {
        records: recordsReducer,
    },
});

export default store;
