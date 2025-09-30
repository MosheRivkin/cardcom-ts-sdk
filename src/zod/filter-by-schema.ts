import type { FilterBy } from '../types/FilterBy.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { z } from 'zod'

export const filterBySchema: z.ZodType<import("src/index").FilterByEnum, unknown, z.core.$ZodTypeInternals<import("src/index").FilterByEnum, unknown>> = z.enum(['CreateDate', 'LastUpdateDate']) as unknown as ToZod<FilterBy>