export const filterBy: { readonly CreateDate: "CreateDate"; readonly LastUpdateDate: "LastUpdateDate"; } = {
  CreateDate: 'CreateDate',
  LastUpdateDate: 'LastUpdateDate',
} as const

export type FilterByEnum = (typeof filterBy)[keyof typeof filterBy]

export type FilterBy = FilterByEnum