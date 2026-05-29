import { configureStore } from "@reduxjs/toolkit";
import complaintReducer from "./complaintSlice";

export const store = configureStore({
  reducer: {
    complaints: complaintReducer,
  },
});

store.subscribe(() => {
  localStorage.setItem(
    "cms_complaints",
    JSON.stringify(store.getState().complaints.complaints)
  );
});