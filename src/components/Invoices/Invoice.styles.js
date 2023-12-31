import styled from "styled-components";

export const InvoicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

export const SummaryWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;

export const InvoicesList = styled.table`
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

export const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 90%;
  margin: auto;
`;

export const Label = styled.label`
  margin-bottom: 8px;
  cursor: pointer;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
  cursor: pointer;
`;

export const Button = styled.button`
  border-radius: 3px;
  border: 1px solid black;
  height: 32px;
  align-items: center;
  color: black;
  display: flex;
  transition: all 200ms ease-in-out;
  width: auto;
  cursor: pointer;
  background-color: white;
`;
