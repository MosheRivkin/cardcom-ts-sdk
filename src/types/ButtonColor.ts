export const buttonColor = {
    "Default": "Default",
    "White": "White",
    "Black": "Black"
} as const;

export type ButtonColorEnum = (typeof buttonColor)[keyof typeof buttonColor];

export type ButtonColor = ButtonColorEnum;