import type { CompanyOperationsMeagedAddCompany200, CompanyOperationsMeagedAddCompanyMutationRequest, CompanyOperationsMeagedAddCompanyMutationResponse } from "../../types/CompanyOperationsMeagedAddCompany.ts";
import type { ToZod } from "@kubb/plugin-zod/utils/v4";
import { meagedOpenRequestSchema } from "../meaged-open-request-schema.ts";
import { openMeagedResponseSchema } from "../open-meaged-response-schema.ts";

/**
 * @description successful request
 */
export const companyOperationsMeagedAddCompany200Schema = openMeagedResponseSchema as unknown as ToZod<CompanyOperationsMeagedAddCompany200>

export const companyOperationsMeagedAddCompanyMutationRequestSchema = meagedOpenRequestSchema.nullable() as unknown as ToZod<CompanyOperationsMeagedAddCompanyMutationRequest>

export const companyOperationsMeagedAddCompanyMutationResponseSchema = companyOperationsMeagedAddCompany200Schema as unknown as ToZod<CompanyOperationsMeagedAddCompanyMutationResponse>