import type { Issuer } from "../types/Issuer.ts";
import type { ToZod } from "@kubb/plugin-zod/utils/v4";
import { z } from "zod";

export const issuerSchema = z.enum(["NonIsrael", "Isracard", "CAL", "Diners", "AmericanExpress", "JCB", "Laumicard"]) as unknown as ToZod<Issuer>