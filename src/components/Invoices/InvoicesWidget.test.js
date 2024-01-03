import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import InvoicesWidget from "./InvoicesWidget";

describe("InvoicesWidget", () => {
  const initialInvoices = [
    {
      ID: "1",
      creationDate: "2023-01-01",
      name: "John Doe",
      amount: 500,
    },
  ];

  test("render InvoiceWidget with initial data", () => {
    render(<InvoicesWidget invoices={initialInvoices} transactions={[]} />);

    const createButton = screen.getByText("Create New Invoice");
    expect(createButton).toBeInTheDocument();

    initialInvoices.forEach((invoice) => {
      expect(screen.getByText(invoice.ID)).toBeInTheDocument();
      expect(screen.getByText(invoice.creationDate)).toBeInTheDocument();
      expect(screen.getByText(invoice.name)).toBeInTheDocument();
      expect(screen.getByText(`$${invoice.amount}`)).toBeInTheDocument();
    });
  });
});
