/* eslint-disable no-alert, no-console */

import { documentsCancelDoc } from './documents-cancel-doc.ts'
import { documentsCreateDocumentUrl } from './documents-create-document-url.ts'
import { documentsCreateDocument } from './documents-create-document.ts'
import { documentsCreateTaxInvoice } from './documents-create-tax-invoice.ts'
import { documentsCrossDocument } from './documents-cross-document.ts'
import { documentsGetReport } from './documents-get-report.ts'
import { documentsSendAllDocumentsToEmail } from './documents-send-all-documents-to-email.ts'

export function documents() {
  return {
    documentsCreateDocument,
    documentsCancelDoc,
    documentsSendAllDocumentsToEmail,
    documentsGetReport,
    documentsCrossDocument,
    documentsCreateTaxInvoice,
    documentsCreateDocumentUrl,
  }
}