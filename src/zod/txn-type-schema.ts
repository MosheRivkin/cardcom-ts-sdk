import type { TXNType } from "../types/TXNType.ts";
import type { ToZod } from "@kubb/plugin-zod/utils/v4";
import { z } from "zod";

export const txnTypeSchema = z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(6), z.literal(7), z.literal(8), z.literal(12), z.literal(17), z.literal(71), z.literal(78)]) as unknown as ToZod<TXNType>