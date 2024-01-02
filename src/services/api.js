// Mock API service
const api = {
  getTransactions: () => {
    const mockTransactions = [
      {
        name: "Lucy",
        transactionDate: "2023-10-12",
        ID: "1",
        amount: -500,
        description: "Sale",
      },
      {
        name: "John",
        transactionDate: "2023-12-16",
        ID: "2",
        amount: 1000,
        description: "Sale",
      },
      {
        name: "David",
        transactionDate: "2023-12-18",
        ID: "3",
        amount: 800,
        description: "Service",
      },
      {
        name: "Lucy",
        transactionDate: "2023-12-28",
        ID: "4",
        amount: 100,
        description: "Repair",
      },
    ];

    return Promise.resolve(mockTransactions);
  },
  // getInvoices: () => {
  //   const mockInvoices = [
  //     {
  //       name: "Lucy",
  //       creationDate: "2023-10-12",
  //       ID: "1",
  //       amount: -500,
  //     },
  //     {
  //       name: "John",
  //       creationDate: "2023-12-12",
  //       ID: "2",
  //       amount: 1000,
  //     },
  //     {
  //       name: "David",
  //       creationDate: "2023-12-18",
  //       ID: "3",
  //       amount: 800,
  //     },
  //     {
  //       name: "Lucy",
  //       creationDate: "2023-12-26",
  //       ID: "4",
  //       amount: 100,
  //       description: "Bill",
  //     },
  //   ];

  //   return Promise.resolve(mockInvoices);
  // },
};

export default api;
