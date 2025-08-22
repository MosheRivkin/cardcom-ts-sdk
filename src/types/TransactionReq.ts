import type { AdvancedTran } from "./AdvancedTran.ts";
import type { CardOwnerInformation } from "./CardOwnerInformation.ts";
import type { CustomField } from "./CustomField.ts";
import type { DocumentTran } from "./DocumentTran.ts";

export type TransactionReq = {
    /**
     * @description Cardcom terminal number
     * @type integer, int32
    */
    TerminalNumber: number;
    /**
     * @description Api Name for authentication
     * @minLength 1
     * @type string
    */
    ApiName: string;
    /**
     * @description Amount of transaction
     * @type number, decimal
    */
    Amount: number;
    /**
     * @description credit Card number
     * @type string
    */
    CardNumber?: string | null;
    /**
     * @description credit Card token
     * @type string, guid
    */
    Token?: string | null;
    /**
     * @description External Merchant Id
     * @type string
    */
    ExternalMerchantId?: string | null;
    /**
     * @description credit Card Expiration date
     * @type string
    */
    CardExpirationMMYY?: string | null;
    /**
     * @description credit Card CVV
     * @type string
    */
    CVV2?: string | null;
    /**
     * @description External Uniq Tran Id , send your uniq trnasaction id to prevent duplication of transaction. if the same ExternalUniqTranId will be send you will receive and error code 608. see \'ExternalUniqUniqTranIdResponse\'
     * @type string
    */
    ExternalUniqTranId?: string | null;
    /**
     * @description External Uniq Tran Id , send your uniq trnasaction id to prevent duplication of transaction. if the same ExternalUniqTranId will be send you will receive and error code 608. see \'ExternalUniqUniqTranIdResponse\'
     * @default false
     * @type boolean
    */
    ExternalUniqUniqTranIdResponse?: boolean | null;
    /**
     * @description Maximum number of payment to show to card holder , default 1
     * @minLength 1
     * @maxLength 36
     * @default 1
     * @type integer, int32
    */
    NumOfPayments?: number | null;
    CardOwnerInformation?: CardOwnerInformation | null;
    /**
     * @description ISO Coin Code ,1 - ILS, 2 - USD, else ISO Coin from list : https://en.wikipedia.org/wiki/ISO_4217
     * @default 1
     * @type integer, int32
    */
    ISOCoinId?: number | null;
    /**
     * @description Fill the value of CustomFields information
     * @type array
    */
    CustomFields?: CustomField[] | null;
    /**
     * @description Advanced transaction options
    */
    Advanced?: AdvancedTran | null;
    /**
     * @description Document information , will create document if transaction succeeded
    */
    Document?: DocumentTran | null;
};