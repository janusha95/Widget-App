import React, { useState, useEffect } from "react";
import SummaryWidget from "./components/Summary/SummaryWidget";
import InvoicesWidget from "./components/Invoices/InvoicesWidget";
import api from "./services/api";
import { Button, Wrapper } from "./App.styles";

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [invoices, setInvoices] = useState([]);
  const [showSummary, setShowSummary] = useState(true);

  useEffect(() => {
    api.getTransactions().then((data) => setTransactions(data));
    api.getInvoices().then((data) => setInvoices(data));
  }, []);

  const handleCreateInvoice = (newInvoice) => {
    setInvoices([...invoices, newInvoice]);
  };

  const handleUpdateInvoice = (updatedInvoice) => {
    setInvoices((prevInvoices) => {
      const index = prevInvoices.findIndex(
        (invoice) => invoice.ID === updatedInvoice.ID
      );

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
        <Button onClick={handleNavigateToSummary}>Summary</Button>
        <Button onClick={handleNavigateToInvoices}>Invoices</Button>
      </Wrapper>

      {showSummary ? (
        <SummaryWidget transactions={transactions} invoices={invoices} />
      ) : (
        <InvoicesWidget
          transactions={transactions}
          invoices={invoices}
          onCreateInvoice={handleCreateInvoice}
          onUpdateInvoice={handleUpdateInvoice}
        />
      )}
    </div>
  );
};

export default App;
