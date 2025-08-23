import type { MeagedGetCompanyInfoResponse } from '../types/MeagedGetCompanyInfoResponse.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { meagedSapakInfoSchema } from './meaged-sapak-info-schema.ts'
import { z } from 'zod'

export const meagedGetCompanyInfoResponseSchema = z.object({
  ResponseCode: z.int().describe('if equel zero then success , else , a develper error see Description for more info ').optional(),
  Description: z.string().describe('Description of the ResponseCode').nullable().nullish(),
  get MeagedSapakInfo() {
    return z.array(meagedSapakInfoSchema).nullable().nullish()
  },
}) as unknown as ToZod<MeagedGetCompanyInfoResponse>