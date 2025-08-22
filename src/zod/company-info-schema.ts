import type { CompanyInfo } from "../types/CompanyInfo.ts";
import type { ToZod } from "@kubb/plugin-zod/utils/v4";
import { citizenshipSchema } from "./citizenship-schema.ts";
import { extSlikaAggrementSchema } from "./ext-slika-aggrement-schema.ts";
import { z } from "zod";

export const companyInfoSchema = z.object({
      "Activity": z.string().describe("Business Activity").nullable().nullish(),
  "BusinessRegistrationNumber": z.string().min(1).describe("Id Business Number"),
  "ContactPerson": z.string().describe("Contact Name").nullable().nullish(),
  "Email": z.string().describe("Company email").nullable().nullish(),
  "Name": z.string().min(1).describe("Company name mandatory field"),
  "Fax": z.string().describe("Fax").nullable().nullish(),
  "PhoneNumber": z.string().describe("Phone - mandatory if there is no mobile phone").nullable().nullish(),
  "MobilePhone": z.string().describe("Mobile phone - mandatory if there is no phone number").nullable().nullish(),
  "ZipCode": z.string().describe("Zip code").nullable().nullish(),
  "IsVatFreeCompany": z.boolean().describe("Is vat free company (N.P.O)").optional(),
  get Citizenship(){
                  return citizenshipSchema.default("Israel")
                },
  "CompanyInternalID": z.string().nullable().nullish(),
  "NameEng": z.string().describe("Business name in English").nullable().nullish(),
  "CityCode": z.int().describe("City code - get list of cities from https://secure.cardcom.solutions/api/v11/CompanyOperations/GetCities").nullable().nullish(),
  "StreetCode": z.int().describe("Street code - get list of streets from https://secure.cardcom.solutions/api/v11/CompanyOperations/GetStreets by city code").nullable().nullish(),
  "HouseNumber": z.string().describe("House number").nullable().nullish(),
  "WebSiteUrl": z.string().describe("Website Address").nullable().nullish(),
  "Entrance": z.string().min(0).max(10).describe("Entrance").nullable().nullish(),
  "CountryCode": z.int().describe("Country - get list of Countries from https://secure.cardcom.solutions/api/v11/CompanyOperations/GetCountries  for example israel code 376\"").optional(),
  "NameLegalCorporation": z.string().describe("Name legal corporation").nullable().nullish(),
  get AgreementInfo(){
                  return extSlikaAggrementSchema.describe("agreement number").nullable().nullish()
                }
      }) as unknown as ToZod<CompanyInfo>