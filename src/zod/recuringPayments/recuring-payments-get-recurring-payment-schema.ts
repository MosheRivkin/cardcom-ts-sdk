import type {
  RecuringPaymentsGetRecurringPayment200,
  RecuringPaymentsGetRecurringPayment400,
  RecuringPaymentsGetRecurringPayment401,
  RecuringPaymentsGetRecurringPaymentQueryRequest,
  RecuringPaymentsGetRecurringPaymentQueryResponse,
} from '../../types/RecuringPaymentsGetRecurringPayment.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { errorInfoSchema } from '../error-info-schema.ts'
import { extGetRecurringPaymentRspSchema } from '../ext-get-recurring-payment-rsp-schema.ts'
import { recurringPaymentQuerySchema } from '../recurring-payment-query-schema.ts'

/**
 * @description successful request
 */
export const recuringPaymentsGetRecurringPayment200Schema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").ExtGetRecurringPaymentRsp>, "passthrough"> = extGetRecurringPaymentRspSchema.describe(
  'List of Recurring Payments',
) as unknown as ToZod<RecuringPaymentsGetRecurringPayment200>

/**
 * @description Invalid request , see \'Description\' in response for more information
 */
export const recuringPaymentsGetRecurringPayment400Schema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").ErrorInfo>, "passthrough"> = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<RecuringPaymentsGetRecurringPayment400>

/**
 * @description Invalid username
 */
export const recuringPaymentsGetRecurringPayment401Schema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").ErrorInfo>, "passthrough"> = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<RecuringPaymentsGetRecurringPayment401>

/**
 * @description body Params
 */
export const recuringPaymentsGetRecurringPaymentQueryRequestSchema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodNullable<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").RecurringPaymentQuery>, "passthrough">> =
  recurringPaymentQuerySchema.nullable() as unknown as ToZod<RecuringPaymentsGetRecurringPaymentQueryRequest>

export const recuringPaymentsGetRecurringPaymentQueryResponseSchema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").ExtGetRecurringPaymentRsp>, "passthrough"> =
  recuringPaymentsGetRecurringPayment200Schema as unknown as ToZod<RecuringPaymentsGetRecurringPaymentQueryResponse>