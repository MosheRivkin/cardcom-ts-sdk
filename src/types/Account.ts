/**
 * @description Account data
*/
export type Account = {
    /**
     * @description Unique account Id in cardcom system, account must exist in CardCom system
     * @type integer | undefined, int32
    */
    AccountId?: number;
    /**
     * @description Account Company name of last name
     * @minLength 1
     * @maxLength 50
     * @type string
    */
    Name: string;
    /**
     * @description customer first name
     * @type string
    */
    FirstName?: string | null;
    /**
     * @description Business registration number or user Identity number
     * @maxLength 50
     * @type string
    */
    TaxId?: string | null;
    /**
     * @description Customer City
     * @maxLength 50
     * @type string
    */
    City?: string | null;
    /**
     * @description Address Line 1
     * @maxLength 50
     * @type string
    */
    AddressLine1?: string | null;
    /**
     * @description Address Line 2
     * @maxLength 50
     * @type string
    */
    AddressLine2?: string | null;
    /**
     * @description Mobile phone number
     * @maxLength 50
     * @type string
    */
    Mobile?: string | null;
    /**
     * @description Land line phone number
     * @maxLength 50
     * @type string
    */
    Phone?: string | null;
    /**
     * @description customer email
     * @maxLength 50
     * @type string
    */
    Email?: string | null;
    /**
     * @description Is the client is VAT Free?
     * @default false
     * @type boolean
    */
    IsVatFree?: boolean | null;
    /**
     * @description customer zip code.
     * @maxLength 50
     * @type string
    */
    ZipCode?: string | null;
    /**
     * @description mail box.
     * @maxLength 50
     * @type string
    */
    PoBox?: string | null;
    /**
     * @description customer fax
     * @maxLength 50
     * @type string
    */
    Fax?: string | null;
    /**
     * @description when was the customer opened in the system.
     * @type string, date-time
    */
    OpenDate?: string | null;
    /**
     * @description Comments on the customer.
     * @maxLength 250
     * @type string
    */
    Comments?: string | null;
    /**
     * @description The account number on a Foreign system, use for transfer to 3-party account system ( hashavshevet, SAP )
     * @maxLength 50
     * @type string
    */
    AccountForeignKey?: string | null;
    /**
     * @description Your system unique Id for this account
     * @maxLength 50
     * @type string
    */
    SiteUniqueId?: string | null;
    /**
     * @description contact person name
     * @maxLength 50
     * @type string
    */
    ContactName?: string | null;
    /**
     * @description Default coin to use in the UI manual document creation
     * @default 0
     * @type integer | undefined, int32
    */
    ISOCoinId?: number;
    /**
     * @description The balance on the customer card.
     * @type number | undefined, decimal
    */
    Balance?: number;
    /**
     * @description Opening balance on a customer card.
     * @type number | undefined, decimal
    */
    OpeningBalance?: number;
};