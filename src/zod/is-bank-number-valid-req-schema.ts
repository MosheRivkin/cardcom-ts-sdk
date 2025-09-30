import type { IsBankNumberValidReq } from '../types/IsBankNumberValidReq.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { z } from 'zod'

/**
 * @description Is Bank valid
 */
export const isBankNumberValidReqSchema: z.ZodObject<import("@kubb/plugin-zod/utils").ZodShape<IsBankNumberValidReq>> = z
  .object({
    apiUserName: z.string().describe('API User Name').nullable().nullish(),
    apiPassword: z.string().describe('API Password').nullable().nullish(),
    Bank: z.int().describe('Bank number').optional(),
    Snif: z.int().describe('Snif').optional(),
    Account: z.string().describe('Bank Account number').nullable().nullish(),
  })
  .describe('Is Bank valid') as unknown as ToZod<IsBankNumberValidReq>