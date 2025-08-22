export const threeDSecureState = {
    "Auto": "Auto",
    "Enabled": "Enabled",
    "Disabled": "Disabled"
} as const;

export type ThreeDSecureStateEnum = (typeof threeDSecureState)[keyof typeof threeDSecureState];

export type ThreeDSecureState = ThreeDSecureStateEnum;