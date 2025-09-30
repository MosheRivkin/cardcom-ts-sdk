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
export const financialGetSlikaInvoices200Schema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").SlikaInvoicesResponse>, "passthrough"> = slikaInvoicesResponseSchema as unknown as ToZod<FinancialGetSlikaInvoices200>

/**
 * @description Invalid request , see \'Description\' in response for more information
 */
export const financialGetSlikaInvoices400Schema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").ErrorInfo>, "passthrough"> = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<FinancialGetSlikaInvoices400>

/**
 * @description Invalid username
 */
export const financialGetSlikaInvoices401Schema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").ErrorInfo>, "passthrough"> = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<FinancialGetSlikaInvoices401>

export const financialGetSlikaInvoicesMutationRequestSchema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodNullable<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").SlikaInvoicesRequest>, "passthrough">> =
  slikaInvoicesRequestSchema.nullable() as unknown as ToZod<FinancialGetSlikaInvoicesMutationRequest>

export const financialGetSlikaInvoicesMutationResponseSchema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").SlikaInvoicesResponse>, "passthrough"> = financialGetSlikaInvoices200Schema as unknown as ToZod<FinancialGetSlikaInvoicesMutationResponse>