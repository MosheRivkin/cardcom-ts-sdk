import type { ActionCode } from "./ActionCode.ts";
import type { Brand2 } from "./Brand2.ts";
import type { EciType } from "./EciType.ts";
import type { MTI } from "./MTI.ts";
import type { TranType } from "./TranType.ts";

export type CreditCardTransaction = {
    /**
     * @type string | undefined, date-time
    */
    CreateDate?: string;
    /**
     * @type integer | undefined, int64
    */
    Id?: number;
    /**
     * @description The Sapak that will get the Money
     * @type integer, int32
    */
    SapakNumber?: number | null;
    /**
     * @type string
    */
    ARN?: string | null;
    /**
     * @type string | undefined, date-time
    */
    TransacDate?: string;
    /**
     * @type string | undefined, duration
    */
    TransacTime?: string;
    /**
     * @type string | undefined, date-time
    */
    TransmissionDate?: string;
    /**
     * @type string | undefined, duration
    */
    TransmissionTime?: string;
    /**
     * @type string | undefined
    */
    TranType?: TranType;
    /**
     * @type string
    */
    Rrn?: string | null;
    /**
     * @type number | undefined, decimal
    */
    Amount?: number;
    /**
     * @type number | undefined, decimal
    */
    FirstPayment?: number;
    /**
     * @type number | undefined, decimal
    */
    NotFirstPayment?: number;
    /**
     * @type integer | undefined, int32
    */
    NoPayments?: number;
    /**
     * @type integer | undefined
    */
    IndexPayment?: number;
    /**
     * @type string | undefined, date-time
    */
    Agg_PayDay?: string;
    /**
     * @type number | undefined, decimal
    */
    Agg_IfPac?: number;
    /**
     * @type string | undefined
    */
    ActionCode?: ActionCode;
    /**
     * @type integer
    */
    Last4Digits?: number | null;
    /**
     * @description String representation of Last4Digits. Prevents zeros from being omitted.
     * @type string
    */
    Last4DigitsStr?: string | null;
    /**
     * @type integer, int32
    */
    First7Digits?: number | null;
    /**
     * @type string
    */
    Uid?: string | null;
    /**
     * @type string | undefined
    */
    Mti?: MTI;
    /**
     * @type integer | undefined, int32
    */
    SessionNumber?: number;
    /**
     * @type string
    */
    CouponNumber?: string | null;
    /**
     * @type string
    */
    AuthorizeNo?: string | null;
    /**
     * @type integer | undefined, int32
    */
    Retailer?: number;
    /**
     * @type string | undefined
    */
    Brand?: Brand2;
    /**
     * @type number | undefined, decimal
    */
    Agg_IfPctFixAmt?: number;
    /**
     * @type integer | undefined
    */
    OriginCurrency?: number;
    /**
     * @type integer | undefined
    */
    PaymentCurrency?: number;
    /**
     * @description Mutav number in Meaged style work, information only
     * @type integer | undefined, int32
    */
    SapakMutavNumber?: number;
    /**
     * @description Secure transaction indicator
    */
    Eci?: EciType;
};