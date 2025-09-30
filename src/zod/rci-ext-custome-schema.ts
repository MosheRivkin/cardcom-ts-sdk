import type { RciExtCustome } from '../types/RciExtCustome.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { z } from 'zod'

export const rciExtCustomeSchema: z.ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<RciExtCustome>, "passthrough"> = z.object({
  TransactionID: z.int().optional(),
  TranDate: z.date().optional(),
  Description: z.string().nullable().nullish(),
  asmacta: z.string().nullable().nullish(),
  Sum: z.number().optional(),
}) as unknown as ToZod<RciExtCustome>