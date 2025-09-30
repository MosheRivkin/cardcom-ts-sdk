import type {
  RecuringPaymentsIsBankNumberValid200,
  RecuringPaymentsIsBankNumberValid400,
  RecuringPaymentsIsBankNumberValid401,
  RecuringPaymentsIsBankNumberValidQueryRequest,
  RecuringPaymentsIsBankNumberValidQueryResponse,
} from '../../types/RecuringPaymentsIsBankNumberValid.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { errorInfoSchema } from '../error-info-schema.ts'
import { extIsBankNumberValidRspSchema } from '../ext-is-bank-number-valid-rsp-schema.ts'
import { isBankNumberValidReqSchema } from '../is-bank-number-valid-req-schema.ts'

/**
 * @description successful request
 */
export const recuringPaymentsIsBankNumberValid200Schema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").ExtIsBankNumberValidRsp>, "passthrough"> = extIsBankNumberValidRspSchema.describe(
  'Is Bank valid',
) as unknown as ToZod<RecuringPaymentsIsBankNumberValid200>

/**
 * @description Invalid request , see \'Description\' in response for more information
 */
export const recuringPaymentsIsBankNumberValid400Schema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").ErrorInfo>, "passthrough"> = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<RecuringPaymentsIsBankNumberValid400>

/**
 * @description Invalid username
 */
export const recuringPaymentsIsBankNumberValid401Schema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").ErrorInfo>, "passthrough"> = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<RecuringPaymentsIsBankNumberValid401>

/**
 * @description body Params
 */
export const recuringPaymentsIsBankNumberValidQueryRequestSchema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodNullable<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").IsBankNumberValidReq>, "passthrough">> =
  isBankNumberValidReqSchema.nullable() as unknown as ToZod<RecuringPaymentsIsBankNumberValidQueryRequest>

export const recuringPaymentsIsBankNumberValidQueryResponseSchema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").ExtIsBankNumberValidRsp>, "passthrough"> =
  recuringPaymentsIsBankNumberValid200Schema as unknown as ToZod<RecuringPaymentsIsBankNumberValidQueryResponse>