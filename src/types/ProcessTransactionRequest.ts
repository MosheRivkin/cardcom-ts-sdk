import type { SdkTransactionInfo } from "./SdkTransactionInfo.ts";

export type ProcessTransactionRequest = {
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
     * @description Terminal number at Cardcom
     * @type integer, int32
    */
    TerminalNumber: number;
    /**
     * @description The value returned in the PrepareDevice response
     * @type integer, int32
    */
    RavMutavTerminalNumber?: number | null;
    /**
     * @description Mobile device UUID
     * @minLength 1
     * @maxLength 50
     * @type string
    */
    DeviceUUID: string;
    /**
     * @description SDK transaction info
    */
    TransactionInfo: SdkTransactionInfo;
};