import type { ExtFlexibleItemRsp } from "./ExtFlexibleItemRsp.ts";
import type { ExtProductRsp } from "./ExtProductRsp.ts";
import type { ExtTimeIntervalRsp } from "./ExtTimeIntervalRsp.ts";

/**
 * @description Recurring Payment info
*/
export type ExtRecurringPaymentsRsp = {
    /**
     * @description Cardcom for Recurring Id
     * @type integer, int32
    */
    RecurringId?: number | null;
    /**
     * @description private description - not shown to card holder
     * @type string
    */
    InternalDecription?: string | null;
    /**
     * @description next billing date
     * @type string | undefined, date-time
    */
    NextDateToBill?: string;
    /**
     * @description total num of charges to do
     * @type integer | undefined, int32
    */
    TotalNumOfBills?: number;
    /**
     * @description num of payments already charged
     * @type integer, int32
    */
    NumOfPaymentsAlreadyCharged?: number | null;
    /**
     * @description is recurring is active and will be chanrge
     * @type boolean
    */
    IsActive?: boolean | null;
    /**
     * @description the chanrge intervals, will be add to NextDateToBill (day, month , year)
    */
    ChargeIntervals?: ExtTimeIntervalRsp | null;
    /**
     * @description currency to charge , 1- NIS , 2 - USD , else iso currency table
     * @type integer | undefined, int32
    */
    FinalDebitCoinId?: number;
    /**
     * @description crate a document for the charge
     * @type boolean
    */
    IsDocumentCreate?: boolean | null;
    /**
     * @description the doc type that will be created , 0 for auto
     * @type integer, int32
    */
    DocTypeToCreate?: number | null;
    /**
     * @description private comment - not shown to card holder
     * @type string
    */
    Comment?: string | null;
    /**
     * @description add num of payments on the item descriptin in the document, add : (TotalNumOfBills of NumOfPaymentsAlreadyCharged )
     * @type boolean | undefined
    */
    IsPrintNumOfPayments?: boolean;
    /**
     * @description add the month of the \'NextDateToBill\' to the item description
     * @type boolean | undefined
    */
    IsPrintBillMonth?: boolean;
    /**
     * @description department id - for reports
     * @type integer | undefined
    */
    DepartmentId?: number;
    /**
     * @description use id - that create the recurring
     * @type integer | undefined, int32
    */
    UserId?: number;
    /**
     * @description custom value used for api
     * @type string
    */
    ReturnValue?: string | null;
    /**
     * @description termianl number to charge
     * @type integer, int32
    */
    ChargeInTerminal?: number | null;
    /**
     * @description amount to charge, only if IsByProducts==false
    */
    FlexItem?: ExtFlexibleItemRsp | null;
    /**
     * @description if true then ProdList is used to calculate cost , if flase then FlexItem is used to calculate cost
     * @type boolean | undefined
    */
    IsByProducts?: boolean;
    /**
     * @description list of prod to change , and amount will be taken for the system products table, only if IsByProducts==true
     * @type array
    */
    ProdList?: ExtProductRsp[] | null;
};