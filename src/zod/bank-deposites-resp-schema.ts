import type { BankDepositesResp } from '../types/BankDepositesResp.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { bankDepositesSchema } from './bank-deposites-schema.ts'
import { z } from 'zod'

export const bankDepositesRespSchema: z.ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<BankDepositesResp>, "passthrough"> = z.object({
  ResponseCode: z.int().describe('if equel zero then success , else , a develper error see Description for more info ').optional(),
  Description: z.string().max(250).describe('Description of the ResponseCode').nullable().nullish(),
  get BankDeposites() {
    return z.array(bankDepositesSchema).describe('BankDeposites').nullable().nullish()
  },
}) as unknown as ToZod<BankDepositesResp>