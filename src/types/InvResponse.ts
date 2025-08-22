export type InvResponse = {
    /**
     * @type integer | undefined
    */
    ResponseCode?: number;
    /**
     * @type string
    */
    Description?: string | null;
    /**
     * @type integer | undefined, int32
    */
    InvoiceNumber?: number;
    /**
     * @type integer | undefined, int32
    */
    InvoiceType?: number;
    /**
     * @type integer, int32
    */
    AccountID?: number | null;
    /**
     * @type boolean | undefined
    */
    CardSaved?: boolean;
    /**
     * @type boolean
    */
    EmailSendWasQueued?: boolean | null;
    /**
     * @type string
    */
    InvoiceLink?: string | null;
    /**
     * @type string
    */
    TaxAuthorityAllocationNumber?: string | null;
    /**
     * @type string
    */
    PaymentLink?: string | null;
};