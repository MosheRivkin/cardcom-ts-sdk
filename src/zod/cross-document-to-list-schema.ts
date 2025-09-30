import type { CrossDocumentToList } from '../types/CrossDocumentToList.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { z } from 'zod'

/**
 * @description sum to corss , null for full document price
 */
export const crossDocumentToListSchema: z.ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<CrossDocumentToList>, "passthrough"> = z
  .object({
    DocNumber: z.int().optional(),
    DocType: z.int().optional(),
    PartialSumToCorss: z.number().describe('sum to corss , null for full document price').nullable().nullish(),
  })
  .describe('sum to corss , null for full document price') as unknown as ToZod<CrossDocumentToList>