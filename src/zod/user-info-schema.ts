import type { UserInfo } from "../types/UserInfo.ts";
import type { ToZod } from "@kubb/plugin-zod/utils/v4";
import { genderSchema } from "./gender-schema.ts";
import { humanIdTypesSchema } from "./human-id-types-schema.ts";
import { z } from "zod";

export const userInfoSchema = z.object({
      "StreetCode": z.int().describe("Street code - get list of streets from https://secure.cardcom.solutions/api/v11/CompanyOperations/GetStreets by city code").optional(),
  "CityCode": z.int().describe("City code - get list of cities from https://secure.cardcom.solutions/api/v11/CompanyOperations/GetCities").optional(),
  "Email": z.string().describe("Email").nullable().nullish(),
  "IdentityNumber": z.string().min(1).describe("Identity number"),
  "LogInName": z.string().min(7).max(250),
  "LogInPassword": z.string().min(7).nullable().nullish(),
  "FirstName": z.string().describe("First Name").nullable().nullish(),
  "Fax": z.string().describe("Fax").nullable().nullish(),
  "PhoneNumber": z.string().describe("Phone number").nullable().nullish(),
  "MobilePhone": z.string().describe("Mobile phone").nullable().nullish(),
  "ZipCode": z.string().describe("Zip code").nullable().nullish(),
  "LastName": z.string().describe("Last Name").nullable().nullish(),
  "BirthDate": z.string().describe("Birth Date yyyy-MM-dd, Must be older than 18").nullable().nullish(),
  get Gender(){
                  return genderSchema.describe("Sex").nullable().nullish()
                },
  "IdentityIssueDate": z.string().describe("Issue date of identity or passport yyyy-MM-dd").nullable().nullish(),
  "PassportIssueCountryCode": z.int().min(1).max(999).describe("Passport Issue Country Code - get from API http://localhost:61240/api/v11/CompanyOperations/GetCountries").optional(),
  get IdIssueDateOrPassportIDTypes(){
                  return humanIdTypesSchema.describe("IdIssueDateOrPassportIDTypes").nullable().nullish()
                },
  "PersonalIdentificationCode": z.string().max(20).describe("Personal identification code").nullable().nullish()
      }) as unknown as ToZod<UserInfo>