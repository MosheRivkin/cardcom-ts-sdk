import type { LinkedTransactionsType } from "../types/LinkedTransactionsType.ts";
import type { ToZod } from "@kubb/plugin-zod/utils/v4";
import { z } from "zod";

export const linkedTransactionsTypeSchema = z.union([z.literal(1), z.literal(4), z.literal(8)]) as unknown as ToZod<LinkedTransactionsType>