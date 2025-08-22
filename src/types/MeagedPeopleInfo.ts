import type { Gender2 } from "./Gender2.ts";
import type { Relations } from "./Relations.ts";

export type MeagedPeopleInfo = {
    /**
     * @type string
    */
    RelationType: Relations;
    /**
     * @type integer, int32
    */
    IdentityNumber: number;
    /**
     * @minLength 1
     * @type string
    */
    IdentityIssueDate_DDMMYYYY: string;
    /**
     * @minLength 1
     * @type string
    */
    IdentityExpireDate_DDMMYYYY: string;
    /**
     * @minLength 1
     * @type string
    */
    BirthDate_DDMMYYYY: string;
    /**
     * @description 1 - male , 2 - female
    */
    Gender: Gender2;
    /**
     * @minLength 1
     * @type string
    */
    FirstName: string;
    /**
     * @minLength 1
     * @type string
    */
    LastName: string;
    /**
     * @type string
    */
    ResedentialCountryCode?: string | null;
    /**
     * @type integer, int32
    */
    StreetCode: number;
    /**
     * @type integer, int32
    */
    CityCode: number;
    /**
     * @type string
    */
    ZipCode?: string | null;
    /**
     * @type string
    */
    HouseNumber?: string | null;
    /**
     * @minLength 1
     * @type string
    */
    PhoneNumber1: string;
    /**
     * @type string
    */
    PhoneNumber2?: string | null;
    /**
     * @type string
    */
    Fax?: string | null;
    /**
     * @type string
    */
    Email?: string | null;
};