export const listTransactionStatus = {
  Success: 'Success',
  All: 'All',
  Failure: 'Failure',
} as const

export type ListTransactionStatusEnum = (typeof listTransactionStatus)[keyof typeof listTransactionStatus]

export type ListTransactionStatus = ListTransactionStatusEnum