import type { LowProfileCreate200, LowProfileCreate400, LowProfileCreate401, LowProfileCreateMutationRequest, LowProfileCreateMutationResponse } from "../../types/LowProfileCreate.ts";
import type { ToZod } from "@kubb/plugin-zod/utils/v4";
import { createLowProfileResponseSchema } from "../create-low-profile-response-schema.ts";
import { createLowProfileSchema } from "../create-low-profile-schema.ts";
import { errorInfoSchema } from "../error-info-schema.ts";

/**
 * @description successful request
 */
export const lowProfileCreate200Schema = createLowProfileResponseSchema.describe("Response for creating low profile page") as unknown as ToZod<LowProfileCreate200>

/**
 * @description Invalid request , see \'Description\' in response for more information
 */
export const lowProfileCreate400Schema = errorInfoSchema.describe("error information for non http status 200") as unknown as ToZod<LowProfileCreate400>

/**
 * @description Invalid username
 */
export const lowProfileCreate401Schema = errorInfoSchema.describe("error information for non http status 200") as unknown as ToZod<LowProfileCreate401>

export const lowProfileCreateMutationRequestSchema = createLowProfileSchema.nullable() as unknown as ToZod<LowProfileCreateMutationRequest>

export const lowProfileCreateMutationResponseSchema = lowProfileCreate200Schema as unknown as ToZod<LowProfileCreateMutationResponse>