import type { ListTransactionStatus } from '../types/ListTransactionStatus.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { z } from 'zod'

export const listTransactionStatusSchema: z.ZodType<import("/home/m/dev/git/cardcom-ts-sdk/src/index").ListTransactionStatusEnum, unknown, z.core.$ZodTypeInternals<import("/home/m/dev/git/cardcom-ts-sdk/src/index").ListTransactionStatusEnum, unknown>> = z.enum(['Success', 'All', 'Failure']) as unknown as ToZod<ListTransactionStatus>