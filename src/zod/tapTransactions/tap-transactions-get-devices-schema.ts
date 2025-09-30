import type {
  TapTransactionsGetDevices200,
  TapTransactionsGetDevices400,
  TapTransactionsGetDevices401,
  TapTransactionsGetDevicesMutationRequest,
  TapTransactionsGetDevicesMutationResponse,
} from '../../types/TapTransactionsGetDevices.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { errorInfoSchema } from '../error-info-schema.ts'
import { getDevicesRequestSchema } from '../get-devices-request-schema.ts'
import { processTransactionResponseSchema } from '../process-transaction-response-schema.ts'

/**
 * @description Successful request
 */
export const tapTransactionsGetDevices200Schema: import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").ProcessTransactionResponse>> = processTransactionResponseSchema as unknown as ToZod<TapTransactionsGetDevices200>

/**
 * @description Invalid request , see \'Description\' in response for more information
 */
export const tapTransactionsGetDevices400Schema: import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").ErrorInfo>> = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<TapTransactionsGetDevices400>

/**
 * @description Invalid username
 */
export const tapTransactionsGetDevices401Schema: import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").ErrorInfo>> = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<TapTransactionsGetDevices401>

export const tapTransactionsGetDevicesMutationRequestSchema: import("zod").ZodNullable<import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").GetDevicesRequest>>> = getDevicesRequestSchema.nullable() as unknown as ToZod<TapTransactionsGetDevicesMutationRequest>

export const tapTransactionsGetDevicesMutationResponseSchema: import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").ProcessTransactionResponse>> = tapTransactionsGetDevices200Schema as unknown as ToZod<TapTransactionsGetDevicesMutationResponse>