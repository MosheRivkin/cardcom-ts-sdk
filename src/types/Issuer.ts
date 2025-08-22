export const issuer = {
    "NonIsrael": "NonIsrael",
    "Isracard": "Isracard",
    "CAL": "CAL",
    "Diners": "Diners",
    "AmericanExpress": "AmericanExpress",
    "JCB": "JCB",
    "Laumicard": "Laumicard"
} as const;

export type IssuerEnum = (typeof issuer)[keyof typeof issuer];

export type Issuer = IssuerEnum;