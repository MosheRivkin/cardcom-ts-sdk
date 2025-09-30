import type { MCCDBsMAIN } from '../types/MCCDBsMAIN.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { z } from 'zod'

export const mccdBsMainSchema: z.ZodObject<import("@kubb/plugin-zod/utils").ZodShape<MCCDBsMAIN>> = z.object({
  MCC_Code_MainClassification: z.int().optional(),
  MCC_Description_MainClassification: z.string().nullable().nullish(),
}) as unknown as ToZod<MCCDBsMAIN>