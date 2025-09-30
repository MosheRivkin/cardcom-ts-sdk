import type { ReportCodes } from '../types/ReportCodes.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { z } from 'zod'

export const reportCodesSchema: z.ZodType<import("src/index").ReportCodesEnum, unknown, z.core.$ZodTypeInternals<import("src/index").ReportCodesEnum, unknown>> = z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5)]) as unknown as ToZod<ReportCodes>