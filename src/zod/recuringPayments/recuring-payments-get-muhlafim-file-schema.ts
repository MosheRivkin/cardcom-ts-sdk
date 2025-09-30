import type {
  RecuringPaymentsGetMuhlafimFile200,
  RecuringPaymentsGetMuhlafimFileMutationRequest,
  RecuringPaymentsGetMuhlafimFileMutationResponse,
} from '../../types/RecuringPaymentsGetMuhlafimFile.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { dtoResponseOfMuhlafimDataSchema } from '../dto-response-of-muhlafim-data-schema.ts'
import { getMuhlafimRequestSchema } from '../get-muhlafim-request-schema.ts'

/**
 * @description successful request
 */
export const recuringPaymentsGetMuhlafimFile200Schema: import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").DtoResponseOfMuhlafimData>> = dtoResponseOfMuhlafimDataSchema as unknown as ToZod<RecuringPaymentsGetMuhlafimFile200>

export const recuringPaymentsGetMuhlafimFileMutationRequestSchema: import("zod").ZodNullable<import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").GetMuhlafimRequest>>> =
  getMuhlafimRequestSchema.nullable() as unknown as ToZod<RecuringPaymentsGetMuhlafimFileMutationRequest>

export const recuringPaymentsGetMuhlafimFileMutationResponseSchema: import("zod").ZodObject<import("@kubb/plugin-zod/utils").ZodShape<import("src/index").DtoResponseOfMuhlafimData>> =
  recuringPaymentsGetMuhlafimFile200Schema as unknown as ToZod<RecuringPaymentsGetMuhlafimFileMutationResponse>