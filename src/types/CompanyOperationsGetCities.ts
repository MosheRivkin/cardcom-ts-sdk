import type { DataGovCityCodes } from "./DataGovCityCodes.ts";

export type CompanyOperationsGetCitiesQueryParams = {
    /**
     * @type string
    */
    SupplierUserName: string | null;
    /**
     * @type string
    */
    secret: string | null;
    /**
     * @default ""
     * @type string
    */
    startwith?: string | null;
};

/**
 * @description successful request
*/
export type CompanyOperationsGetCities200 = DataGovCityCodes[];

/**
 * @description Invalid username
*/
export type CompanyOperationsGetCities401 = string;

export type CompanyOperationsGetCitiesQueryResponse = CompanyOperationsGetCities200;

export type CompanyOperationsGetCitiesQuery = {
    Response: CompanyOperationsGetCities200;
    QueryParams: CompanyOperationsGetCitiesQueryParams;
    Errors: CompanyOperationsGetCities401;
};