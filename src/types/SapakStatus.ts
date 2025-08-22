export const sapakStatus = {
    "UnderTest": "UnderTest",
    "InProcess": "InProcess",
    "Approved": "Approved",
    "Blocked": "Blocked",
    "Error": "Error"
} as const;

export type SapakStatusEnum = (typeof sapakStatus)[keyof typeof sapakStatus];

export type SapakStatus = SapakStatusEnum;