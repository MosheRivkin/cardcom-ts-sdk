export const acquire = {
    "Unknown": "Unknown",
    "Isracard": "Isracard",
    "CAL": "CAL",
    "Diners": "Diners",
    "AmericanExpress": "AmericanExpress",
    "Laumicard": "Laumicard",
    "CardCom": "CardCom",
    "PayPal": "PayPal",
    "Upay": "Upay",
    "PayMe": "PayMe"
} as const;

export type AcquireEnum = (typeof acquire)[keyof typeof acquire];

export type Acquire = AcquireEnum;