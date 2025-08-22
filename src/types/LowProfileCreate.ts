import type { CreateLowProfile } from "./CreateLowProfile.ts";
import type { CreateLowProfileResponse } from "./CreateLowProfileResponse.ts";
import type { ErrorInfo } from "./ErrorInfo.ts";

/**
 * @description successful request
*/
export type LowProfileCreate200 = CreateLowProfileResponse;

/**
 * @description Invalid request , see \'Description\' in response for more information
*/
export type LowProfileCreate400 = ErrorInfo;

/**
 * @description Invalid username
*/
export type LowProfileCreate401 = ErrorInfo;

export type LowProfileCreateMutationRequest = CreateLowProfile | null;

export type LowProfileCreateMutationResponse = LowProfileCreate200;

export type LowProfileCreateMutation = {
    Response: LowProfileCreate200;
    Request: LowProfileCreateMutationRequest;
    Errors: LowProfileCreate400 | LowProfileCreate401;
};