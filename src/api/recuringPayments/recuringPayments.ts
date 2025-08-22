/* eslint-disable no-alert, no-console */

import { recuringPaymentsChangeStatusForHistoryRecurringToIrrevocable } from "./recuring-payments-change-status-for-history-recurring-to-irrevocable.ts";
import { recuringPaymentsGetMuhlafimByDate } from "./recuring-payments-get-muhlafim-by-date.ts";
import { recuringPaymentsGetMuhlafimFile } from "./recuring-payments-get-muhlafim-file.ts";
import { recuringPaymentsGetRecurringPaymentHistory } from "./recuring-payments-get-recurring-payment-history.ts";
import { recuringPaymentsGetRecurringPayment } from "./recuring-payments-get-recurring-payment.ts";
import { recuringPaymentsIsBankNumberValid } from "./recuring-payments-is-bank-number-valid.ts";

export function recuringPayments() {
  return { recuringPaymentsGetMuhlafimFile, recuringPaymentsGetRecurringPayment, recuringPaymentsGetRecurringPaymentHistory, recuringPaymentsGetMuhlafimByDate, recuringPaymentsIsBankNumberValid, recuringPaymentsChangeStatusForHistoryRecurringToIrrevocable }
}