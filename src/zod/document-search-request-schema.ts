import type { DocumentSearchRequest } from '../types/DocumentSearchRequest.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { z } from 'zod'

export const documentSearchRequestSchema: z.ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<DocumentSearchRequest>, "passthrough"> = z.object({
  ApiName: z.string().min(1).describe('Api Name for authentication'),
  ApiPassword: z.string().min(1).describe('Api password for authentication'),
  FromDateYYYYMMDD: z.string().min(1).describe('From date'),
  ToDateYYYYMMDD: z.string().min(1).describe('To date'),
  AccountId: z.int().describe('Account Id. Used to filter. Use AccountId OR CusotmerName').nullable().nullish(),
  CusotmerName: z.string().describe('Customer Name. Used to filter. Use CusotmerName OR AccountId').nullable().nullish(),
  DocType: z.int().default(-1).describe('Document Type: -1=All invoices. -2=All documents. -3=Refund only'),
  CoinId: z.int().default(1).describe('Coin Id. 0=All coins. 1=ILS. 2=USD').nullable().nullish(),
  OpenClose: z.int().default(0).describe('Open or closed documents: 0=all, 1=true, 2=false.'),
  VatFreeDocOnly: z.boolean().default(false).describe('VAT free Docs Only'),
  PageNumber: z.int().default(1).describe('Pagination: page number. Default 1'),
  ItemsPerPage: z.int().default(50).describe('Pagination: number of documents per page. Default 50. Maximum 200'),
}) as unknown as ToZod<DocumentSearchRequest>