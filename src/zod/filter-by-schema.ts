import type { FilterBy } from '../types/FilterBy.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { z } from 'zod'

export const filterBySchema: z.ZodType<import("/home/m/dev/git/cardcom-ts-sdk/src/index").FilterByEnum, unknown, z.core.$ZodTypeInternals<import("/home/m/dev/git/cardcom-ts-sdk/src/index").FilterByEnum, unknown>> = z.enum(['CreateDate', 'LastUpdateDate']) as unknown as ToZod<FilterBy>