export const eciType: { readonly Empty: "Empty"; readonly NoCavvUcaf: "NoCavvUcaf"; readonly CavvUcafNotIssuer: "CavvUcafNotIssuer"; readonly CavvUcaf: "CavvUcaf"; } = {
  Empty: 'Empty',
  NoCavvUcaf: 'NoCavvUcaf',
  CavvUcafNotIssuer: 'CavvUcafNotIssuer',
  CavvUcaf: 'CavvUcaf',
} as const

export type EciTypeEnum = (typeof eciType)[keyof typeof eciType]

export type EciType = EciTypeEnum