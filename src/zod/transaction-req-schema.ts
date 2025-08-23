import type { TransactionReq } from '../types/TransactionReq.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { advancedTranSchema } from './advanced-tran-schema.ts'
import { cardOwnerInformationSchema } from './card-owner-information-schema.ts'
import { customFieldSchema } from './custom-field-schema.ts'
import { documentTranSchema } from './document-tran-schema.ts'
import { z } from 'zod'

export const transactionReqSchema = z.object({
  TerminalNumber: z.int().describe('Cardcom terminal number'),
  ApiName: z.string().min(1).describe('Api Name for authentication'),
  Amount: z.number().describe('Amount of transaction'),
  CardNumber: z.string().describe('credit Card number').nullable().nullish(),
  Token: z.string().describe('credit Card token').nullable().nullish(),
  ExternalMerchantId: z.string().describe('External Merchant Id').nullable().nullish(),
  CardExpirationMMYY: z.string().describe('credit Card Expiration date ').nullable().nullish(),
  CVV2: z.string().describe('credit Card CVV ').nullable().nullish(),
  ExternalUniqTranId: z
    .string()
    .describe(
      "External Uniq Tran Id , send your uniq trnasaction id to prevent duplication of transaction. if the same ExternalUniqTranId will be send you will receive and error code 608. see 'ExternalUniqUniqTranIdResponse' ",
    )
    .nullable()
    .nullish(),
  ExternalUniqUniqTranIdResponse: z
    .boolean()
    .default(false)
    .describe(
      "External Uniq Tran Id , send your uniq trnasaction id to prevent duplication of transaction. if the same ExternalUniqTranId will be send you will receive and error code 608. see 'ExternalUniqUniqTranIdResponse' ",
    )
    .nullable()
    .nullish(),
  NumOfPayments: z.int().min(1).max(36).default(1).describe('Maximum number of payment to show to card holder , default 1').nullable().nullish(),
  get CardOwnerInformation() {
    return cardOwnerInformationSchema.nullable().nullish()
  },
  ISOCoinId: z
    .int()
    .default(1)
    .describe('ISO Coin Code ,1 - ILS, 2 - USD, else ISO Coin from list : https://en.wikipedia.org/wiki/ISO_4217')
    .nullable()
    .nullish(),
  get CustomFields() {
    return z.array(customFieldSchema.describe('Custom field')).describe('Fill the value of CustomFields information').nullable().nullish()
  },
  get Advanced() {
    return advancedTranSchema.describe('Advanced transaction options').nullable().nullish()
  },
  get Document() {
    return documentTranSchema.describe('Document information , will create document if transaction succeeded').nullable().nullish()
  },
}) as unknown as ToZod<TransactionReq>