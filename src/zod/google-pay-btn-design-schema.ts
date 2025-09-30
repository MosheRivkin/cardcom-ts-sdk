import type { GooglePayBtnDesign } from '../types/GooglePayBtnDesign.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { buttonColorSchema } from './button-color-schema.ts'
import { buttonLocaleSchema } from './button-locale-schema.ts'
import { buttonTypeSchema } from './button-type-schema.ts'
import { z } from 'zod'

export const googlePayBtnDesignSchema: z.ZodObject<import("@kubb/plugin-zod/utils").ZodShape<GooglePayBtnDesign>> = z.object({
  get ButtonColor() {
    return buttonColorSchema.describe('GPay button color').optional()
  },
  get ButtonType() {
    return buttonTypeSchema.default('Buy').describe('GPay button type (text on the button)')
  },
  get ButtonLocale() {
    return buttonLocaleSchema.default('English').describe('GPay button language')
  },
  ButtonWidth: z.string().default('328').describe('GPay button width. Default 328 (px)').nullable().nullish(),
  ButtonHeight: z.string().default('4').describe('GPay button height. Default 40 (px)').nullable().nullish(),
}) as unknown as ToZod<GooglePayBtnDesign>