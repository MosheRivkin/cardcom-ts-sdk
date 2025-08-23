import type { ButtonType } from '../types/ButtonType.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { z } from 'zod'

export const buttonTypeSchema = z.enum(['Book', 'Buy', 'Checkout', 'Donate', 'Order', 'Pay', 'Plain', 'Subscribe']) as unknown as ToZod<ButtonType>