import React, { useState, useEffect } from "react";
import {
  SummaryContainer,
  SummaryWrapper,
  SummaryList,
  TotalAmount,
  ClientSelectionWrapper,
  Name,
  NameDropdown,
} from "./Summary.styles";

const SummaryWidget = ({ transactions, invoices }) => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [selectedName, setSelectedName] = useState("");
  const [uniqueClients, setUniqueClients] = useState([]);
  const [invoicesLast30Days, setInvoicesLast30Days] = useState([]);
  const POSITIVE_THRESHOLD = 1000;

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
      <SummaryWrapper>
        <TotalAmount className={getColorClass()}>
          Total Amount: ${totalAmount}
        </TotalAmount>
        <p>Invoices created in the last 30 days: {invoicesLast30Days.length}</p>
        <ClientSelectionWrapper>
          <Name>Select a Customer:</Name>
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
      </SummaryWrapper>
    </SummaryContainer>
  );
};

export default SummaryWidget;
