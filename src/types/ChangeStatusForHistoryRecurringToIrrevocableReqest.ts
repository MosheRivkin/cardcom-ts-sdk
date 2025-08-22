import type { RecurringStatus } from "./RecurringStatus.ts";

export type ChangeStatusForHistoryRecurringToIrrevocableReqest = {
    /**
     * @description API User Name
     * @type string
    */
    ApiUserName?: string | null;
    /**
     * @description API Password
     * @type string
    */
    ApiPassword?: string | null;
    /**
     * @type integer, int32
    */
    RowID?: number | null;
    /**
     * @description ProcessId value to be updated
    */
    ChangeTo?: RecurringStatus;
};