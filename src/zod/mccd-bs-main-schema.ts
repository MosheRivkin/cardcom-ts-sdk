import type { MCCDBsMAIN } from '../types/MCCDBsMAIN.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { z } from 'zod'

export const mccdBsMainSchema: z.ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<MCCDBsMAIN>, "passthrough"> = z.object({
  MCC_Code_MainClassification: z.int().optional(),
  MCC_Description_MainClassification: z.string().nullable().nullish(),
}) as unknown as ToZod<MCCDBsMAIN>