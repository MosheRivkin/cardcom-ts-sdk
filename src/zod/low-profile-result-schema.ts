import type { LowProfileResult } from '../types/LowProfileResult.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { documentInfoSchema } from './document-info-schema.ts'
import { lowProfileUiValuesSchema } from './low-profile-ui-values-schema.ts'
import { lpUtmDataSchema } from './lp-utm-data-schema.ts'
import { operationSchema } from './operation-schema.ts'
import { suspendedInfoSchema } from './suspended-info-schema.ts'
import { tokenInfoSchema } from './token-info-schema.ts'
import { transactionInfoSchema } from './transaction-info-schema.ts'
import { z } from 'zod'

/**
 * @description Result of the low profile page deal
 */
export const lowProfileResultSchema = z
  .object({
    ResponseCode: z.int().describe('if equel zero then success , else , a develper error see Description for more info ').optional(),
    Description: z.string().describe('Description of the ResponseCode').nullable().nullish(),
    TerminalNumber: z.int().describe('Cardcom terminal number').optional(),
    LowProfileId: z.string().describe('The unique ID of the low profile transaction').optional(),
    TranzactionId: z.int().describe('The Id of the Credit card Transacion').optional(),
    ReturnValue: z.string().describe('Same value that was sent on the CreateLowProfile request').nullable().nullish(),
    get Operation() {
      return operationSchema.describe('Type of operation').nullable().nullish()
    },
    get UIValues() {
      return lowProfileUiValuesSchema.describe('Will contain the value that the card holder enter in the UI').optional()
    },
    get DocumentInfo() {
      return documentInfoSchema.describe('Will no be null is a documents is created').nullable().nullish()
    },
    get TokenInfo() {
      return tokenInfoSchema.describe('Created token information, Will no be null at operations:  ChargeAndCreateToken, CreateTokenOnly').nullable().nullish()
    },
    get SuspendedInfo() {
      return suspendedInfoSchema.describe('SuspendedI deal information, Will no be null at operations: SuspendedDeal').nullable().nullish()
    },
    get TranzactionInfo() {
      return transactionInfoSchema.describe('Transaction information, Will no be null at operations: ChargeOnly, ChargeAndCreateToken ').nullable().nullish()
    },
    ExternalPaymentVector: z.string().describe('ExternalPayment indicator. ').nullable().nullish(),
    Country: z.string().describe('Country').nullable().nullish(),
    get UTM() {
      return lpUtmDataSchema.describe('UTM data ').nullable().nullish()
    },
    IssuerAuthCodeDescription: z.string().describe('Issuer authorization code description').nullable().nullish(),
  })
  .describe('Result of the low profile page deal') as unknown as ToZod<LowProfileResult>