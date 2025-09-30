import type { ButtonColor } from '../types/ButtonColor.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { z } from 'zod'

export const buttonColorSchema: z.ZodType<import("src/index").ButtonColorEnum, unknown, z.core.$ZodTypeInternals<import("src/index").ButtonColorEnum, unknown>> = z.enum(['Default', 'White', 'Black']) as unknown as ToZod<ButtonColor>