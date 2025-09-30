import type {
  RecuringPaymentsGetRecurringPaymentHistory200,
  RecuringPaymentsGetRecurringPaymentHistory400,
  RecuringPaymentsGetRecurringPaymentHistory401,
  RecuringPaymentsGetRecurringPaymentHistoryQueryRequest,
  RecuringPaymentsGetRecurringPaymentHistoryQueryResponse,
} from '../../types/RecuringPaymentsGetRecurringPaymentHistory.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { errorInfoSchema } from '../error-info-schema.ts'
import { extGetRecurringPaymentHistoryRspSchema } from '../ext-get-recurring-payment-history-rsp-schema.ts'
import { recurringPaymentHistoryQuerySchema } from '../recurring-payment-history-query-schema.ts'

/**
 * @description successful request
 */
export const recuringPaymentsGetRecurringPaymentHistory200Schema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").ExtGetRecurringPaymentHistoryRsp>, "passthrough"> = extGetRecurringPaymentHistoryRspSchema.describe(
  'List of Recurring Payments',
) as unknown as ToZod<RecuringPaymentsGetRecurringPaymentHistory200>

/**
 * @description Invalid request , see \'Description\' in response for more information
 */
export const recuringPaymentsGetRecurringPaymentHistory400Schema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").ErrorInfo>, "passthrough"> = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<RecuringPaymentsGetRecurringPaymentHistory400>

/**
 * @description Invalid username
 */
export const recuringPaymentsGetRecurringPaymentHistory401Schema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").ErrorInfo>, "passthrough"> = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<RecuringPaymentsGetRecurringPaymentHistory401>

/**
 * @description body Params
 */
export const recuringPaymentsGetRecurringPaymentHistoryQueryRequestSchema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodNullable<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").RecurringPaymentHistoryQuery>, "passthrough">> =
  recurringPaymentHistoryQuerySchema.nullable() as unknown as ToZod<RecuringPaymentsGetRecurringPaymentHistoryQueryRequest>

export const recuringPaymentsGetRecurringPaymentHistoryQueryResponseSchema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").ExtGetRecurringPaymentHistoryRsp>, "passthrough"> =
  recuringPaymentsGetRecurringPaymentHistory200Schema as unknown as ToZod<RecuringPaymentsGetRecurringPaymentHistoryQueryResponse>