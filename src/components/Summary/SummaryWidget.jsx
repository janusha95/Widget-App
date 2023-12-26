import React, { useState, useEffect } from "react";
import { SummaryContainer, SummaryWrapper } from "./Summary.styles";

const SummaryWidget = ({ transactions, invoices }) => {
  const [totalAmount, setTotalAmount] = useState(0);
  const POSITIVE_THRESHOLD = 1000;

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
      <SummaryWrapper>
        <div>Total Amount: ${totalAmount}</div>
        <div>Invoices created in the last 30 days: {invoices.length}</div>
      </SummaryWrapper>
    </SummaryContainer>
  );
};

export default SummaryWidget;
