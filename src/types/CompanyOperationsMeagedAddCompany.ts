import type { MeagedOpenRequest } from "./MeagedOpenRequest.ts";
import type { OpenMeagedResponse } from "./OpenMeagedResponse.ts";

/**
 * @description successful request
*/
export type CompanyOperationsMeagedAddCompany200 = OpenMeagedResponse;

export type CompanyOperationsMeagedAddCompanyMutationRequest = MeagedOpenRequest | null;

export type CompanyOperationsMeagedAddCompanyMutationResponse = CompanyOperationsMeagedAddCompany200;

export type CompanyOperationsMeagedAddCompanyMutation = {
    Response: CompanyOperationsMeagedAddCompany200;
    Request: CompanyOperationsMeagedAddCompanyMutationRequest;
    Errors: any;
};