import React, { useState, useEffect } from "react";
import styled from "styled-components";

const SummaryWidget = ({ transactions, invoices }) => {
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    // Calculate total amount from transactions
    const calculatedTotal = transactions.reduce(
      (acc, transaction) => acc + transaction.amount,
      0
    );
    setTotalAmount(calculatedTotal);
  }, [transactions]);

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
    <SummaryContainer className={getColorClass()}>
      <div>Total Amount: ${totalAmount}</div>
      <div>Invoices created in the last 30 days: {invoices.length}</div>
    </SummaryContainer>
  );
};

const POSITIVE_THRESHOLD = 1000; // Adjust as needed

const SummaryContainer = styled.div`
  // Styling for different color classes
  &.green {
    color: green;
  }
  &.yellow {
    color: yellow;
  }
  &.red {
    color: red;
  }
`;

export default SummaryWidget;
