import type { MCCDBs } from '../types/MCCDBs.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { z } from 'zod'

export const mccdBsSchema: z.ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<MCCDBs>, "passthrough"> = z.object({
  MCC_CardCom: z.int().optional(),
  MCC_Code_Local: z.int().optional(),
  MCC_Code_Master: z.int().optional(),
  MCC_Code_Visa: z.int().optional(),
  MCC_Description: z.string().nullable().nullish(),
  MCC_Code_MainClassification: z.int().optional(),
  MCC_Description_MainClassification: z.string().nullable().nullish(),
  PriorApprovalForRecruitingABusinessRiskManagement: z.boolean().optional(),
  RecruitmentRouteType: z.int().optional(),
  ATouristMissingDocument: z.boolean().optional(),
  MissingDocumentStatusDefault: z.boolean().optional(),
  RiskLevel: z.int().optional(),
}) as unknown as ToZod<MCCDBs>