import type { InvExtHead } from '../types/InvExtHead.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { z } from 'zod'

export const invExtHeadSchema: z.ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<InvExtHead>, "passthrough"> = z.object({
  CustName: z.string().nullable().nullish(),
  CustAddresLine1: z.string().nullable().nullish(),
  CustAddresLine2: z.string().nullable().nullish(),
  CustCity: z.string().nullable().nullish(),
  CustLinePH: z.string().nullable().nullish(),
  CustMobilePH: z.string().nullable().nullish(),
  CompID: z.string().nullable().nullish(),
  Language: z.string().nullable().nullish(),
  Languge: z.string().nullable().nullish(),
  Comments: z.string().nullable().nullish(),
  CoinID: z.int().optional(),
  CoinIsoName: z.string().nullable().nullish(),
  Email: z.string().nullable().nullish(),
  SendByEmail: z.boolean().optional(),
  ExtIsVatFree: z.boolean().nullable().nullish(),
  ManualInvoiceNumber: z.string().nullable().nullish(),
  DepartmentId: z.string().nullable().nullish(),
  DepartmentIdShort: z.int().optional(),
  IsLoadInfoFromAccountID: z.string().nullable().nullish(),
  IsAutoCreateUpdateAccount: z.string().nullable().nullish(),
  AccountForeignKey: z.string().nullable().nullish(),
  SiteUniqueId: z.string().nullable().nullish(),
  DeliveryName: z.string().nullable().nullish(),
  InvDate: z.string().nullable().nullish(),
  ValueDate: z.string().nullable().nullish(),
  ExternalId: z.string().nullable().nullish(),
  AccountID: z.string().nullable().nullish(),
}) as unknown as ToZod<InvExtHead>