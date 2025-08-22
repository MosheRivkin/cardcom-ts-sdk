export const citizenship = {
    "Unknown": "Unknown",
    "Israel": "Israel",
    "Expatriate": "Expatriate",
    "ResidentArea": "ResidentArea"
} as const;

export type CitizenshipEnum = (typeof citizenship)[keyof typeof citizenship];

export type Citizenship = CitizenshipEnum;