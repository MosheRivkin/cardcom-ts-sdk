import type {
  RecuringPaymentsGetRecurringPayment200,
  RecuringPaymentsGetRecurringPayment400,
  RecuringPaymentsGetRecurringPayment401,
  RecuringPaymentsGetRecurringPaymentQueryRequest,
  RecuringPaymentsGetRecurringPaymentQueryResponse,
} from '../../types/RecuringPaymentsGetRecurringPayment.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { errorInfoSchema } from '../error-info-schema.ts'
import { extGetRecurringPaymentRspSchema } from '../ext-get-recurring-payment-rsp-schema.ts'
import { recurringPaymentQuerySchema } from '../recurring-payment-query-schema.ts'

/**
 * @description successful request
 */
export const recuringPaymentsGetRecurringPayment200Schema: import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").ExtGetRecurringPaymentRsp>> = extGetRecurringPaymentRspSchema.describe(
  'List of Recurring Payments',
) as unknown as ToZod<RecuringPaymentsGetRecurringPayment200>

/**
 * @description Invalid request , see \'Description\' in response for more information
 */
export const recuringPaymentsGetRecurringPayment400Schema: import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").ErrorInfo>> = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<RecuringPaymentsGetRecurringPayment400>

/**
 * @description Invalid username
 */
export const recuringPaymentsGetRecurringPayment401Schema: import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").ErrorInfo>> = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<RecuringPaymentsGetRecurringPayment401>

/**
 * @description body Params
 */
export const recuringPaymentsGetRecurringPaymentQueryRequestSchema: import("zod").ZodNullable<import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").RecurringPaymentQuery>>> =
  recurringPaymentQuerySchema.nullable() as unknown as ToZod<RecuringPaymentsGetRecurringPaymentQueryRequest>

export const recuringPaymentsGetRecurringPaymentQueryResponseSchema: import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").ExtGetRecurringPaymentRsp>> =
  recuringPaymentsGetRecurringPayment200Schema as unknown as ToZod<RecuringPaymentsGetRecurringPaymentQueryResponse>