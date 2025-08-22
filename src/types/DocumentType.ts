export const documentType = {
    "Error": "Error",
    "TaxInvoiceAndReceipt": "TaxInvoiceAndReceipt",
    "TaxInvoiceAndReceiptRefund": "TaxInvoiceAndReceiptRefund",
    "Receipt": "Receipt",
    "ReceiptRefund": "ReceiptRefund",
    "Quote": "Quote",
    "Order": "Order",
    "SiteCustomerOrder": "SiteCustomerOrder",
    "SiteCustomerOrderRefund": "SiteCustomerOrderRefund",
    "DeliveryNote": "DeliveryNote",
    "DeliveryNoteRefund": "DeliveryNoteRefund",
    "ProformaInvoice": "ProformaInvoice",
    "DemandForPayment": "DemandForPayment",
    "DemandForPaymentRefund": "DemandForPaymentRefund",
    "TaxInvoice": "TaxInvoice",
    "TaxInvoiceRefund": "TaxInvoiceRefund",
    "ReceiptForTaxInvoice": "ReceiptForTaxInvoice",
    "DonationReceipt": "DonationReceipt",
    "DonationReceiptRefund": "DonationReceiptRefund",
    "ReceiptForTaxInvoiceRefund": "ReceiptForTaxInvoiceRefund"
} as const;

export type DocumentTypeEnum = (typeof documentType)[keyof typeof documentType];

export type DocumentType = DocumentTypeEnum;