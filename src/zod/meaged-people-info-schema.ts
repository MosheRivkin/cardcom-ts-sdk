import type { MeagedPeopleInfo } from '../types/MeagedPeopleInfo.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { gender2Schema } from './gender2-schema.ts'
import { relationsSchema } from './relations-schema.ts'
import { z } from 'zod'

export const meagedPeopleInfoSchema = z.object({
  get RelationType() {
    return relationsSchema
  },
  IdentityNumber: z.int(),
  IdentityIssueDate_DDMMYYYY: z.string().min(1),
  IdentityExpireDate_DDMMYYYY: z.string().min(1),
  BirthDate_DDMMYYYY: z.string().min(1),
  get Gender() {
    return gender2Schema.describe('1 - male , 2 - female')
  },
  FirstName: z.string().min(1),
  LastName: z.string().min(1),
  ResedentialCountryCode: z.string().nullable().nullish(),
  StreetCode: z.int(),
  CityCode: z.int(),
  ZipCode: z.string().nullable().nullish(),
  HouseNumber: z.string().nullable().nullish(),
  PhoneNumber1: z.string().min(1),
  PhoneNumber2: z.string().nullable().nullish(),
  Fax: z.string().nullable().nullish(),
  Email: z.string().nullable().nullish(),
}) as unknown as ToZod<MeagedPeopleInfo>