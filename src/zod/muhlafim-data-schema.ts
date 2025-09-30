import type { MuhlafimData } from '../types/MuhlafimData.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { dataSchema } from './data-schema.ts'
import { z } from 'zod'

export const muhlafimDataSchema: z.ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<MuhlafimData>, "passthrough"> = z.object({
  get Data() {
    return z.array(dataSchema).nullable().nullish()
  },
}) as unknown as ToZod<MuhlafimData>