import type { Gender } from "./Gender.ts";
import type { HumanIDTypes } from "./HumanIDTypes.ts";

export type UserInfo = {
    /**
     * @description Street code - get list of streets from https://secure.cardcom.solutions/api/v11/CompanyOperations/GetStreets by city code
     * @type integer | undefined, int32
    */
    StreetCode?: number;
    /**
     * @description City code - get list of cities from https://secure.cardcom.solutions/api/v11/CompanyOperations/GetCities
     * @type integer | undefined, int32
    */
    CityCode?: number;
    /**
     * @description Email
     * @type string
    */
    Email?: string | null;
    /**
     * @description Identity number
     * @minLength 1
     * @type string
    */
    IdentityNumber: string;
    /**
     * @minLength 7
     * @maxLength 250
     * @type string
    */
    LogInName: string;
    /**
     * @minLength 7
     * @type string
    */
    LogInPassword?: string | null;
    /**
     * @description First Name
     * @type string
    */
    FirstName?: string | null;
    /**
     * @description Fax
     * @type string
    */
    Fax?: string | null;
    /**
     * @description Phone number
     * @type string
    */
    PhoneNumber?: string | null;
    /**
     * @description Mobile phone
     * @type string
    */
    MobilePhone?: string | null;
    /**
     * @description Zip code
     * @type string
    */
    ZipCode?: string | null;
    /**
     * @description Last Name
     * @type string
    */
    LastName?: string | null;
    /**
     * @description Birth Date yyyy-MM-dd, Must be older than 18
     * @type string
    */
    BirthDate?: string | null;
    /**
     * @description Sex
    */
    Gender?: Gender | null;
    /**
     * @description Issue date of identity or passport yyyy-MM-dd
     * @type string
    */
    IdentityIssueDate?: string | null;
    /**
     * @description Passport Issue Country Code - get from API http://localhost:61240/api/v11/CompanyOperations/GetCountries
     * @minLength 1
     * @maxLength 999
     * @type integer | undefined, int32
    */
    PassportIssueCountryCode?: number;
    /**
     * @description IdIssueDateOrPassportIDTypes
    */
    IdIssueDateOrPassportIDTypes?: HumanIDTypes | null;
    /**
     * @description Personal identification code
     * @maxLength 20
     * @type string
    */
    PersonalIdentificationCode?: string | null;
};