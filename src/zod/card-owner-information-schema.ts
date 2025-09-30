import type { CardOwnerInformation } from '../types/CardOwnerInformation.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { z } from 'zod'

export const cardOwnerInformationSchema: z.ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<CardOwnerInformation>, "passthrough"> = z.object({
  Phone: z.string().nullable().nullish(),
  FullName: z.string().nullable().nullish(),
  IdentityNumber: z.string().describe('credit card owner identity number for israel cards only').nullable().nullish(),
  CardOwnerEmail: z.string().nullable().nullish(),
  AvsZip: z.string().nullable().nullish(),
  AvsAddress: z.string().nullable().nullish(),
  AvsCity: z.string().nullable().nullish(),
}) as unknown as ToZod<CardOwnerInformation>