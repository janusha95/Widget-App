import React, { useState, useEffect } from "react";
import { FormContainer, Label, Input, Button } from "./Invoice.styles";

const InvoiceForm = ({
  invoices,
  initialInvoice,
  onCreateInvoice,
  onUpdateInvoice,
}) => {
  const [name, setName] = useState(initialInvoice ? initialInvoice.name : "");
  const [amount, setAmount] = useState(
    initialInvoice ? String(initialInvoice.amount) : ""
  );
  const [ID, setID] = useState(initialInvoice ? String(initialInvoice.ID) : "");

  const getCurrentDate = () => {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split("T")[0];
    return formattedDate;
  };
  const [creationDate, setCreationDate] = useState(
    initialInvoice ? String(initialInvoice.creationDate) : getCurrentDate()
  );

  const capFirstLetter = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  useEffect(() => {
    if (initialInvoice) {
      setName(initialInvoice.name);
      setAmount(String(initialInvoice.amount));
      setID(String(initialInvoice.ID));
      setCreationDate(String(initialInvoice.creationDate));
    } else {
      // Set a new ID when creating a new invoice
      const newID = invoices.length + 1;
      setID(String(newID));
    }
  }, [initialInvoice, invoices]);

  const handleSaveInvoice = () => {
    const updatedInvoice = {
      ID,
      creationDate,
      name: capFirstLetter(name),
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
    <>
      <h2>{initialInvoice ? "Edit Invoice" : "Create New Invoice"}</h2>
      <FormContainer>
        <Label>
          ID:
          <Input
            type="number"
            value={ID}
            onChange={(e) => setID(e.target.value)}
          />
        </Label>
        <Label>
          Name:
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Label>
        <Label>
          Amount:
          <Input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </Label>
      </FormContainer>
      <Button type="button" onClick={handleSaveInvoice}>
        {initialInvoice ? "Update Invoice" : "Create Invoice"}
      </Button>
    </>
  );
};

export default InvoiceForm;
