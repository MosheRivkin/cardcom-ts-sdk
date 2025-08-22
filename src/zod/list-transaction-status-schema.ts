import type { ListTransactionStatus } from "../types/ListTransactionStatus.ts";
import type { ToZod } from "@kubb/plugin-zod/utils/v4";
import { z } from "zod";

export const listTransactionStatusSchema = z.enum(["Success", "All", "Failure"]) as unknown as ToZod<ListTransactionStatus>