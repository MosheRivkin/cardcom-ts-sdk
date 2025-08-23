import type { MuhlafimData } from '../types/MuhlafimData.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { dataSchema } from './data-schema.ts'
import { z } from 'zod'

export const muhlafimDataSchema = z.object({
  get Data() {
    return z.array(dataSchema).nullable().nullish()
  },
}) as unknown as ToZod<MuhlafimData>