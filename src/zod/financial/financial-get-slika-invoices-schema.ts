import type {
  FinancialGetSlikaInvoices200,
  FinancialGetSlikaInvoices400,
  FinancialGetSlikaInvoices401,
  FinancialGetSlikaInvoicesMutationRequest,
  FinancialGetSlikaInvoicesMutationResponse,
} from '../../types/FinancialGetSlikaInvoices.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { errorInfoSchema } from '../error-info-schema.ts'
import { slikaInvoicesRequestSchema } from '../slika-invoices-request-schema.ts'
import { slikaInvoicesResponseSchema } from '../slika-invoices-response-schema.ts'

/**
 * @description successful request
 */
export const financialGetSlikaInvoices200Schema = slikaInvoicesResponseSchema as unknown as ToZod<FinancialGetSlikaInvoices200>

/**
 * @description Invalid request , see \'Description\' in response for more information
 */
export const financialGetSlikaInvoices400Schema = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<FinancialGetSlikaInvoices400>

/**
 * @description Invalid username
 */
export const financialGetSlikaInvoices401Schema = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<FinancialGetSlikaInvoices401>

export const financialGetSlikaInvoicesMutationRequestSchema =
  slikaInvoicesRequestSchema.nullable() as unknown as ToZod<FinancialGetSlikaInvoicesMutationRequest>

export const financialGetSlikaInvoicesMutationResponseSchema = financialGetSlikaInvoices200Schema as unknown as ToZod<FinancialGetSlikaInvoicesMutationResponse>