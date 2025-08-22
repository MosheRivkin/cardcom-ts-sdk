import type { DocumentToCreate } from "../types/DocumentToCreate.ts";
import type { ToZod } from "@kubb/plugin-zod/utils/v4";
import { z } from "zod";

export const documentToCreateSchema = z.enum(["Auto", "TaxInvoiceAndReceipt", "TaxInvoiceAndReceiptRefund", "Receipt", "ReceiptRefund", "Quote", "Order", "OrderConfirmation", "OrderConfirmationRefund", "DeliveryNote", "DeliveryNoteRefund", "ProformaInvoice", "DemandForPayment", "DemandForPaymentRefund", "ProformaDealInvoice", "ProformaDealInvoiceRefund", "TaxInvoice", "ProformaInvoiceRefund", "TaxInvoiceRefund", "ReceiptForTaxInvoice", "DonationReceipt", "DonationReceiptRefund", "ReceiptForTaxInvoiceRefund"]) as unknown as ToZod<DocumentToCreate>