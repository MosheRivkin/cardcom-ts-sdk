import type { DocumentType } from '../types/DocumentType.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { z } from 'zod'

export const documentTypeSchema = z.enum([
  'Error',
  'TaxInvoiceAndReceipt',
  'TaxInvoiceAndReceiptRefund',
  'Receipt',
  'ReceiptRefund',
  'Quote',
  'Order',
  'SiteCustomerOrder',
  'SiteCustomerOrderRefund',
  'DeliveryNote',
  'DeliveryNoteRefund',
  'ProformaInvoice',
  'DemandForPayment',
  'DemandForPaymentRefund',
  'TaxInvoice',
  'TaxInvoiceRefund',
  'ReceiptForTaxInvoice',
  'DonationReceipt',
  'DonationReceiptRefund',
  'ReceiptForTaxInvoiceRefund',
]) as unknown as ToZod<DocumentType>