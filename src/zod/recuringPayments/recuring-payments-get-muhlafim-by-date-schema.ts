import type { RecuringPaymentsGetMuhlafimByDate200, RecuringPaymentsGetMuhlafimByDate400, RecuringPaymentsGetMuhlafimByDate401, RecuringPaymentsGetMuhlafimByDateMutationRequest, RecuringPaymentsGetMuhlafimByDateMutationResponse } from "../../types/RecuringPaymentsGetMuhlafimByDate.ts";
import type { ToZod } from "@kubb/plugin-zod/utils/v4";
import { errorInfoSchema } from "../error-info-schema.ts";
import { extGetListOfFilesRspSchema } from "../ext-get-list-of-files-rsp-schema.ts";
import { muhlafimByDateRequestSchema } from "../muhlafim-by-date-request-schema.ts";

/**
 * @description successful request
 */
export const recuringPaymentsGetMuhlafimByDate200Schema = extGetListOfFilesRspSchema.describe("List of new Token to update") as unknown as ToZod<RecuringPaymentsGetMuhlafimByDate200>

/**
 * @description Invalid request , see \'Description\' in response for more information
 */
export const recuringPaymentsGetMuhlafimByDate400Schema = errorInfoSchema.describe("error information for non http status 200") as unknown as ToZod<RecuringPaymentsGetMuhlafimByDate400>

/**
 * @description Invalid username
 */
export const recuringPaymentsGetMuhlafimByDate401Schema = errorInfoSchema.describe("error information for non http status 200") as unknown as ToZod<RecuringPaymentsGetMuhlafimByDate401>

export const recuringPaymentsGetMuhlafimByDateMutationRequestSchema = muhlafimByDateRequestSchema.nullable() as unknown as ToZod<RecuringPaymentsGetMuhlafimByDateMutationRequest>

export const recuringPaymentsGetMuhlafimByDateMutationResponseSchema = recuringPaymentsGetMuhlafimByDate200Schema as unknown as ToZod<RecuringPaymentsGetMuhlafimByDateMutationResponse>