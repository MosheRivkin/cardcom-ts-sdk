import type { SdkTransactionInfo } from '../types/SdkTransactionInfo.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { z } from 'zod'

export const sdkTransactionInfoSchema: z.ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<SdkTransactionInfo>, "passthrough"> = z.object({
  Amount: z.string().min(1).describe('Tap transaction total sum'),
  Type: z.int().describe('Tap transaction type: 1 - Charge / 51 - Refund'),
  CreditType: z.int().describe('Tap transaction credit type: 1 - Single payment / 6 - Credit payments / 8 - Regular payments'),
  NumberOfPayments: z.int().describe('Tap transaction number of payments'),
  CustomerName: z.string().min(1).max(50).describe('Tap transaction customer name'),
  CustomerEmail: z.string().max(150).describe('Tap transaction customer name email').nullable().nullish(),
  CustomerPhoneNumber: z.string().max(50).describe('Tap transaction customer phone number').nullable().nullish(),
  CustomerIdNumber: z.string().max(50).describe('Tap transaction customer id number').nullable().nullish(),
  ResponseCode: z.int().describe('Tap transaction response code'),
  Message: z.string().min(1).describe('Tap transaction message'),
  Status: z.string().min(1).describe('Tap transaction status'),
  TransactionId: z.int().describe('Tap transaction id'),
  ReturnCode: z.int().describe('Tap transaction return code'),
  ReturnMessage: z.string().min(1).describe('Tap transaction return message'),
  CardNumber: z.string().min(1).describe('Tap transaction card number'),
  CardExpireDateMMYY: z.string().min(1).describe('Tap transaction card expire month and year in MM/YY format'),
  CardBrandCode: z.int().describe('Tap transaction card brand code'),
  CardIssuerCode: z.int().describe('Tap transaction card issuer code'),
  CardFinancerCode: z.int().describe('Tap transaction card financer code'),
  Token: z.string().min(1).describe('Tap transaction card token'),
  ApprovalNumber: z.string().min(1).describe('Tap transaction approval number'),
  ResultRecord: z.string().min(1).describe('Tap transaction result record'),
  UID: z.string().min(1).describe('Tap transaction UID'),
}) as unknown as ToZod<SdkTransactionInfo>