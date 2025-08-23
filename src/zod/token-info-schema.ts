import type { TokenInfo } from '../types/TokenInfo.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { z } from 'zod'

/**
 * @description Create token result, You need to save all of the information in the database next to the account, it will be used in the Token charge process
 */
export const tokenInfoSchema = z
  .object({
    Token: z.string().describe('Credit card token use it for future charges').optional(),
    TokenExDate: z.string().describe('The date that the toke will be deleted from CardCom system, yyyyMMdd').optional(),
    CardYear: z.int().describe('card expiration year').optional(),
    CardMonth: z.int().describe('card expiration month').optional(),
    TokenApprovalNumber: z.string().describe('Issuer approval number for capture operation').optional(),
    CardOwnerIdentityNumber: z.string().describe('card holder identity number').optional(),
  })
  .describe(
    'Create token result, You need to save all of the information in the database next to the account, it will be used in the Token charge process',
  ) as unknown as ToZod<TokenInfo>