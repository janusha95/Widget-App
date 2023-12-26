// Mock API service
const api = {
  getTransactions: () => {
    const mockInvoices = [
      {
        client: "Client A",
        creationDate: "2023-12-12",
        referenceNumber: "INV-001",
        amount: 1000,
        status: "PAID",
      },
      {
        client: "Client B",
        creationDate: "2023-01-10",
        referenceNumber: "INV-002",
        amount: -500,
        status: "NOT PAID",
      },
      {
        client: "Client C",
        creationDate: "2023-01-15",
        referenceNumber: "INV-003",
        amount: 800,
        status: "PAID",
      },
    ];

    return Promise.resolve(mockInvoices);
  },
};

export default api;
