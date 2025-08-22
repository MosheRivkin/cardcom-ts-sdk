export type CancelDocRequest = {
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
     * @description document number to cancel
     * @type integer, int32
    */
    DocumentNumber: number;
    /**
     * @description document type to cancel
     * @type integer, int32
    */
    DocumentType: number;
    /**
     * @description Do not send the new cancell document client
     * @default false
     * @type boolean | undefined
    */
    IsCancelEmailSend?: boolean;
    /**
     * @description Send sms with link to download document
     * @default false
     * @type boolean | undefined
    */
    IsSendSMS?: boolean;
    /**
     * @description Do not cancel document if credit card transaction use deposit to the acquire
     * @default false
     * @type boolean | undefined
    */
    IsCreditCardCancelOnly?: boolean;
};