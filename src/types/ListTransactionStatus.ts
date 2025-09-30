export const listTransactionStatus: { readonly Success: "Success"; readonly All: "All"; readonly Failure: "Failure"; } = {
  Success: 'Success',
  All: 'All',
  Failure: 'Failure',
} as const

export type ListTransactionStatusEnum = (typeof listTransactionStatus)[keyof typeof listTransactionStatus]

export type ListTransactionStatus = ListTransactionStatusEnum