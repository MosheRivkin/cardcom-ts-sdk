export const cardNumberEntryMode = {
    "MagneticStip": "MagneticStip",
    "SelfService": "SelfService",
    "GasStationSelfService": "GasStationSelfService",
    "Contactless": "Contactless",
    "EmvContactless": "EmvContactless",
    "MobileContactless": "MobileContactless",
    "EmvMobileContactless": "EmvMobileContactless",
    "MobileNumber": "MobileNumber",
    "Emv": "Emv",
    "Phone": "Phone",
    "SignatureOnly": "SignatureOnly",
    "Internet": "Internet",
    "Fallback": "Fallback",
    "EmptyCandidateList": "EmptyCandidateList"
} as const;

export type CardNumberEntryModeEnum = (typeof cardNumberEntryMode)[keyof typeof cardNumberEntryMode];

export type CardNumberEntryMode = CardNumberEntryModeEnum;