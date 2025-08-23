import type { ExtGetListOfFilesRsp } from '../types/ExtGetListOfFilesRsp.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { extUpdateTokensSchema } from './ext-update-tokens-schema.ts'
import { z } from 'zod'

/**
 * @description List of new Token to update
 */
export const extGetListOfFilesRspSchema = z
  .object({
    ResponseCode: z.int().describe('Response code , if it equel to zero than all is OK , else error see Description').optional(),
    Description: z.string().describe('Description for errors only').nullable().nullish(),
    get UpdateList() {
      return z.array(extUpdateTokensSchema).describe('Tokens list').nullable().nullish()
    },
  })
  .describe('List of new Token to update') as unknown as ToZod<ExtGetListOfFilesRsp>