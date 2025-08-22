import type { Brand2 } from "./Brand2.ts";
import type { LinkedTransactionsType } from "./LinkedTransactionsType.ts";
import type { TXNType } from "./TXNType.ts";

export type FinancialTransactions = {
    /**
     * @type string | undefined, date-time
    */
    CreateDate?: string;
    /**
     * @type integer, int32
    */
    FirstCardDigits?: number | null;
    /**
     * @type integer | undefined, int64
    */
    Id?: number;
    /**
     * @description ARN is Solek transaction Id, this is the original ARN and this transaction ARN
     * @type string
    */
    ARN?: string | null;
    /**
     * @description The Sapak that will get the Money
     * @type integer | undefined, int32
    */
    SapakNumber?: number;
    /**
     * @description The Sapak that will get the Money
     * @type number | undefined, decimal
    */
    OrigTransactionAmount?: number;
    /**
     * @type integer, int32
    */
    BankDepositesId?: number | null;
    /**
     * @type string, date-time
    */
    BankDepositAt?: string | null;
    /**
     * @type integer | undefined, int64
    */
    CreditCardTransactionsId?: number;
    /**
     * @description מספר הפקדה / ריכוז
     * @type integer | undefined, int32
    */
    ConcentrationNumber?: number;
    /**
     * @description bank deposit currency
     * @type integer | undefined
    */
    DepositeCurrency?: number;
    /**
     * @description מספר הפקדה / ריכוז
     * @type integer | undefined
    */
    ActionCode?: number;
    /**
     * @description CreditCard original transactions currency
     * @type integer | undefined
    */
    CreditCardCurrency?: number;
    /**
     * @description Amount for Bank Deposite
     * @type number | undefined, decimal
    */
    DepositeAmount?: number;
    /**
     * @description Interchange Fee in percentage
     * @type number | undefined, decimal
    */
    IfPct?: number;
    /**
     * @description fee per transaction, in transaction currency
     * @type number | undefined, decimal
    */
    FeePerTrnAmt?: number;
    /**
     * @description per transaction fix commission in Deposite currency
     * @type number | undefined, decimal
    */
    FixFeeAmtDepoCurr?: number;
    /**
     * @description clube management commission percentage
     * @type number | undefined, decimal
    */
    MngtFeePct?: number;
    /**
     * @description סכום העסקה או סכום התשלום הרלונטי מטבע עסקה
     * @type number | undefined, decimal
    */
    BrutoOrgCurAmt?: number;
    /**
     * @description הנחת סולק היחסית לתשלום הרלונטי מטבע עסקה
     * @type number | undefined, decimal
    */
    DiscOrigCurrAmt?: number;
    /**
     * @description הנחת מועדון היחסית לתשלום הרלונטי מטבע עסקה
     * @type number | undefined, decimal
    */
    ClDscOrgCurAmt?: number;
    /**
     * @description סכום הנחה תמורת נקודות/כוכבים
     * @type number | undefined, decimal
    */
    DiscFreqShopAmt?: number;
    /**
     * @description Amount after discounts for calculation
     * @type number | undefined, decimal
    */
    AftDiscAmtDepoCur?: number;
    /**
     * @description fee in deposit currency
     * @type number | undefined, decimal
    */
    IfAmtDepoCur?: number;
    /**
     * @description VAT percentage for this transaction
     * @type number | undefined, decimal
    */
    VatPrc?: number;
    /**
     * @description VAT in deposit currency
     * @type number | undefined, decimal
    */
    VatIfNisDepoCur?: number;
    /**
     * @description base rate of index or Currency rate used in this transaction
     * @type number | undefined, decimal
    */
    CurrencyOrIndexRate?: number;
    /**
     * @description base rate of index or Currency rate used in this transaction
     * @type number | undefined, decimal
    */
    EffectiveCurrencyOrIndexRate?: number;
    /**
     * @description Estimate Deposite Date
     * @type string, date-time
    */
    EstimateDepositeDate?: string | null;
    /**
     * @description Estimate Deposite Date
     * @type integer | undefined
    */
    NoOfPmt?: number;
    /**
     * @description this payment number
     * @type integer | undefined
    */
    PmtNo?: number;
    /**
     * @type string | undefined
    */
    Brand?: Brand2;
    /**
     * @description Txn type
    */
    TxnType?: TXNType;
    /**
     * @description linked transactions type
    */
    IndexLinkType?: LinkedTransactionsType;
    /**
     * @description linked transactions type
     * @type string | undefined, date-time
    */
    PurchaseDate?: string;
    /**
     * @type string
    */
    UID?: string | null;
    /**
     * @type integer
    */
    Last4CardDigits?: number | null;
    /**
     * @description String representation of Last4CardDigits. Prevents zeros from being omitted
     * @type string
    */
    Last4CardDigitsStr?: string | null;
    /**
     * @description Mutav number in Meaged style work, information only
     * @type integer, int32
    */
    SapakMutavNumber?: number | null;
};