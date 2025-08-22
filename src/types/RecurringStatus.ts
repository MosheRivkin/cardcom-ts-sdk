export const recurringStatus = {
    "DebtForTracking": "DebtForTracking",
    "NoOtherPaymentMethod": "NoOtherPaymentMethod",
    "BadDebt": "BadDebt"
} as const;

export type RecurringStatusEnum = (typeof recurringStatus)[keyof typeof recurringStatus];

export type RecurringStatus = RecurringStatusEnum;