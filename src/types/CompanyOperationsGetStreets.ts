import type { DataGovStreetCodes } from "./DataGovStreetCodes.ts";

export type CompanyOperationsGetStreetsQueryParams = {
    /**
     * @type string
    */
    SupplierUserName: string | null;
    /**
     * @type string
    */
    secret: string | null;
    /**
     * @type integer, int32
    */
    cityCode: number;
    /**
     * @default ""
     * @type string
    */
    startwith?: string | null;
};

/**
 * @description successful request
*/
export type CompanyOperationsGetStreets200 = DataGovStreetCodes[];

/**
 * @description Invalid username
*/
export type CompanyOperationsGetStreets401 = string;

export type CompanyOperationsGetStreetsQueryResponse = CompanyOperationsGetStreets200;

export type CompanyOperationsGetStreetsQuery = {
    Response: CompanyOperationsGetStreets200;
    QueryParams: CompanyOperationsGetStreetsQueryParams;
    Errors: CompanyOperationsGetStreets401;
};