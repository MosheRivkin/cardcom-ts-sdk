import type { ReportCodes } from "../types/ReportCodes.ts";
import type { ToZod } from "@kubb/plugin-zod/utils/v4";
import { z } from "zod";

export const reportCodesSchema = z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5)]) as unknown as ToZod<ReportCodes>