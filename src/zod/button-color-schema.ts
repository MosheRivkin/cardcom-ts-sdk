import type { ButtonColor } from '../types/ButtonColor.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { z } from 'zod'

export const buttonColorSchema = z.enum(['Default', 'White', 'Black']) as unknown as ToZod<ButtonColor>