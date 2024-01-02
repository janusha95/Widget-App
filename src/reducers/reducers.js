import { combineReducers } from "redux";
import invoicesReducer from "./InvoiceReducer";

const rootReducer = combineReducers({
  invoices: invoicesReducer,
});

export default rootReducer;
