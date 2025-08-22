/**
 * @description Products
*/
export type Products = {
    /**
     * @description Product ID , exemple \'AVG-BB-10;
     * @maxLength 50
     * @type string
    */
    ProductID?: string | null;
    /**
     * @description product description
     * @minLength 1
     * @maxLength 250
     * @type string
    */
    Description: string;
    /**
     * @description quantity
     * @minLength -99999.99
     * @maxLength 99999.99
     * @default 1
     * @type number, decimal
    */
    Quantity?: number | null;
    /**
     * @description cost of one unit
     * @minLength -9999999999.99
     * @maxLength 9999999999.99
     * @default 0
     * @type number, decimal
    */
    UnitCost: number;
    /**
     * @description Recommended, if the Quantity contains decimal point send the total line cost to prevent round errors
     * @default 0
     * @type number, decimal
    */
    TotalLineCost?: number | null;
    /**
     * @description Is this product VAT Free , used for mix VAT items in one documents
     * @default false
     * @type boolean
    */
    IsVatFree?: boolean | null;
};