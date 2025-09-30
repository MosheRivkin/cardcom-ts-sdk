import type {
  RecuringPaymentsIsBankNumberValid200,
  RecuringPaymentsIsBankNumberValid400,
  RecuringPaymentsIsBankNumberValid401,
  RecuringPaymentsIsBankNumberValidQueryRequest,
  RecuringPaymentsIsBankNumberValidQueryResponse,
} from '../../types/RecuringPaymentsIsBankNumberValid.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { errorInfoSchema } from '../error-info-schema.ts'
import { extIsBankNumberValidRspSchema } from '../ext-is-bank-number-valid-rsp-schema.ts'
import { isBankNumberValidReqSchema } from '../is-bank-number-valid-req-schema.ts'

/**
 * @description successful request
 */
export const recuringPaymentsIsBankNumberValid200Schema: import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").ExtIsBankNumberValidRsp>> = extIsBankNumberValidRspSchema.describe(
  'Is Bank valid',
) as unknown as ToZod<RecuringPaymentsIsBankNumberValid200>

/**
 * @description Invalid request , see \'Description\' in response for more information
 */
export const recuringPaymentsIsBankNumberValid400Schema: import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").ErrorInfo>> = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<RecuringPaymentsIsBankNumberValid400>

/**
 * @description Invalid username
 */
export const recuringPaymentsIsBankNumberValid401Schema: import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").ErrorInfo>> = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<RecuringPaymentsIsBankNumberValid401>

/**
 * @description body Params
 */
export const recuringPaymentsIsBankNumberValidQueryRequestSchema: import("zod").ZodNullable<import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").IsBankNumberValidReq>>> =
  isBankNumberValidReqSchema.nullable() as unknown as ToZod<RecuringPaymentsIsBankNumberValidQueryRequest>

export const recuringPaymentsIsBankNumberValidQueryResponseSchema: import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").ExtIsBankNumberValidRsp>> =
  recuringPaymentsIsBankNumberValid200Schema as unknown as ToZod<RecuringPaymentsIsBankNumberValidQueryResponse>