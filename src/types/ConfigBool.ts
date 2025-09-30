export const configBool: { readonly auto: "auto"; readonly true: "true"; readonly false: "false"; } = {
  auto: 'auto',
  true: 'true',
  false: 'false',
} as const

export type ConfigBoolEnum = (typeof configBool)[keyof typeof configBool]

export type ConfigBool = ConfigBoolEnum