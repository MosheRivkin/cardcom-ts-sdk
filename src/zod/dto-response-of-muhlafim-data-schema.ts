import type { DtoResponseOfMuhlafimData } from '../types/DtoResponseOfMuhlafimData.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { muhlafimDataSchema } from './muhlafim-data-schema.ts'
import { z } from 'zod'

export const dtoResponseOfMuhlafimDataSchema: z.ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<DtoResponseOfMuhlafimData>, "passthrough"> = z.object({
  Code: z.int().optional(),
  Description: z.string().nullable().nullish(),
  get Content() {
    return muhlafimDataSchema.nullable().nullish()
  },
}) as unknown as ToZod<DtoResponseOfMuhlafimData>