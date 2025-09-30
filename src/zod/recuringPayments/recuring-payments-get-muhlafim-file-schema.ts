import type {
  RecuringPaymentsGetMuhlafimFile200,
  RecuringPaymentsGetMuhlafimFileMutationRequest,
  RecuringPaymentsGetMuhlafimFileMutationResponse,
} from '../../types/RecuringPaymentsGetMuhlafimFile.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { dtoResponseOfMuhlafimDataSchema } from '../dto-response-of-muhlafim-data-schema.ts'
import { getMuhlafimRequestSchema } from '../get-muhlafim-request-schema.ts'

/**
 * @description successful request
 */
export const recuringPaymentsGetMuhlafimFile200Schema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").DtoResponseOfMuhlafimData>, "passthrough"> = dtoResponseOfMuhlafimDataSchema as unknown as ToZod<RecuringPaymentsGetMuhlafimFile200>

export const recuringPaymentsGetMuhlafimFileMutationRequestSchema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodNullable<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").GetMuhlafimRequest>, "passthrough">> =
  getMuhlafimRequestSchema.nullable() as unknown as ToZod<RecuringPaymentsGetMuhlafimFileMutationRequest>

export const recuringPaymentsGetMuhlafimFileMutationResponseSchema: import("/home/m/dev/git/cardcom-ts-sdk/node_modules/zod/index").ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<import("/home/m/dev/git/cardcom-ts-sdk/src/index").DtoResponseOfMuhlafimData>, "passthrough"> =
  recuringPaymentsGetMuhlafimFile200Schema as unknown as ToZod<RecuringPaymentsGetMuhlafimFileMutationResponse>