import type { SendAllDocumentsToEmailResponse } from '../types/SendAllDocumentsToEmailResponse.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { z } from 'zod'

/**
 * @description send pdf documents by email
 */
export const sendAllDocumentsToEmailResponseSchema = z
  .object({
    ResponseCode: z.int().describe('if equel zero then success , else , a develper error see Description for more info ').optional(),
    Description: z.string().max(250).describe('Description of the ResponseCode').nullable().nullish(),
  })
  .describe('send pdf documents by email') as unknown as ToZod<SendAllDocumentsToEmailResponse>