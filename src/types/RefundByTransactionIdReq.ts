import type { CustomField } from "./CustomField.ts";

export type RefundByTransactionIdReq = {
    /**
     * @description Api Name for authentication
     * @minLength 1
     * @type string
    */
    ApiName: string;
    /**
     * @description Api password for authentication
     * @minLength 1
     * @type string
    */
    ApiPassword: string;
    /**
     * @description The Id for refund
     * @type integer, int64
    */
    TransactionId: number;
    /**
     * @description External deal Id (parameter shopify)
     * @type string
    */
    ExternalDealId?: string | null;
    /**
     * @description External Merchant Id (parameter shopify)
     * @type string
    */
    ExternalMerchantId?: string | null;
    /**
     * @description Partial Sum for refund
     * @type number, decimal
    */
    PartialSum?: number | null;
    /**
     * @description Cancellation only, before deposit of the transaction
     * @default false
     * @type boolean
    */
    CancelOnly?: boolean | null;
    /**
     * @description override original transaction SapalMutav value
     * @type string
    */
    SapakMutav?: string | null;
    /**
     * @description Allow Multiple Refunds on the same transaction
     * @default false
     * @type boolean
    */
    AllowMultipleRefunds?: boolean | null;
    /**
     * @description Custom Fields
     * @type array
    */
    CustomFields?: CustomField[] | null;
};