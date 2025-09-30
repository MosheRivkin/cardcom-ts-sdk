import type { Gender } from '../types/Gender.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { z } from 'zod'

export const genderSchema: z.ZodType<import("src/index").GenderEnum, unknown, z.core.$ZodTypeInternals<import("src/index").GenderEnum, unknown>> = z.enum(['Unknown', 'male', 'female']) as unknown as ToZod<Gender>