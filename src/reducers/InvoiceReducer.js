import { CREATE_INVOICE } from "../actions";

const initialInvoicesState = {
  invoices: [
    {
      name: "Lucy",
      creationDate: "2023-10-12",
      ID: "1",
      amount: -500,
    },
    {
      name: "John",
      creationDate: "2023-12-12",
      ID: "2",
      amount: 1000,
    },
    {
      name: "David",
      creationDate: "2023-12-18",
      ID: "3",
      amount: 800,
    },
    {
      name: "Lucy",
      creationDate: "2023-12-26",
      ID: "4",
      amount: 100,
      description: "Bill",
    },
  ],
};

const invoicesReducer = (state = initialInvoicesState, action) => {
  switch (action.type) {
    case CREATE_INVOICE:
      const newState = {
        ...state,
        invoices: [...state.invoices, action.payload],
      };
      return newState;
    default:
      return state;
  }
};

export default invoicesReducer;
