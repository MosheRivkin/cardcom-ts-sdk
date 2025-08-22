import type { RecuringPaymentsChangeStatusForHistoryRecurringToIrrevocable200, RecuringPaymentsChangeStatusForHistoryRecurringToIrrevocable400, RecuringPaymentsChangeStatusForHistoryRecurringToIrrevocable401, RecuringPaymentsChangeStatusForHistoryRecurringToIrrevocableMutationRequest, RecuringPaymentsChangeStatusForHistoryRecurringToIrrevocableMutationResponse } from "../../types/RecuringPaymentsChangeStatusForHistoryRecurringToIrrevocable.ts";
import type { ToZod } from "@kubb/plugin-zod/utils/v4";
import { changeStatusForHistoryRecurringToIrrevocableReqestSchema } from "../change-status-for-history-recurring-to-irrevocable-reqest-schema.ts";
import { errorInfoSchema } from "../error-info-schema.ts";
import { extIsBankNumberValidRspSchema } from "../ext-is-bank-number-valid-rsp-schema.ts";

/**
 * @description successful request
 */
export const recuringPaymentsChangeStatusForHistoryRecurringToIrrevocable200Schema = extIsBankNumberValidRspSchema.describe("Is Bank valid") as unknown as ToZod<RecuringPaymentsChangeStatusForHistoryRecurringToIrrevocable200>

/**
 * @description Invalid request , see \'Description\' in response for more information
 */
export const recuringPaymentsChangeStatusForHistoryRecurringToIrrevocable400Schema = errorInfoSchema.describe("error information for non http status 200") as unknown as ToZod<RecuringPaymentsChangeStatusForHistoryRecurringToIrrevocable400>

/**
 * @description Invalid username or password
 */
export const recuringPaymentsChangeStatusForHistoryRecurringToIrrevocable401Schema = errorInfoSchema.describe("error information for non http status 200") as unknown as ToZod<RecuringPaymentsChangeStatusForHistoryRecurringToIrrevocable401>

export const recuringPaymentsChangeStatusForHistoryRecurringToIrrevocableMutationRequestSchema = changeStatusForHistoryRecurringToIrrevocableReqestSchema.nullable() as unknown as ToZod<RecuringPaymentsChangeStatusForHistoryRecurringToIrrevocableMutationRequest>

export const recuringPaymentsChangeStatusForHistoryRecurringToIrrevocableMutationResponseSchema = recuringPaymentsChangeStatusForHistoryRecurringToIrrevocable200Schema as unknown as ToZod<RecuringPaymentsChangeStatusForHistoryRecurringToIrrevocableMutationResponse>