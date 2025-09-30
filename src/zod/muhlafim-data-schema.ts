import type { MuhlafimData } from '../types/MuhlafimData.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { dataSchema } from './data-schema.ts'
import { z } from 'zod'

export const muhlafimDataSchema: z.ZodObject<import("@kubb/plugin-zod/utils").ZodShape<MuhlafimData>> = z.object({
  get Data() {
    return z.array(dataSchema).nullable().nullish()
  },
}) as unknown as ToZod<MuhlafimData>