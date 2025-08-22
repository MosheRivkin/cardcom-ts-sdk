export const MTI = {
    "Request_100": "Request_100",
    "RequestRepeat_101": "RequestRepeat_101",
    "ResponseToRequest_110": "ResponseToRequest_110",
    "RequestCancel_400": "RequestCancel_400",
    "ResponseToRequestCancel_410": "ResponseToRequestCancel_410",
    "RequestReversal": "RequestReversal",
    "ResponseToRequestReversal_430": "ResponseToRequestReversal_430",
    "CreditCardCharge_500": "CreditCardCharge_500",
    "CreditRefund_520": "CreditRefund_520",
    "Info_540": "Info_540",
    "RequestNetwork_800": "RequestNetwork_800",
    "ResponseNetwork_810": "ResponseNetwork_810"
} as const;

export type MTIEnum = (typeof MTI)[keyof typeof MTI];

export type MTI = MTIEnum;