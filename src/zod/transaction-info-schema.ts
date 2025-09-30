import type { TransactionInfo } from '../types/TransactionInfo.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { acquireSchema } from './acquire-schema.ts'
import { brandSchema } from './brand-schema.ts'
import { cardInfoSchema } from './card-info-schema.ts'
import { cardNumberEntryModeSchema } from './card-number-entry-mode-schema.ts'
import { customFieldSchema } from './custom-field-schema.ts'
import { dealTypeSchema } from './deal-type-schema.ts'
import { documentTypeSchema } from './document-type-schema.ts'
import { issuerSchema } from './issuer-schema.ts'
import { paymentTypeSchema } from './payment-type-schema.ts'
import { z } from 'zod'

export const transactionInfoSchema: z.ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<TransactionInfo>, "passthrough"> = z.object({
  ResponseCode: z.int().describe('if equal zero then success , 700 and 701 success for J2 and J5 transaction').optional(),
  Description: z.string().describe('Description of the ResponseCode').nullable().nullish(),
  TranzactionId: z.int().describe('The Id of the Credit card Tranzacion').optional(),
  TerminalNumber: z.int().describe('Cardcom terminal number').optional(),
  Amount: z.number().describe('Transaction amount').optional(),
  CoinId: z.int().describe('ISO Coin Code ,1 - ILS, 2 - USD, else ISO Coin from list : https://en.wikipedia.org/wiki/ISO_4217').optional(),
  CouponNumber: z.string().describe('Coupon Number - מספר שובר').nullable().nullish(),
  CreateDate: z.date().describe('Transaction date').optional(),
  Last4CardDigits: z.int().describe('The last 4 card digits.').optional(),
  Last4CardDigitsString: z.string().describe('The last 4 card digits (string)').nullable().nullish(),
  FirstCardDigits: z.int().describe('The first digits of the credit card.').optional(),
  JParameter: z.string().describe('J-parameter, type of test to perform on the card').nullable().nullish(),
  CardMonth: z.int().describe('Credit card Validity Month (MM)').optional(),
  CardYear: z.int().describe('Credit card Validity Month (YY)').optional(),
  ApprovalNumber: z.string().describe('Approval Number given by the manufacturer').nullable().nullish(),
  FirstPaymentAmount: z.number().describe('First payment amount').optional(),
  ConstPaymentAmount: z.number().describe('Amount of additional payments').optional(),
  NumberOfPayments: z.int().describe('The number of payments for the deal.').optional(),
  get CardInfo() {
    return cardInfoSchema.describe('the card type, from where was it manifactured.').optional()
  },
  CardOwnerName: z.string().describe('card owner name').nullable().nullish(),
  CardOwnerPhone: z.string().describe('card owner phone.').nullable().nullish(),
  CardOwnerEmail: z.string().describe('the card owner email.').nullable().nullish(),
  CardOwnerIdentityNumber: z.string().describe('the card holder identity number.').nullable().nullish(),
  Token: z.string().describe('The token number, Eve, will be saved in the database.').nullable().nullish(),
  CardName: z.string().describe('Card name for information only').nullable().nullish(),
  SapakMutav: z.string().describe('Customer number at work in Rab Benteb').nullable().nullish(),
  Uid: z
    .string()
    .describe(
      'Unique transaction identifier If a credit/cancellation was made from the transaction, the UID will be the same as the original transaction. Otherwise, the UID will be different.',
    )
    .nullable()
    .nullish(),
  ConcentrationNumber: z.string().describe('מספר הפקדה / ריכוז').nullable().nullish(),
  DocumentNumber: z.int().describe('Document number').nullable().nullish(),
  get DocumentType() {
    return documentTypeSchema.describe('Document DocumentType').nullable().nullish()
  },
  Rrn: z.string().describe('Identification number for credit card companies').nullable().nullish(),
  get Brand() {
    return brandSchema.describe('the card brand, vias\\ mastercard \\ dinners \\ americal express.').optional()
  },
  get Acquire() {
    return acquireSchema.describe('The transaction clearing company').optional()
  },
  get Issuer() {
    return issuerSchema.describe('Who was the card issuer?').optional()
  },
  get PaymentType() {
    return paymentTypeSchema.describe('Credit type - regular debit \\ payment \\ credit \\ discount').optional()
  },
  get CardNumberEntryMode() {
    return cardNumberEntryModeSchema.describe('where was the deal made? "Emv" \\ "Internet" \\ "Phone"').optional()
  },
  get DealType() {
    return dealTypeSchema.describe('Type + Transaction Source - Cancellation \\ Debit \\ Direct Debit \\ Credit').optional()
  },
  IsRefund: z.boolean().describe('was it a refund deal?').optional(),
  DocumentUrl: z.string().nullable().nullish(),
  get CustomFields() {
    return z.array(customFieldSchema.describe('Custom field')).describe('The custome values that were filled and forwarded').nullable().nullish()
  },
  IsAbroadCard: z.boolean().describe('Is the card from abroad?').optional(),
  IssuerAuthCodeDescription: z.string().describe('Issuer authorization code description').nullable().nullish(),
}) as unknown as ToZod<TransactionInfo>