import type { ListTransactionStatus } from '../types/ListTransactionStatus.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { z } from 'zod'

export const listTransactionStatusSchema: z.ZodType<import("src/index").ListTransactionStatusEnum, unknown, z.core.$ZodTypeInternals<import("src/index").ListTransactionStatusEnum, unknown>> = z.enum(['Success', 'All', 'Failure']) as unknown as ToZod<ListTransactionStatus>