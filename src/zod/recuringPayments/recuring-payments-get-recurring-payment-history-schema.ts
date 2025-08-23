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
export const recuringPaymentsGetRecurringPaymentHistory200Schema = extGetRecurringPaymentHistoryRspSchema.describe(
  'List of Recurring Payments',
) as unknown as ToZod<RecuringPaymentsGetRecurringPaymentHistory200>

/**
 * @description Invalid request , see \'Description\' in response for more information
 */
export const recuringPaymentsGetRecurringPaymentHistory400Schema = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<RecuringPaymentsGetRecurringPaymentHistory400>

/**
 * @description Invalid username
 */
export const recuringPaymentsGetRecurringPaymentHistory401Schema = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<RecuringPaymentsGetRecurringPaymentHistory401>

/**
 * @description body Params
 */
export const recuringPaymentsGetRecurringPaymentHistoryQueryRequestSchema =
  recurringPaymentHistoryQuerySchema.nullable() as unknown as ToZod<RecuringPaymentsGetRecurringPaymentHistoryQueryRequest>

export const recuringPaymentsGetRecurringPaymentHistoryQueryResponseSchema =
  recuringPaymentsGetRecurringPaymentHistory200Schema as unknown as ToZod<RecuringPaymentsGetRecurringPaymentHistoryQueryResponse>