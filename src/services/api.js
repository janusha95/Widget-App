// Mock API service
const api = {
  getTransactions: () => {
    // Mock implementation, replace with actual API call
    const mockInvoices = [
      {
        client: "Client A",
        creationDate: "2023-01-01",
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
      // Add more invoices as needed
    ];

    return Promise.resolve(mockInvoices);
  },
};

export default api;
