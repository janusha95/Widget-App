# Widget-App

- Run `npm i` to install dependencies
- Run `npm start` to run in local

## Requirements fulfilled

Summary and Invoice Widget

# Summary Widget

1. It has the Total Amount
   Probability Threshold is set to 1000

- > 1000 is displayed in Green
- > < 1000 is displayed in Yellow
- > =< 0 is displayed in Red

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

- Styling is done by Styled Components and Data is mocked and used from api.js

You are building a responsive web application that helps self helps self-employed individuals to track their income and expenses in order to give them better insights of their monetary situation, so they can focus on what they love doing without worrying about their finances!

In order to do so, you need to create a dashboard which contains a set of widgets:

A widget (Summary Widget) to track a summary of the customer’s financial status.

It should read the data from the list of transactions from the customer’s bank account.
Where each transaction contains the transaction date; a description; a unique reference number; and a monetary amount which could be positive (cash in) or negative (cash out)
This widget should show the total monetary amount in the bank account looking at the transaction data.
If the total is greater than a configured positive threshold, the number should be shown in green
If the total is lower than the same configured threshold from before (but the total is still positive) the number should be shown in yellow
If the total is lower than 0.00, the number should be shown in red
One widget (Invoices Widget) to manage the list of invoices the user has for his/her customers, which supports both editing existing invoices as well as creating new ones.

Each invoice contains the following:
name of the client
the creation date
a unique reference number
a monetary amount, which could be positive (money to be received) or negative (a refund to the customer)
a status (PAID or NOT PAID).
Every field should be modifiable, except the invoice status which is read only and it is worked out in the following way:
An invoice is considered PAID if there is a bank transaction for the same amount, with the bank transaction’s reference number being equal to the invoice’s reference number, and with the bank transaction date being later than the invoice creation date.
An invoice is considered NOT PAID if the previous criteria is not matched.
Users should be able to create a new invoice.
Other Requirements:

Summary widget should also show the number of invoices created in the last 30 days.
Changes in one widget should automatically update other widgets. - I.e. the creation of an invoice should affect the summary widget, as this shows the number of invoices created in the month.
Additional instructions¶

Feel free to mock backend service responses and use any library/framework of your choice.
Add pseudocode or an actual example of a unit test.
