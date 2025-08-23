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
export const recuringPaymentsGetMuhlafimFile200Schema = dtoResponseOfMuhlafimDataSchema as unknown as ToZod<RecuringPaymentsGetMuhlafimFile200>

export const recuringPaymentsGetMuhlafimFileMutationRequestSchema =
  getMuhlafimRequestSchema.nullable() as unknown as ToZod<RecuringPaymentsGetMuhlafimFileMutationRequest>

export const recuringPaymentsGetMuhlafimFileMutationResponseSchema =
  recuringPaymentsGetMuhlafimFile200Schema as unknown as ToZod<RecuringPaymentsGetMuhlafimFileMutationResponse>