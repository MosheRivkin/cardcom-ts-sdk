export type RecurringPaymentHistory = {
    /**
     * @description uniq id (per company)
     * @type integer | undefined, int32
    */
    RowID?: number;
    /**
     * @description Cardcom for parent Recurring Id
     * @type integer | undefined, int32
    */
    RecurringId?: number;
    /**
     * @type integer | undefined, int32
    */
    TerminalNumber?: number;
    /**
     * @type integer | undefined, int32
    */
    AccountID?: number;
    /**
     * @type string
    */
    DocumentDescription?: string | null;
    /**
     * @type string, date-time
    */
    LastDate?: string | null;
    /**
     * @type string, date-time
    */
    OriginalNextDate?: string | null;
    /**
     * @type integer | undefined, int32
    */
    FinalDebitCoinID?: number;
    /**
     * @description The sum that was Billed
     * @type number | undefined, decimal
    */
    SumToBill?: number;
    /**
     * @type number | undefined, decimal
    */
    SumToBillNoVat?: number;
    /**
     * @type integer | undefined
    */
    DepartmentID?: number;
    /**
     * @type boolean | undefined
    */
    IsDocumentCreate?: boolean;
    /**
     * @type integer, int32
    */
    AgentID?: number | null;
    /**
     * @type integer, int32
    */
    PaymentNum?: number | null;
    /**
     * @type boolean | undefined
    */
    IsReNewOrder?: boolean;
    /**
     * @type string
    */
    ProductID?: string | null;
    /**
     * @type integer, int64
    */
    TranzactionId?: number | null;
    /**
     * @type integer, int32
    */
    ResposeCode?: number | null;
    /**
     * @type integer, int32
    */
    ProcessID?: number | null;
    /**
     * @type integer
    */
    DocumentType?: number | null;
    /**
     * @type integer, int32
    */
    DocumentNumber?: number | null;
    /**
     * @type number | undefined, decimal
    */
    Quantity?: number;
    /**
     * @type number | undefined, decimal
    */
    UnitPrice?: number;
    /**
     * @type number | undefined, decimal
    */
    UnitPriceNoVAT?: number;
    /**
     * @type boolean | undefined
    */
    IsIncludesVAT?: boolean;
    /**
     * @type number | undefined, decimal
    */
    VAT?: number;
    /**
     * @type integer | undefined, int32
    */
    BillingAttempts?: number;
    /**
     * @type string | undefined, date-time
    */
    CreateDate?: string;
    /**
     * @description 0 - Bank , 1 - Credit Card , 2 - Retainer
     * @type integer | undefined
    */
    ActualBillingType?: number;
    /**
     * @type integer, int32
    */
    NumOfCreditPayments?: number | null;
    /**
     * @description SUCCESSFUL , PENDINGFORPROCESSING , DEBTAUTOBILLING , LOSTDEBT , PAYBYOTHERE  , ONHOLD , UNKNOWN + (error Code)
     * @type string
    */
    Status?: string | null;
};