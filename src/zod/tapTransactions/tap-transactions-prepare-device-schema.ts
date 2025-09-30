import type {
  TapTransactionsPrepareDevice200,
  TapTransactionsPrepareDevice400,
  TapTransactionsPrepareDevice401,
  TapTransactionsPrepareDeviceMutationRequest,
  TapTransactionsPrepareDeviceMutationResponse,
} from '../../types/TapTransactionsPrepareDevice.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { errorInfoSchema } from '../error-info-schema.ts'
import { prepareDeviceRequestSchema } from '../prepare-device-request-schema.ts'
import { prepareDeviceResponseSchema } from '../prepare-device-response-schema.ts'

/**
 * @description Successful request
 */
export const tapTransactionsPrepareDevice200Schema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").PrepareDeviceResponse>, "passthrough"> = prepareDeviceResponseSchema as unknown as ToZod<TapTransactionsPrepareDevice200>

/**
 * @description Invalid request , see \'Description\' in response for more information
 */
export const tapTransactionsPrepareDevice400Schema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").ErrorInfo>, "passthrough"> = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<TapTransactionsPrepareDevice400>

/**
 * @description Invalid username
 */
export const tapTransactionsPrepareDevice401Schema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").ErrorInfo>, "passthrough"> = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<TapTransactionsPrepareDevice401>

export const tapTransactionsPrepareDeviceMutationRequestSchema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodNullable<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").PrepareDeviceRequest>, "passthrough">> =
  prepareDeviceRequestSchema.nullable() as unknown as ToZod<TapTransactionsPrepareDeviceMutationRequest>

export const tapTransactionsPrepareDeviceMutationResponseSchema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").PrepareDeviceResponse>, "passthrough"> =
  tapTransactionsPrepareDevice200Schema as unknown as ToZod<TapTransactionsPrepareDeviceMutationResponse>