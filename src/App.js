import React, { useState, useEffect } from "react";
import SummaryWidget from "./components/Summary/SummaryWidget";
import InvoicesWidget from "./components/Invoices/InvoicesWidget";
import api from "./services/api";
import { Button, Wrapper } from "./App.styles";

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [invoices, setInvoices] = useState([]);
  const [showSummary, setShowSummary] = useState(false);

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
  const handleNavigateToInvoices = () => {
    setShowSummary(false);
  };

  const handleNavigateToSummary = () => {
    setShowSummary(true);
  };

  return (
    <div>
      <Wrapper>
        <nav>
          <Button onClick={handleNavigateToSummary}>Summary</Button>
          <Button onClick={handleNavigateToInvoices}>Invoices</Button>
        </nav>
      </Wrapper>
      {/* <hr /> */}

      {showSummary ? (
        <SummaryWidget transactions={transactions} invoices={invoices} />
      ) : (
        <InvoicesWidget
          invoices={invoices}
          onCreateInvoice={handleCreateInvoice}
          onUpdateInvoice={handleUpdateInvoice}
        />
      )}
    </div>
  );
};

export default App;
