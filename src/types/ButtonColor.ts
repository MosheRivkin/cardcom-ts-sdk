export const buttonColor: { readonly Default: "Default"; readonly White: "White"; readonly Black: "Black"; } = {
  Default: 'Default',
  White: 'White',
  Black: 'Black',
} as const

export type ButtonColorEnum = (typeof buttonColor)[keyof typeof buttonColor]

export type ButtonColor = ButtonColorEnum