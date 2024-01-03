import React, { useState, useEffect } from "react";
import {
  SummaryContainer,
  SummaryList,
  TotalAmount,
  ClientSelectionWrapper,
  Desc,
  NameDropdown,
  AmountWrapper,
} from "./Summary.styles";
import { POSITIVE_THRESHOLD } from "../../constants";

const SummaryWidget = ({ transactions, invoices }) => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [selectedName, setSelectedName] = useState("");
  const [uniqueClients, setUniqueClients] = useState([]);
  const [invoicesLast30Days, setInvoicesLast30Days] = useState([]);

  useEffect(() => {
    const calculatedTotal = transactions.reduce(
      (acc, transaction) => acc + transaction.amount,
      0
    );
    setTotalAmount(calculatedTotal);
  }, [transactions]);

  useEffect(() => {
    const names = Array.from(
      new Set(transactions.map((transaction) => transaction.name))
    );
    setUniqueClients(names);
  }, [transactions]);

  const getFilteredTransactions = () => {
    return selectedName
      ? transactions.filter((transaction) => transaction.name === selectedName)
      : transactions;
  };

  useEffect(() => {
    const currentDate = new Date();
    const oneMonth = new Date(currentDate);
    oneMonth.setDate(currentDate.getDate() - 30);

    const filteredInvoices = invoices.filter(
      (invoice) => new Date(invoice.creationDate) >= oneMonth
    );
    setInvoicesLast30Days(filteredInvoices);
  }, [invoices]);

  const handleNameChange = (event) => {
    setSelectedName(event.target.value);
  };

  const getColorClass = () => {
    if (totalAmount >= POSITIVE_THRESHOLD) {
      return "green";
    } else if (totalAmount >= 0) {
      return "yellow";
    } else {
      return "red";
    }
  };

  return (
    <SummaryContainer>
      <AmountWrapper>
        <Desc>Total Amount:</Desc>
        <TotalAmount className={getColorClass()}>${totalAmount}</TotalAmount>
      </AmountWrapper>
      <p>Invoices created in the last 30 days: {invoicesLast30Days.length}</p>
      <ClientSelectionWrapper>
        <Desc>Select a Customer:</Desc>
        <NameDropdown
          id="customerDropdown"
          value={selectedName}
          onChange={handleNameChange}
          className="dropdown"
        >
          <option value="">All Clients</option>
          {uniqueClients.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </NameDropdown>
      </ClientSelectionWrapper>
      <h3>Summary for {selectedName || "All Customers"}</h3>
      <SummaryList>
        <thead>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {getFilteredTransactions().map((transaction) => (
            <tr key={transaction.ID}>
              <td>{transaction.ID}</td>
              <td>{transaction.transactionDate}</td>
              <td>${transaction.amount}</td>
              <td>{transaction.description}</td>
            </tr>
          ))}
        </tbody>
      </SummaryList>
    </SummaryContainer>
  );
};

export default SummaryWidget;
