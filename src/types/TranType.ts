export const tranType = {
    "Info_0": "Info_0",
    "Charge_1": "Charge_1",
    "Prika_2": "Prika_2",
    "Meulachet_3": "Meulachet_3",
    "Cashback_6": "Cashback_6",
    "Cash_7": "Cash_7",
    "DirectDebite_11": "DirectDebite_11",
    "ManualCashDisbursement_12": "ManualCashDisbursement_12",
    "Yitra_30": "Yitra_30",
    "Refund_53": "Refund_53",
    "Recharge_55": "Recharge_55"
} as const;

export type TranTypeEnum = (typeof tranType)[keyof typeof tranType];

export type TranType = TranTypeEnum;