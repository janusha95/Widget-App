import styled from "styled-components";

export const SummaryContainer = styled.div`
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

export const TotalAmount = styled.div`
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

export const SummaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  color: black;
`;

export const SummaryList = styled.table`
  width: 80%;
  border-collapse: collapse;
  margin-top: 20px;

  th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
  }

  @media (max-width: 600px) {
    th,
    td {
      display: block;
      width: 100%;
      box-sizing: border-box;
    }
    tbody tr {
      margin-bottom: 10px;
      display: block;
      border: 1px solid #ddd;
    }

    td {
      text-align: left;
    }
  }
`;

export const ClientSelectionWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  color: black;
`;

export const NameDropdown = styled.select`
  padding: 8px;
  font-size: 16px;
  cursor: pointer;
`;

export const Name = styled.p`
  margin-right: 8px;
  font-size: 16px;
`;
