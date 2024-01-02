export const CREATE_INVOICE = "CREATE_INVOICE";

export const createInvoice = (invoice) => ({
  type: CREATE_INVOICE,
  payload: invoice,
});
