import React, { useState, useEffect } from "react";
import SummaryWidget from "./components/SummaryWidget";
import InvoicesWidget from "./components/InvoicesWidget";
import api from "./services/api";

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    // Fetch transactions from the API
    api.getTransactions().then((data) => setTransactions(data));

    // For simplicity, invoices are initialized with an empty array
    setInvoices([]);
  }, []);

  const handleCreateInvoice = (newInvoice) => {
    // Update invoices state with the new invoice
    setInvoices([...invoices, newInvoice]);
  };

  const handleUpdateInvoice = (updatedInvoice) => {
    // Update the state with the modified invoice
    setInvoices((prevInvoices) => {
      // Find the index of the updated invoice in the array
      const index = prevInvoices.findIndex(
        (invoice) => invoice.referenceNumber === updatedInvoice.referenceNumber
      );

      // Create a new array with the updated invoice
      const updatedInvoices = [...prevInvoices];
      updatedInvoices[index] = updatedInvoice;

      return updatedInvoices;
    });
  };

  return (
    <div>
      <SummaryWidget transactions={transactions} invoices={invoices} />
      <InvoicesWidget
        invoices={invoices}
        onCreateInvoice={handleCreateInvoice}
        onUpdateInvoice={handleUpdateInvoice}
      />
    </div>
  );
};

export default App;
