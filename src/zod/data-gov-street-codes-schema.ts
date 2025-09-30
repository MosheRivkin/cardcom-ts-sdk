import type { DataGovStreetCodes } from '../types/DataGovStreetCodes.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { z } from 'zod'

export const dataGovStreetCodesSchema: z.ZodObject<import("@kubb/plugin-zod/utils").ZodShape<DataGovStreetCodes>> = z.object({
  Id: z.int().optional(),
  CodeStreet: z.int().nullable().nullish(),
  Street: z.string().nullable().nullish(),
  CityCode: z.int().nullable().nullish(),
  StreetEng: z.string().nullable().nullish(),
}) as unknown as ToZod<DataGovStreetCodes>