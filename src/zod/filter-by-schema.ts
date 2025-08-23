import type { FilterBy } from '../types/FilterBy.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { z } from 'zod'

export const filterBySchema = z.enum(['CreateDate', 'LastUpdateDate']) as unknown as ToZod<FilterBy>