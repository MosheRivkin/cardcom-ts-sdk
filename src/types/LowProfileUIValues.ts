import type { CustomField } from "./CustomField.ts";

/**
 * @description values that was filled the the card holder
*/
export type LowProfileUIValues = {
    /**
     * @description Card Owner\'s email
     * @maxLength 50
     * @type string | undefined
    */
    CardOwnerEmail?: string;
    /**
     * @description Card Owner name.
     * @maxLength 50
     * @type string | undefined
    */
    CardOwnerName?: string;
    /**
     * @description Card Owner Phone.
     * @maxLength 50
     * @type string | undefined
    */
    CardOwnerPhone?: string;
    /**
     * @description Card Owner identity Number
     * @maxLength 50
     * @type string | undefined
    */
    CardOwnerIdentityNumber?: string;
    /**
     * @description number of payments for the deal
     * @type integer | undefined
    */
    NumOfPayments?: number;
    /**
     * @description Card expiration year.
     * @type integer | undefined, int32
    */
    CardYear?: number;
    /**
     * @description card expiration month.
     * @type integer | undefined, int32
    */
    CardMonth?: number;
    /**
     * @description Custome Fields values that were sent alongside the deal.
     * @type array
    */
    CustomFields?: CustomField[] | null;
    /**
     * @description boolean - is the card from isreal or is it a tourist card
     * @type boolean | undefined
    */
    IsAbroadCard?: boolean;
};