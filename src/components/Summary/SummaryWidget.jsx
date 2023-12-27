import React, { useState, useEffect } from "react";
import {
  SummaryContainer,
  SummaryWrapper,
  SummaryList,
  TotalAmount,
  ClientSelectionWrapper,
} from "./Summary.styles";

const SummaryWidget = ({ transactions, invoices }) => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [selectedName, setSelectedName] = useState("");
  const [uniqueClients, setUniqueClients] = useState([]);
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
        <p>Invoices created in the last 30 days: {invoices.length}</p>
        <ClientSelectionWrapper>
          <label htmlFor="clientDropdown">Select a Client:</label>
          <select
            id="clientDropdown"
            value={selectedName}
            onChange={handleNameChange}
          >
            <option value="">All Clients</option>
            {uniqueClients.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
        </ClientSelectionWrapper>
        <h3>Summary for {selectedName || "All Clients"}</h3>
        <SummaryList>
          <div>
            {"ID"} - {"Date"} - {"Amount"} - {"Description"}
          </div>
          {getFilteredTransactions().map((transaction) => (
            <div key={transaction.ID}>
              {transaction.ID} - {transaction.transactionDate} - $
              {transaction.amount} - {transaction.description}
            </div>
          ))}
        </SummaryList>
      </SummaryWrapper>
    </SummaryContainer>
  );
};

export default SummaryWidget;
