import type { CompanyOperationsGetBanksQueryParams, CompanyOperationsGetBanks200, CompanyOperationsGetBanks401, CompanyOperationsGetBanksQueryResponse } from "../../types/CompanyOperationsGetBanks.ts";
import type { ToZod } from "@kubb/plugin-zod/utils/v4";
import { banksSchema } from "../banks-schema.ts";
import { z } from "zod";

export const companyOperationsGetBanksQueryParamsSchema = z.object({
      "SupplierUserName": z.string().nullable(),
  "secret": z.string().nullable()
      }) as unknown as ToZod<CompanyOperationsGetBanksQueryParams>

/**
 * @description successful request
 */
export const companyOperationsGetBanks200Schema = z.array(banksSchema) as unknown as ToZod<CompanyOperationsGetBanks200>

/**
 * @description Invalid username
 */
export const companyOperationsGetBanks401Schema = z.string() as unknown as ToZod<CompanyOperationsGetBanks401>

export const companyOperationsGetBanksQueryResponseSchema = companyOperationsGetBanks200Schema as unknown as ToZod<CompanyOperationsGetBanksQueryResponse>