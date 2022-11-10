export interface iApiResponse<T> {
  message?: string | string[];
  errorCode?: string;
  data: T;
}

export interface iListApiResponse<T> extends iApiResponse<T> {
  page: number;
  total: number;
}

export type iGetStorePurchaseListAPIResponse = iListApiResponse<
  iStorePurchase[]
>;

export interface iStorePurchase {
  id: string;
  purchase_date: string;
  payment_status: PaymentStatus;
  payment_date: string;
  supplier: iSupplier;
  debt_type: string;
  invoice_number?: string | null;
  total_transaction: iAmountCurrency;
  paid_amount: iAmountCurrency;
  total_debt: iAmountCurrency;
  credit_due?: iCreditDue; // optional if payment_status == UNPAID,
}

export enum PaymentStatus {
  PAID = "PAID",
  UNPAID = "UNPAID",
  PARTIALLY_PAID = "PARTIALLY PAID",
}

export interface iSupplier {
  id: string;
  name: string;
}

export enum TaxNature {
  INCLUDE = "INCLUDE",
  EXCLUDE = "EXCLUDE",
}

export interface iAmountCurrency {
  currency: string;
  amount: string;
  taxType?: TaxNature;
}

export interface iCreditDue {
  dueDate: string;
  aging: number;
  aging_display_condition: number; // use this to display when to show aging label
}
