export const buttonType = {
    "Book": "Book",
    "Buy": "Buy",
    "Checkout": "Checkout",
    "Donate": "Donate",
    "Order": "Order",
    "Pay": "Pay",
    "Plain": "Plain",
    "Subscribe": "Subscribe"
} as const;

export type ButtonTypeEnum = (typeof buttonType)[keyof typeof buttonType];

export type ButtonType = ButtonTypeEnum;