export const linkedTransactionsTypeEnum: { readonly NotLink: 1; readonly USD: 4; readonly Index: 8; } = {
  NotLink: 1,
  USD: 4,
  Index: 8,
} as const

export type LinkedTransactionsTypeEnum = (typeof linkedTransactionsTypeEnum)[keyof typeof linkedTransactionsTypeEnum]

export type LinkedTransactionsType = LinkedTransactionsTypeEnum