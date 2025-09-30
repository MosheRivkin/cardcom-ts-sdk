import type { CountriesISO } from '../types/CountriesISO.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { z } from 'zod'

export const countriesIsoSchema: z.ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<CountriesISO>, "passthrough"> = z.object({
  CountryCode: z.string().nullable().nullish(),
  Name: z.string().nullable().nullish(),
  NameHeb: z.string().nullable().nullish(),
  Alpha_2: z.string().nullable().nullish(),
  Alpha_3: z.string().nullable().nullish(),
  Iso_3166_2: z.string().nullable().nullish(),
  Region: z.string().nullable().nullish(),
  SubRegion: z.string().nullable().nullish(),
  IntermediateRegion: z.string().nullable().nullish(),
  RegionCode: z.string().nullable().nullish(),
  SubRegionCode: z.string().nullable().nullish(),
  IntermediateRegionCode: z.string().nullable().nullish(),
  BDI_CountryCode: z.string().nullable().nullish(),
}) as unknown as ToZod<CountriesISO>