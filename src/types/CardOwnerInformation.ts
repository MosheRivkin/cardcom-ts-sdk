export type CardOwnerInformation = {
    /**
     * @type string
    */
    Phone?: string | null;
    /**
     * @type string
    */
    FullName?: string | null;
    /**
     * @description credit card owner identity number for israel cards only
     * @type string
    */
    IdentityNumber?: string | null;
    /**
     * @type string
    */
    CardOwnerEmail?: string | null;
    /**
     * @type string
    */
    AvsZip?: string | null;
    /**
     * @type string
    */
    AvsAddress?: string | null;
    /**
     * @type string
    */
    AvsCity?: string | null;
};