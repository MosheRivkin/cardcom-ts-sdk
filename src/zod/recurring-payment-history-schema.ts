import type { RecurringPaymentHistory } from '../types/RecurringPaymentHistory.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { z } from 'zod'

export const recurringPaymentHistorySchema: z.ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<RecurringPaymentHistory>, "passthrough"> = z.object({
  RowID: z.int().describe('uniq id (per company)').optional(),
  RecurringId: z.int().describe('Cardcom for parent Recurring Id').optional(),
  TerminalNumber: z.int().optional(),
  AccountID: z.int().optional(),
  DocumentDescription: z.string().nullable().nullish(),
  LastDate: z.date().nullable().nullish(),
  OriginalNextDate: z.date().nullable().nullish(),
  FinalDebitCoinID: z.int().optional(),
  SumToBill: z.number().describe('The sum that was Billed').optional(),
  SumToBillNoVat: z.number().optional(),
  DepartmentID: z.int().optional(),
  IsDocumentCreate: z.boolean().optional(),
  AgentID: z.int().nullable().nullish(),
  PaymentNum: z.int().nullable().nullish(),
  IsReNewOrder: z.boolean().optional(),
  ProductID: z.string().nullable().nullish(),
  TranzactionId: z.int().nullable().nullish(),
  ResposeCode: z.int().nullable().nullish(),
  ProcessID: z.int().nullable().nullish(),
  DocumentType: z.int().nullable().nullish(),
  DocumentNumber: z.int().nullable().nullish(),
  Quantity: z.number().optional(),
  UnitPrice: z.number().optional(),
  UnitPriceNoVAT: z.number().optional(),
  IsIncludesVAT: z.boolean().optional(),
  VAT: z.number().optional(),
  BillingAttempts: z.int().optional(),
  CreateDate: z.date().optional(),
  ActualBillingType: z.int().describe('0 - Bank , 1 - Credit Card , 2 - Retainer').optional(),
  NumOfCreditPayments: z.int().nullable().nullish(),
  Status: z
    .string()
    .describe('SUCCESSFUL , PENDINGFORPROCESSING , DEBTAUTOBILLING , LOSTDEBT , PAYBYOTHERE  , ONHOLD , UNKNOWN + (error Code)')
    .nullable()
    .nullish(),
}) as unknown as ToZod<RecurringPaymentHistory>