import type { ErrorInfo } from '../types/ErrorInfo.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { z } from 'zod'

/**
 * @description error information for non http status 200
 */
export const errorInfoSchema = z
  .object({
    ResponseCode: z.int().describe('if equel zero then success , else , a develper error see Description for more info ').optional(),
    Description: z.string().describe('Description of the ResponseCode').nullable().nullish(),
  })
  .describe('error information for non http status 200') as unknown as ToZod<ErrorInfo>