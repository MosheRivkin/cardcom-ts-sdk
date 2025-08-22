import type { CompanyOperationsGetStreetsQueryParams, CompanyOperationsGetStreets200, CompanyOperationsGetStreets401, CompanyOperationsGetStreetsQueryResponse } from "../../types/CompanyOperationsGetStreets.ts";
import type { ToZod } from "@kubb/plugin-zod/utils/v4";
import { dataGovStreetCodesSchema } from "../data-gov-street-codes-schema.ts";
import { z } from "zod";

export const companyOperationsGetStreetsQueryParamsSchema = z.object({
      "SupplierUserName": z.string().nullable(),
  "secret": z.string().nullable(),
  "cityCode": z.coerce.number().int(),
  "startwith": z.string().default("").nullable().nullish()
      }) as unknown as ToZod<CompanyOperationsGetStreetsQueryParams>

/**
 * @description successful request
 */
export const companyOperationsGetStreets200Schema = z.array(dataGovStreetCodesSchema) as unknown as ToZod<CompanyOperationsGetStreets200>

/**
 * @description Invalid username
 */
export const companyOperationsGetStreets401Schema = z.string() as unknown as ToZod<CompanyOperationsGetStreets401>

export const companyOperationsGetStreetsQueryResponseSchema = companyOperationsGetStreets200Schema as unknown as ToZod<CompanyOperationsGetStreetsQueryResponse>