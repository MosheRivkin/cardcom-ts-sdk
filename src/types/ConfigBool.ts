export const configBool = {
    "auto": "auto",
    "true": "true",
    "false": "false"
} as const;

export type ConfigBoolEnum = (typeof configBool)[keyof typeof configBool];

export type ConfigBool = ConfigBoolEnum;