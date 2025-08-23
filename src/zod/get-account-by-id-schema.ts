import type { GetAccountById } from '../types/GetAccountById.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { z } from 'zod'

export const getAccountByIdSchema = z.object({
  ApiName: z.string().min(1).describe('Api Name for authentication'),
  ApiPassword: z.string().min(1).describe('Api password for authentication'),
  AccountId: z.int().describe('Account Id to query'),
}) as unknown as ToZod<GetAccountById>