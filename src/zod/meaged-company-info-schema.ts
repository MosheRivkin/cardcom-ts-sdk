import type { MeagedCompanyInfo } from '../types/MeagedCompanyInfo.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { z } from 'zod'

export const meagedCompanyInfoSchema = z.object({
  BusinessRegistrationNumber: z.int(),
  NameLegalCorporation: z.string().min(1).describe('Legal Corporation name'),
  NameLegalCorporationEng: z.string().min(1).describe('Legal Corporation name in english'),
  Email: z.string().min(1),
  AdvertisingSapakName: z.string().describe('Company name that will show to the card hulder (if different from Leagal Name)').nullable().nullish(),
  AdvertisingSapakEngName: z
    .string()
    .describe('Company name that will show to the card hulder (if different from Leagal Name) in english')
    .nullable()
    .nullish(),
  PhoneNumber1: z.string().min(1),
  PhoneNumber2: z.string().nullable().nullish(),
  ZipCode: z.string().min(1),
  CityCode: z.int(),
  StreetCode: z.int(),
  HouseNumber: z.string().nullable().nullish(),
}) as unknown as ToZod<MeagedCompanyInfo>