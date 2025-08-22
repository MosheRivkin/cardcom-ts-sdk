import type { ThreeDSecureState } from "../types/ThreeDSecureState.ts";
import type { ToZod } from "@kubb/plugin-zod/utils/v4";
import { z } from "zod";

export const threeDSecureStateSchema = z.enum(["Auto", "Enabled", "Disabled"]) as unknown as ToZod<ThreeDSecureState>