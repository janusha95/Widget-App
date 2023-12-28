# Widget-App

Run npm i to install dependencies
Run npm start to run in local

## Requirements fulfilled

Summary and Invoice Widget

# Summary Widget

1. It has the Total Amount
   Probability Threshold is set to 1000

   > 1000 is displayed in Green
   > < 1000 is displayed in Yellow
   > =< 0 is displayed in Red

2. No of invoices created in last 30 days

3. Dropdown to see Summary of all the Customer / Specific Customer
4. Table has details like ID, Transaction Date, Amount and Description

# Invoice Widget

1. Create a new Invoice
2. Edit a existing Invoice
3. Table has deatils like ID, Date, Name, Amount, Status
4. Status is determined by the following condition
   - An invoice is considered PAID if there is a bank transaction for the same amount, with the bank transaction’s reference number being equal to the invoice’s reference number, and with the bank transaction date being later than the invoice creation date.
   - An invoice is considered NOT PAID if the previous criteria is not matched.
5. Status and Creation Date is Read-only
6. No of invoices will reflect in the Summary Widget when adding a new Invoice

# Styling is done by Styled Components and Data is mocked and used from api.js
