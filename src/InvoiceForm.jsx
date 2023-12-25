import React, { useState, useEffect } from "react";

const InvoiceForm = ({ initialInvoice, onCreateInvoice, onUpdateInvoice }) => {
  const [client, setClient] = useState(
    initialInvoice ? initialInvoice.client : ""
  );
  const [amount, setAmount] = useState(
    initialInvoice ? String(initialInvoice.amount) : ""
  );

  // ... other form fields

  useEffect(() => {
    // Update form fields when initialInvoice changes (for editing)
    if (initialInvoice) {
      setClient(initialInvoice.client);
      setAmount(String(initialInvoice.amount));
      // ... update other form fields
    }
  }, [initialInvoice]);

  const handleSaveInvoice = () => {
    const updatedInvoice = {
      client,
      amount: parseFloat(amount),
      // ... other form fields
    };

    if (initialInvoice) {
      // If initialInvoice exists, it's an edit operation
      updatedInvoice.referenceNumber = initialInvoice.referenceNumber;
      onUpdateInvoice(updatedInvoice);
    } else {
      // If initialInvoice is null, it's a new invoice creation
      onCreateInvoice(updatedInvoice);
    }

    // Reset form fields
    setClient("");
    setAmount("");
    // ... reset other form fields
  };

  return (
    <div>
      <h2>{initialInvoice ? "Edit Invoice" : "Create New Invoice"}</h2>
      <form>
        <label>
          Client:
          <input
            type="text"
            value={client}
            onChange={(e) => setClient(e.target.value)}
          />
        </label>
        <label>
          Amount:
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
        {/* ... other form fields */}
        <button type="button" onClick={handleSaveInvoice}>
          {initialInvoice ? "Update Invoice" : "Create Invoice"}
        </button>
      </form>
    </div>
  );
};

export default InvoiceForm;
