import type {
  RecuringPaymentsChangeStatusForHistoryRecurringToIrrevocable200,
  RecuringPaymentsChangeStatusForHistoryRecurringToIrrevocable400,
  RecuringPaymentsChangeStatusForHistoryRecurringToIrrevocable401,
  RecuringPaymentsChangeStatusForHistoryRecurringToIrrevocableMutationRequest,
  RecuringPaymentsChangeStatusForHistoryRecurringToIrrevocableMutationResponse,
} from '../../types/RecuringPaymentsChangeStatusForHistoryRecurringToIrrevocable.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { changeStatusForHistoryRecurringToIrrevocableReqestSchema } from '../change-status-for-history-recurring-to-irrevocable-reqest-schema.ts'
import { errorInfoSchema } from '../error-info-schema.ts'
import { extIsBankNumberValidRspSchema } from '../ext-is-bank-number-valid-rsp-schema.ts'

/**
 * @description successful request
 */
export const recuringPaymentsChangeStatusForHistoryRecurringToIrrevocable200Schema: import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").ExtIsBankNumberValidRsp>> = extIsBankNumberValidRspSchema.describe(
  'Is Bank valid',
) as unknown as ToZod<RecuringPaymentsChangeStatusForHistoryRecurringToIrrevocable200>

/**
 * @description Invalid request , see \'Description\' in response for more information
 */
export const recuringPaymentsChangeStatusForHistoryRecurringToIrrevocable400Schema: import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").ErrorInfo>> = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<RecuringPaymentsChangeStatusForHistoryRecurringToIrrevocable400>

/**
 * @description Invalid username or password
 */
export const recuringPaymentsChangeStatusForHistoryRecurringToIrrevocable401Schema: import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").ErrorInfo>> = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<RecuringPaymentsChangeStatusForHistoryRecurringToIrrevocable401>

export const recuringPaymentsChangeStatusForHistoryRecurringToIrrevocableMutationRequestSchema: import("zod").ZodNullable<import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").ChangeStatusForHistoryRecurringToIrrevocableReqest>>> =
  changeStatusForHistoryRecurringToIrrevocableReqestSchema.nullable() as unknown as ToZod<RecuringPaymentsChangeStatusForHistoryRecurringToIrrevocableMutationRequest>

export const recuringPaymentsChangeStatusForHistoryRecurringToIrrevocableMutationResponseSchema: import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").ExtIsBankNumberValidRsp>> =
  recuringPaymentsChangeStatusForHistoryRecurringToIrrevocable200Schema as unknown as ToZod<RecuringPaymentsChangeStatusForHistoryRecurringToIrrevocableMutationResponse>