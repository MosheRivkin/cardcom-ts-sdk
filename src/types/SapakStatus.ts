export const sapakStatus: { readonly UnderTest: "UnderTest"; readonly InProcess: "InProcess"; readonly Approved: "Approved"; readonly Blocked: "Blocked"; readonly Error: "Error"; } = {
  UnderTest: 'UnderTest',
  InProcess: 'InProcess',
  Approved: 'Approved',
  Blocked: 'Blocked',
  Error: 'Error',
} as const

export type SapakStatusEnum = (typeof sapakStatus)[keyof typeof sapakStatus]

export type SapakStatus = SapakStatusEnum