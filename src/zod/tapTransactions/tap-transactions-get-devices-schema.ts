import type {
  TapTransactionsGetDevices200,
  TapTransactionsGetDevices400,
  TapTransactionsGetDevices401,
  TapTransactionsGetDevicesMutationRequest,
  TapTransactionsGetDevicesMutationResponse,
} from '../../types/TapTransactionsGetDevices.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { errorInfoSchema } from '../error-info-schema.ts'
import { getDevicesRequestSchema } from '../get-devices-request-schema.ts'
import { processTransactionResponseSchema } from '../process-transaction-response-schema.ts'

/**
 * @description Successful request
 */
export const tapTransactionsGetDevices200Schema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").ProcessTransactionResponse>, "passthrough"> = processTransactionResponseSchema as unknown as ToZod<TapTransactionsGetDevices200>

/**
 * @description Invalid request , see \'Description\' in response for more information
 */
export const tapTransactionsGetDevices400Schema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").ErrorInfo>, "passthrough"> = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<TapTransactionsGetDevices400>

/**
 * @description Invalid username
 */
export const tapTransactionsGetDevices401Schema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").ErrorInfo>, "passthrough"> = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<TapTransactionsGetDevices401>

export const tapTransactionsGetDevicesMutationRequestSchema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodNullable<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").GetDevicesRequest>, "passthrough">> = getDevicesRequestSchema.nullable() as unknown as ToZod<TapTransactionsGetDevicesMutationRequest>

export const tapTransactionsGetDevicesMutationResponseSchema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").ProcessTransactionResponse>, "passthrough"> = tapTransactionsGetDevices200Schema as unknown as ToZod<TapTransactionsGetDevicesMutationResponse>