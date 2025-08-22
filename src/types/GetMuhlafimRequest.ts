export type GetMuhlafimRequest = {
    /**
     * @description Supplier Username
     * @minLength 1
     * @type string
    */
    SupplierUserName: string;
    /**
     * @description Secret Key or Password
     * @minLength 1
     * @type string
    */
    Secret: string;
    /**
     * @description Start Date
     * @minLength 1
     * @type string, date-time
    */
    DateFrom: string;
    /**
     * @description End Date
     * @minLength 1
     * @type string, date-time
    */
    DateTo: string;
    /**
     * @description Company Identification Number
     * @type integer, int32
    */
    CompanyNumber: number;
    /**
     * @description Certificate or Credential
     * @minLength 1
     * @type string
    */
    Certification: string;
};