export const buttonType: { readonly Book: "Book"; readonly Buy: "Buy"; readonly Checkout: "Checkout"; readonly Donate: "Donate"; readonly Order: "Order"; readonly Pay: "Pay"; readonly Plain: "Plain"; readonly Subscribe: "Subscribe"; } = {
  Book: 'Book',
  Buy: 'Buy',
  Checkout: 'Checkout',
  Donate: 'Donate',
  Order: 'Order',
  Pay: 'Pay',
  Plain: 'Plain',
  Subscribe: 'Subscribe',
} as const

export type ButtonTypeEnum = (typeof buttonType)[keyof typeof buttonType]

export type ButtonType = ButtonTypeEnum