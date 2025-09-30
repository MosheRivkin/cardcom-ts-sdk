export const documentToCreate: { readonly Auto: "Auto"; readonly TaxInvoiceAndReceipt: "TaxInvoiceAndReceipt"; readonly TaxInvoiceAndReceiptRefund: "TaxInvoiceAndReceiptRefund"; readonly Receipt: "Receipt"; readonly ReceiptRefund: "ReceiptRefund"; readonly Quote: "Quote"; readonly Order: "Order"; readonly OrderConfirmation: "OrderConfirmation"; readonly OrderConfirmationRefund: "OrderConfirmationRefund"; readonly DeliveryNote: "DeliveryNote"; readonly DeliveryNoteRefund: "DeliveryNoteRefund"; readonly ProformaInvoice: "ProformaInvoice"; readonly DemandForPayment: "DemandForPayment"; readonly DemandForPaymentRefund: "DemandForPaymentRefund"; readonly ProformaDealInvoice: "ProformaDealInvoice"; readonly ProformaDealInvoiceRefund: "ProformaDealInvoiceRefund"; readonly TaxInvoice: "TaxInvoice"; readonly ProformaInvoiceRefund: "ProformaInvoiceRefund"; readonly TaxInvoiceRefund: "TaxInvoiceRefund"; readonly ReceiptForTaxInvoice: "ReceiptForTaxInvoice"; readonly DonationReceipt: "DonationReceipt"; readonly DonationReceiptRefund: "DonationReceiptRefund"; readonly ReceiptForTaxInvoiceRefund: "ReceiptForTaxInvoiceRefund"; } = {
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