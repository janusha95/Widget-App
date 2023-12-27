import React, { useState } from "react";
import styled from "styled-components";
import InvoiceForm from "./InvoiceForm";
import {
  InvoicesContainer,
  SummaryWrapper,
  InvoicesList,
} from "./Invoice.styles";
import { Button } from "../../App.styles";

const InvoicesWidget = ({
  invoices,
  transactions,
  onCreateInvoice,
  onUpdateInvoice,
}) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [editingInvoice, setEditingInvoice] = useState(null);

  const isInvoicePaid = (invoice, transactions) => {
    const matchingTransactions = transactions.filter(
      (transaction) =>
        transaction.amount === invoice.amount &&
        transaction.ID === invoice.ID &&
        new Date(transaction.transactionDate) > new Date(invoice.creationDate)
    );
    return matchingTransactions.length > 0;
  };

  const handleCreateInvoice = (invoice) => {
    onCreateInvoice(invoice);
    setIsFormVisible(false);
  };

  const handleEditInvoice = (invoice) => {
    setEditingInvoice(invoice);
    setIsFormVisible(true);
  };

  const handleUpdateInvoice = (updatedInvoice, index) => {
    onUpdateInvoice(updatedInvoice, index);
    setEditingInvoice(null);
    setIsFormVisible(false);
  };

  return (
    <InvoicesContainer>
      <Button onClick={() => setIsFormVisible(!isFormVisible)}>
        {isFormVisible ? "Close Invoice Form" : "Create New Invoice"}
      </Button>
      {isFormVisible && (
        <InvoiceForm
          initialInvoice={editingInvoice}
          onCreateInvoice={handleCreateInvoice}
          onUpdateInvoice={(updatedInvoice) =>
            handleUpdateInvoice(
              updatedInvoice,
              invoices.indexOf(editingInvoice)
            )
          }
        />
      )}
      <InvoicesList>
        <div>
          {"ID"} - {"Date"} - {"Name"} - {"Amount"} - {"Status"}
        </div>
        {invoices.map((invoice) => (
          <div key={invoice.ID}>
            {invoice.ID} - {invoice.creationDate} - {invoice.name} - $
            {invoice.amount} -{" "}
            {isInvoicePaid(invoice, transactions) ? "PAID" : "NOT PAID"}
            <button onClick={() => handleEditInvoice(invoice)}>Edit</button>
          </div>
        ))}
      </InvoicesList>
    </InvoicesContainer>
  );
};

export default InvoicesWidget;
