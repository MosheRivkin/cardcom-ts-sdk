import type { Account } from '../types/Account.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { z } from 'zod'

/**
 * @description Account data
 */
export const accountSchema = z
  .object({
    AccountId: z.int().describe('Unique account Id in cardcom system, account must exist in CardCom system ').optional(),
    Name: z.string().min(1).max(50).describe('Account Company name of last name'),
    FirstName: z.string().describe('customer first name').nullable().nullish(),
    TaxId: z.string().max(50).describe('Business registration number or user Identity number').nullable().nullish(),
    City: z.string().max(50).describe('Customer City').nullable().nullish(),
    AddressLine1: z.string().max(50).describe('Address Line 1').nullable().nullish(),
    AddressLine2: z.string().max(50).describe('Address Line 2').nullable().nullish(),
    Mobile: z.string().max(50).describe('Mobile phone number').nullable().nullish(),
    Phone: z.string().max(50).describe('Land line phone number').nullable().nullish(),
    Email: z.string().max(50).describe('customer email').nullable().nullish(),
    IsVatFree: z.boolean().default(false).describe('Is the client is VAT Free?').nullable().nullish(),
    ZipCode: z.string().max(50).describe('customer zip code.').nullable().nullish(),
    PoBox: z.string().max(50).describe('mail box.').nullable().nullish(),
    Fax: z.string().max(50).describe('customer fax').nullable().nullish(),
    OpenDate: z.date().describe('when was the customer opened in the system.').nullable().nullish(),
    Comments: z.string().max(250).describe('Comments on the customer.').nullable().nullish(),
    AccountForeignKey: z
      .string()
      .max(50)
      .describe('The account number on a Foreign system, use for transfer to 3-party account system ( hashavshevet, SAP )')
      .nullable()
      .nullish(),
    SiteUniqueId: z.string().max(50).describe('Your system unique Id for this account').nullable().nullish(),
    ContactName: z.string().max(50).describe('contact person name').nullable().nullish(),
    ISOCoinId: z.int().default(0).describe('Default coin to use in the UI manual document creation'),
    Balance: z.number().describe('The balance on the customer card.').optional(),
    OpeningBalance: z.number().describe('Opening balance on a customer card.').optional(),
  })
  .describe('Account data') as unknown as ToZod<Account>