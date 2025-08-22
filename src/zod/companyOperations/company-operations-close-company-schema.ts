import type { CompanyOperationsCloseCompany200, CompanyOperationsCloseCompany400, CompanyOperationsCloseCompany401, CompanyOperationsCloseCompanyMutationRequest, CompanyOperationsCloseCompanyMutationResponse } from "../../types/CompanyOperationsCloseCompany.ts";
import type { ToZod } from "@kubb/plugin-zod/utils/v4";
import { acquiredCompanyAccountSchema } from "../acquired-company-account-schema.ts";
import { errorInfoSchema } from "../error-info-schema.ts";
import { openNewCompanyResponseSchema } from "../open-new-company-response-schema.ts";

/**
 * @description successful request
 */
export const companyOperationsCloseCompany200Schema = openNewCompanyResponseSchema as unknown as ToZod<CompanyOperationsCloseCompany200>

/**
 * @description Invalid request , see \'Description\' in response for more information
 */
export const companyOperationsCloseCompany400Schema = errorInfoSchema.describe("error information for non http status 200") as unknown as ToZod<CompanyOperationsCloseCompany400>

/**
 * @description Invalid username
 */
export const companyOperationsCloseCompany401Schema = errorInfoSchema.describe("error information for non http status 200") as unknown as ToZod<CompanyOperationsCloseCompany401>

export const companyOperationsCloseCompanyMutationRequestSchema = acquiredCompanyAccountSchema.nullable() as unknown as ToZod<CompanyOperationsCloseCompanyMutationRequest>

export const companyOperationsCloseCompanyMutationResponseSchema = companyOperationsCloseCompany200Schema as unknown as ToZod<CompanyOperationsCloseCompanyMutationResponse>