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
          invoices={invoices}
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
        <thead>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Name</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice) => (
            <tr key={invoice.ID}>
              <td>{invoice.ID}</td>
              <td>{invoice.creationDate}</td>
              <td>{invoice.name}</td>
              <td>${invoice.amount}</td>
              <td>
                {isInvoicePaid(invoice, transactions) ? "PAID" : "NOT PAID"}
              </td>
              <td>
                {" "}
                <button onClick={() => handleEditInvoice(invoice)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </InvoicesList>
    </InvoicesContainer>
  );
};

export default InvoicesWidget;
