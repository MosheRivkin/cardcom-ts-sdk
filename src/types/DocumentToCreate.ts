export const documentToCreate = {
  Auto: 'Auto',
  TaxInvoiceAndReceipt: 'TaxInvoiceAndReceipt',
  TaxInvoiceAndReceiptRefund: 'TaxInvoiceAndReceiptRefund',
  Receipt: 'Receipt',
  ReceiptRefund: 'ReceiptRefund',
  Quote: 'Quote',
  Order: 'Order',
  OrderConfirmation: 'OrderConfirmation',
  OrderConfirmationRefund: 'OrderConfirmationRefund',
  DeliveryNote: 'DeliveryNote',
  DeliveryNoteRefund: 'DeliveryNoteRefund',
  ProformaInvoice: 'ProformaInvoice',
  DemandForPayment: 'DemandForPayment',
  DemandForPaymentRefund: 'DemandForPaymentRefund',
  ProformaDealInvoice: 'ProformaDealInvoice',
  ProformaDealInvoiceRefund: 'ProformaDealInvoiceRefund',
  TaxInvoice: 'TaxInvoice',
  ProformaInvoiceRefund: 'ProformaInvoiceRefund',
  TaxInvoiceRefund: 'TaxInvoiceRefund',
  ReceiptForTaxInvoice: 'ReceiptForTaxInvoice',
  DonationReceipt: 'DonationReceipt',
  DonationReceiptRefund: 'DonationReceiptRefund',
  ReceiptForTaxInvoiceRefund: 'ReceiptForTaxInvoiceRefund',
} as const

export type DocumentToCreateEnum = (typeof documentToCreate)[keyof typeof documentToCreate]

export type DocumentToCreate = DocumentToCreateEnum