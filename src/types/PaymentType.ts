export const paymentType = {
    "Unknown": "Unknown",
    "Standard": "Standard",
    "SpecialCredits": "SpecialCredits",
    "ImmediateCharge": "ImmediateCharge",
    "CreditClub": "CreditClub",
    "SuperCredit": "SuperCredit",
    "InstallmentCredit": "InstallmentCredit",
    "Payments": "Payments",
    "ClubPatments": "ClubPatments"
} as const;

export type PaymentTypeEnum = (typeof paymentType)[keyof typeof paymentType];

export type PaymentType = PaymentTypeEnum;