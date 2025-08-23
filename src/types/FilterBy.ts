export const filterBy = {
  CreateDate: 'CreateDate',
  LastUpdateDate: 'LastUpdateDate',
} as const

export type FilterByEnum = (typeof filterBy)[keyof typeof filterBy]

export type FilterBy = FilterByEnum