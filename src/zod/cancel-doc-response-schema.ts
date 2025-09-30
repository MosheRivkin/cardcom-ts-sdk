import type { CancelDocResponse } from '../types/CancelDocResponse.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { z } from 'zod'

export const cancelDocResponseSchema: z.ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<CancelDocResponse>, "passthrough"> = z.object({
  ResponseCode: z.int().describe('if equel zero then success , else , a develper error see Description for more info').optional(),
  Description: z.string().max(250).describe('Description of the ResponseCode').nullable().nullish(),
  NewDocumentNumber: z.int().describe('New document number').nullable().nullish(),
  NewDocumentType: z.int().describe('New document type').nullable().nullish(),
  AccountID: z.int().describe('Account ID').nullable().nullish(),
}) as unknown as ToZod<CancelDocResponse>