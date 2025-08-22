export type CancelDocResponse = {
    /**
     * @description if equel zero then success , else , a develper error see Description for more info
     * @type integer | undefined, int32
    */
    ResponseCode?: number;
    /**
     * @description Description of the ResponseCode
     * @maxLength 250
     * @type string
    */
    Description?: string | null;
    /**
     * @description New document number
     * @type integer, int32
    */
    NewDocumentNumber?: number | null;
    /**
     * @description New document type
     * @type integer, int32
    */
    NewDocumentType?: number | null;
    /**
     * @description Account ID
     * @type integer, int32
    */
    AccountID?: number | null;
};