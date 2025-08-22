export type MeagedKycInfo = {
    /**
     * @description MCC_CardCom
     * @type integer, int32
    */
    Mcc: number;
    /**
     * @type number, decimal
    */
    MaxNumberOfPayments: number;
    /**
     * @type array
    */
    ElectronicCommerceUrl?: string[] | null;
};