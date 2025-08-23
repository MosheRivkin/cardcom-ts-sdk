import type {
  LowProfileGetLpResult200,
  LowProfileGetLpResult400,
  LowProfileGetLpResult401,
  LowProfileGetLpResultMutationRequest,
  LowProfileGetLpResultMutationResponse,
} from '../../types/LowProfileGetLpResult.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { errorInfoSchema } from '../error-info-schema.ts'
import { getLowProfileResultSchema } from '../get-low-profile-result-schema.ts'
import { lowProfileResultSchema } from '../low-profile-result-schema.ts'

/**
 * @description successful request
 */
export const lowProfileGetLpResult200Schema = lowProfileResultSchema.describe(
  'Result of the low profile page deal',
) as unknown as ToZod<LowProfileGetLpResult200>

/**
 * @description Invalid request , see \'Description\' in response for more information
 */
export const lowProfileGetLpResult400Schema = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<LowProfileGetLpResult400>

/**
 * @description Invalid username
 */
export const lowProfileGetLpResult401Schema = errorInfoSchema.describe(
  'error information for non http status 200',
) as unknown as ToZod<LowProfileGetLpResult401>

export const lowProfileGetLpResultMutationRequestSchema = getLowProfileResultSchema.nullable() as unknown as ToZod<LowProfileGetLpResultMutationRequest>

export const lowProfileGetLpResultMutationResponseSchema = lowProfileGetLpResult200Schema as unknown as ToZod<LowProfileGetLpResultMutationResponse>