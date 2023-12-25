import React, { useState } from "react";
import styled from "styled-components";
import InvoiceForm from "../InvoiceForm";

const InvoicesWidget = ({ invoices, onCreateInvoice, onUpdateInvoice }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [editingInvoice, setEditingInvoice] = useState(null);

  const handleCreateInvoice = (invoice) => {
    onCreateInvoice(invoice);
    setIsFormVisible(false);
  };

  const handleEditInvoice = (invoice) => {
    setEditingInvoice(invoice);
    setIsFormVisible(true);
  };

  const handleUpdateInvoice = (updatedInvoice) => {
    onUpdateInvoice(updatedInvoice);
    setEditingInvoice(null);
    setIsFormVisible(false);
  };

  return (
    <InvoicesContainer>
      <button onClick={() => setIsFormVisible(!isFormVisible)}>
        {isFormVisible ? "Close Invoice Form" : "Create New Invoice"}
      </button>
      {isFormVisible && (
        <InvoiceForm
          initialInvoice={editingInvoice}
          onCreateInvoice={handleCreateInvoice}
          onUpdateInvoice={handleUpdateInvoice}
        />
      )}
      <InvoicesList>
        {invoices.map((invoice) => (
          <div key={invoice.referenceNumber}>
            {invoice.client} - ${invoice.amount} - {invoice.status}
            <button onClick={() => handleEditInvoice(invoice)}>Edit</button>
          </div>
        ))}
      </InvoicesList>
    </InvoicesContainer>
  );
};

const InvoicesContainer = styled.div`
  // Additional styling for the invoices container
`;

const InvoicesList = styled.div`
  // Styling for the list of invoices
`;

export default InvoicesWidget;
