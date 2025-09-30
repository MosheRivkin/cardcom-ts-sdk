import type { GetAccountByIdResponse } from '../types/GetAccountByIdResponse.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { accountSchema } from './account-schema.ts'
import { z } from 'zod'

/**
 * @description get account by id response
 */
export const getAccountByIdResponseSchema: z.ZodObject<import("@kubb/plugin-zod/utils").ZodShape<GetAccountByIdResponse>> = z
  .object({
    ResponseCode: z.int().describe('if equel zero then success , else , a develper error see Description for more info ').optional(),
    Description: z.string().max(250).describe('Description of the ResponseCode').nullable().nullish(),
    get Account() {
      return accountSchema.describe('Account inforamtion').nullable().nullish()
    },
  })
  .describe('get account by id response') as unknown as ToZod<GetAccountByIdResponse>