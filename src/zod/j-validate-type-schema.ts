import type { JValidateType } from '../types/JValidateType.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { z } from 'zod'

export const jValidateTypeSchema = z.union([z.literal(2), z.literal(5)]) as unknown as ToZod<JValidateType>