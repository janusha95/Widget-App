// reducers.js
import { combineReducers } from "redux";
import { CREATE_INVOICE } from "./actions";

const initialSummaryState = {
  totalAmount: 0,
  invoicesCreatedLast30Days: 0,
};

const summaryReducer = (state = initialSummaryState, action) => {
  switch (action.type) {
    case CREATE_INVOICE:
      return {
        ...state,
        invoicesCreatedLast30Days:
          action.payload.creationDate >=
          new Date(new Date() - 30 * 24 * 60 * 60 * 1000)
            ? state.invoicesCreatedLast30Days + 1
            : state.invoicesCreatedLast30Days,
      };
    default:
      return state;
  }
};

const initialInvoicesState = {
  invoices: [],
};

const invoicesReducer = (state = initialInvoicesState, action) => {
  switch (action.type) {
    case CREATE_INVOICE:
      return {
        ...state,
        invoices: [...state.invoices, action.payload],
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  summary: summaryReducer,
  invoices: invoicesReducer,
});

export default rootReducer;
