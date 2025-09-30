export const documentType: { readonly Error: "Error"; readonly TaxInvoiceAndReceipt: "TaxInvoiceAndReceipt"; readonly TaxInvoiceAndReceiptRefund: "TaxInvoiceAndReceiptRefund"; readonly Receipt: "Receipt"; readonly ReceiptRefund: "ReceiptRefund"; readonly Quote: "Quote"; readonly Order: "Order"; readonly SiteCustomerOrder: "SiteCustomerOrder"; readonly SiteCustomerOrderRefund: "SiteCustomerOrderRefund"; readonly DeliveryNote: "DeliveryNote"; readonly DeliveryNoteRefund: "DeliveryNoteRefund"; readonly ProformaInvoice: "ProformaInvoice"; readonly DemandForPayment: "DemandForPayment"; readonly DemandForPaymentRefund: "DemandForPaymentRefund"; readonly TaxInvoice: "TaxInvoice"; readonly TaxInvoiceRefund: "TaxInvoiceRefund"; readonly ReceiptForTaxInvoice: "ReceiptForTaxInvoice"; readonly DonationReceipt: "DonationReceipt"; readonly DonationReceiptRefund: "DonationReceiptRefund"; readonly ReceiptForTaxInvoiceRefund: "ReceiptForTaxInvoiceRefund"; } = {
  Error: 'Error',
  TaxInvoiceAndReceipt: 'TaxInvoiceAndReceipt',
  TaxInvoiceAndReceiptRefund: 'TaxInvoiceAndReceiptRefund',
  Receipt: 'Receipt',
  ReceiptRefund: 'ReceiptRefund',
  Quote: 'Quote',
  Order: 'Order',
  SiteCustomerOrder: 'SiteCustomerOrder',
  SiteCustomerOrderRefund: 'SiteCustomerOrderRefund',
  DeliveryNote: 'DeliveryNote',
  DeliveryNoteRefund: 'DeliveryNoteRefund',
  ProformaInvoice: 'ProformaInvoice',
  DemandForPayment: 'DemandForPayment',
  DemandForPaymentRefund: 'DemandForPaymentRefund',
  TaxInvoice: 'TaxInvoice',
  TaxInvoiceRefund: 'TaxInvoiceRefund',
  ReceiptForTaxInvoice: 'ReceiptForTaxInvoice',
  DonationReceipt: 'DonationReceipt',
  DonationReceiptRefund: 'DonationReceiptRefund',
  ReceiptForTaxInvoiceRefund: 'ReceiptForTaxInvoiceRefund',
} as const

export type DocumentTypeEnum = (typeof documentType)[keyof typeof documentType]

export type DocumentType = DocumentTypeEnum