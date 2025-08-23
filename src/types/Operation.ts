export const operation = {
  ChargeOnly: 'ChargeOnly',
  ChargeAndCreateToken: 'ChargeAndCreateToken',
  CreateTokenOnly: 'CreateTokenOnly',
  SuspendedDeal: 'SuspendedDeal',
  Do3DSAndSubmit: 'Do3DSAndSubmit',
} as const

export type OperationEnum = (typeof operation)[keyof typeof operation]

export type Operation = OperationEnum