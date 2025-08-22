import type { DataGovCityCodes } from "../types/DataGovCityCodes.ts";
import type { ToZod } from "@kubb/plugin-zod/utils/v4";
import { z } from "zod";

export const dataGovCityCodesSchema = z.object({
      "Id": z.int().optional(),
  "CodeCity": z.int().nullable().nullish(),
  "City": z.string().nullable().nullish(),
  "CityEng": z.string().nullable().nullish()
      }) as unknown as ToZod<DataGovCityCodes>