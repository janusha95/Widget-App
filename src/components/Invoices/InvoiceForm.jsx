import React, { useState, useEffect } from "react";

const InvoiceForm = ({ initialInvoice, onCreateInvoice, onUpdateInvoice }) => {
  const [name, setName] = useState(initialInvoice ? initialInvoice.name : "");
  const [amount, setAmount] = useState(
    initialInvoice ? String(initialInvoice.amount) : ""
  );

  const [ID, setID] = useState(initialInvoice ? String(initialInvoice.ID) : "");
  const [creationDate, setCreationDate] = useState(
    initialInvoice ? String(initialInvoice.creationDate) : ""
  );

  useEffect(() => {
    if (initialInvoice) {
      setName(initialInvoice.name);
      setAmount(String(initialInvoice.amount));
      setID(String(initialInvoice.ID));
      setCreationDate(initialInvoice.creationDate);
    }
  }, [initialInvoice]);

  const handleSaveInvoice = () => {
    const updatedInvoice = {
      ID,
      creationDate,
      name,
      amount: parseFloat(amount),
    };

    if (initialInvoice) {
      updatedInvoice.ID = initialInvoice.ID;
      onUpdateInvoice(updatedInvoice);
    } else {
      onCreateInvoice(updatedInvoice);
    }

    setID("");
    setName("");
    setAmount("");
  };

  return (
    <div>
      <h2>{initialInvoice ? "Edit Invoice" : "Create New Invoice"}</h2>
      <form>
        <label>
          ID:
          <input
            type="number"
            value={ID}
            onChange={(e) => setID(e.target.value)}
          />
        </label>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
        <button type="button" onClick={handleSaveInvoice}>
          {initialInvoice ? "Update Invoice" : "Create Invoice"}
        </button>
      </form>
    </div>
  );
};

export default InvoiceForm;
