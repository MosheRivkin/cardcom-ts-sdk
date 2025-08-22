export const gender2Enum = {
    "Unknown": 0,
    "male": 1,
    "female": 2
} as const;

export type Gender2Enum = (typeof gender2Enum)[keyof typeof gender2Enum];

export type Gender2 = Gender2Enum;