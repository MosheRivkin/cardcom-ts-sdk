export const linkedTransactionsTypeEnum = {
  NotLink: 1,
  USD: 4,
  Index: 8,
} as const

export type LinkedTransactionsTypeEnum = (typeof linkedTransactionsTypeEnum)[keyof typeof linkedTransactionsTypeEnum]

export type LinkedTransactionsType = LinkedTransactionsTypeEnum