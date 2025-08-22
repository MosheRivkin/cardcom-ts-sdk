import type { ConfigBool } from "../types/ConfigBool.ts";
import type { ToZod } from "@kubb/plugin-zod/utils/v4";
import { z } from "zod";

export const configBoolSchema = z.enum(["auto", "true", "false"]) as unknown as ToZod<ConfigBool>