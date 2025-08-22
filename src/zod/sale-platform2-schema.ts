import type { SalePlatform2 } from "../types/SalePlatform2.ts";
import type { ToZod } from "@kubb/plugin-zod/utils/v4";
import { z } from "zod";

export const salePlatform2Schema = z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]) as unknown as ToZod<SalePlatform2>