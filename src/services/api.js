// Mock API service
const api = {
  getTransactions: () => {
    const mockTransactions = [
      {
        name: "Client A",
        transactionDate: "2023-12-12",
        ID: "1",
        amount: 1000,
        description: "Food",
      },
      {
        name: "Client B",
        transactionDate: "2023-12-12",
        ID: "2",
        amount: -500,
        description: "Bill",
      },
      {
        name: "Client C",
        transactionDate: "2023-12-12",
        ID: "3",
        amount: 800,
        description: "Car",
      },
    ];

    return Promise.resolve(mockTransactions);
  },
  getInvoices: () => {
    const mockInvoices = [
      {
        name: "Client A",
        creationDate: "2023-12-12",
        ID: "1",
        amount: 1000,
      },
      {
        name: "Client B",
        creationDate: "2023-01-10",
        ID: "2",
        amount: -500,
      },
      {
        name: "Client C",
        creationDate: "2023-01-15",
        ID: "3",
        amount: 800,
      },
    ];

    return Promise.resolve(mockInvoices);
  },
};

export default api;
