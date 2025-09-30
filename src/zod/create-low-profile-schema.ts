import type { CreateLowProfile } from '../types/CreateLowProfile.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { advancedLpDefinitionSchema } from './advanced-lp-definition-schema.ts'
import { documentLpSchema } from './document-lp-schema.ts'
import { lpUtmDataSchema } from './lp-utm-data-schema.ts'
import { operationSchema } from './operation-schema.ts'
import { uiDefinitionSchema } from './ui-definition-schema.ts'
import { z } from 'zod'

/**
 * @description create a new one time, Iframe \\ redirect page
 */
export const createLowProfileSchema: z.ZodObject<import("@kubb/plugin-zod/utils").ZodShape<CreateLowProfile>> = z
  .object({
    TerminalNumber: z.int().describe('Cardcom terminal number'),
    ApiName: z.string().min(1).describe('Api Name for authentication'),
    get Operation() {
      return operationSchema.default('ChargeOnly').describe('Type of operation to perform , default - ChargeOnly')
    },
    ReturnValue: z
      .string()
      .max(250)
      .describe('A string of data to save on the transaction, usually send your unique order Id, you will get it back in the WebHook URL')
      .nullable()
      .nullish(),
    Amount: z.number().describe('Amount of tranzaction (12.36)'),
    SuccessRedirectUrl: z.string().min(1).max(500).describe('Url to redirect the card holder on successful transaction , (http(s)://site.com/Success)'),
    FailedRedirectUrl: z.string().min(1).max(500).describe('Url to redicet on failed transaction (http(s)://site.com/failed)'),
    CancelRedirectUrl: z.string().nullable().nullish(),
    WebHookUrl: z.string().min(1).max(500).describe('A webhook URL is a web address that receives real-time data about the transaction'),
    ProductName: z.string().max(250).describe('Text to show to card holder if no documents is send').nullable().nullish(),
    Language: z
      .string()
      .max(2)
      .default('he')
      .describe('Page Language - he,en,ru,sp (https://cardcomapinametovalue.zendesk.com/hc/he/articles/27007768777234-שפות-לדף-פרופיל-נמוך-Language)')
      .nullable()
      .nullish(),
    ISOCoinId: z
      .int()
      .default(1)
      .describe('ISO Coin Code ,1 - ILS, 2 - USD, else ISO Coin from list : https://en.wikipedia.org/wiki/ISO_4217')
      .nullable()
      .nullish(),
    get UIDefinition() {
      return uiDefinitionSchema.describe('UI Definition for the created page').nullable().nullish()
    },
    get AdvancedDefinition() {
      return advancedLpDefinitionSchema.describe('Advanced transaction definition').nullable().nullish()
    },
    get Document() {
      return documentLpSchema.describe('Document information').nullable().nullish()
    },
    get UTM() {
      return lpUtmDataSchema.describe('Document information').nullable().nullish()
    },
  })
  .describe('create a new one time, Iframe \\ redirect page') as unknown as ToZod<CreateLowProfile>