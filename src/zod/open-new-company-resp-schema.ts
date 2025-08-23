import type { OpenNewCompanyResp } from '../types/OpenNewCompanyResp.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { z } from 'zod'

export const openNewCompanyRespSchema = z.object({
  ResponseCode: z.int().optional(),
  Description: z.string().nullable().nullish(),
  CompanyInternalID: z.string().nullable().nullish(),
  TerminalNumber: z.int().nullable().nullish(),
  APIUserName: z.string().nullable().nullish(),
  APISecret: z.string().nullable().nullish(),
  ModulesList: z.array(z.string()).nullable().nullish(),
  UpayAPIKey: z.string().nullable().nullish(),
  ShowErrorToEndUser: z.boolean().optional(),
  CardComSapakNumber: z.string().nullable().nullish(),
}) as unknown as ToZod<OpenNewCompanyResp>