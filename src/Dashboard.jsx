import React from "react";
import SummaryWidget from "./components/SummaryWidget";
import InvoicesWidget from "./components/InvoicesWidget";

function Dashboard() {
  return (
    <div>
      <SummaryWidget />
      <InvoicesWidget />
    </div>
  );
}

export default Dashboard;
