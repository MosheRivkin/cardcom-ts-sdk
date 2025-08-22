export const eciType = {
    "Empty": "Empty",
    "NoCavvUcaf": "NoCavvUcaf",
    "CavvUcafNotIssuer": "CavvUcafNotIssuer",
    "CavvUcaf": "CavvUcaf"
} as const;

export type EciTypeEnum = (typeof eciType)[keyof typeof eciType];

export type EciType = EciTypeEnum;