export const threeDSecureState: { readonly Auto: "Auto"; readonly Enabled: "Enabled"; readonly Disabled: "Disabled"; } = {
  Auto: 'Auto',
  Enabled: 'Enabled',
  Disabled: 'Disabled',
} as const

export type ThreeDSecureStateEnum = (typeof threeDSecureState)[keyof typeof threeDSecureState]

export type ThreeDSecureState = ThreeDSecureStateEnum