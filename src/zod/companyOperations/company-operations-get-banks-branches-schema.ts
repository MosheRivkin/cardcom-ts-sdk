import type { CompanyOperationsGetBanksBranchesQueryParams, CompanyOperationsGetBanksBranches200, CompanyOperationsGetBanksBranches401, CompanyOperationsGetBanksBranchesQueryResponse } from "../../types/CompanyOperationsGetBanksBranches.ts";
import type { ToZod } from "@kubb/plugin-zod/utils/v4";
import { banksBranchesSchema } from "../banks-branches-schema.ts";
import { z } from "zod";

export const companyOperationsGetBanksBranchesQueryParamsSchema = z.object({
      "SupplierUserName": z.string().nullable(),
  "secret": z.string().nullable(),
  "bankNumber": z.coerce.number().int()
      }) as unknown as ToZod<CompanyOperationsGetBanksBranchesQueryParams>

/**
 * @description successful request
 */
export const companyOperationsGetBanksBranches200Schema = z.array(banksBranchesSchema) as unknown as ToZod<CompanyOperationsGetBanksBranches200>

/**
 * @description Invalid username
 */
export const companyOperationsGetBanksBranches401Schema = z.string() as unknown as ToZod<CompanyOperationsGetBanksBranches401>

export const companyOperationsGetBanksBranchesQueryResponseSchema = companyOperationsGetBanksBranches200Schema as unknown as ToZod<CompanyOperationsGetBanksBranchesQueryResponse>