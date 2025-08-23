import type { ExtIsBankNumberValidRsp } from '../types/ExtIsBankNumberValidRsp.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { z } from 'zod'

/**
 * @description Is Bank valid
 */
export const extIsBankNumberValidRspSchema = z
  .object({
    ResponseCode: z.int().describe('Response code , if it equel to zero than all is OK , else error see Description').optional(),
    Description: z.string().describe('Description for errors only').nullable().nullish(),
  })
  .describe('Is Bank valid') as unknown as ToZod<ExtIsBankNumberValidRsp>