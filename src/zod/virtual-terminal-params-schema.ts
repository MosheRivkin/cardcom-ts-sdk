import type { VirtualTerminalParams } from '../types/VirtualTerminalParams.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { z } from 'zod'

export const virtualTerminalParamsSchema: z.ZodObject<import("@kubb/plugin-zod/utils").ZodShape<VirtualTerminalParams>> = z.object({
  IsEnable: z.boolean().default(false).describe('Set to True if the tranzactio will be charge by the merchent and not by the card holder').nullable().nullish(),
  IsOpenSum: z.boolean().default(false).describe('allow the merchent to change the sum of the transaction').nullable().nullish(),
  ChargeOnSwipe: z
    .boolean()
    .default(false)
    .describe('When using Credit Card reader , will the "commit" button be press after the merchent swipe the credit card')
    .nullable()
    .nullish(),
}) as unknown as ToZod<VirtualTerminalParams>