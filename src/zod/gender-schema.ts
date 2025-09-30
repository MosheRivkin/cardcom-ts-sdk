import type { Gender } from '../types/Gender.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { z } from 'zod'

export const genderSchema: z.ZodType<import("/home/m/dev/git/cardcom-ts-sdk/src/index").GenderEnum, unknown, z.core.$ZodTypeInternals<import("/home/m/dev/git/cardcom-ts-sdk/src/index").GenderEnum, unknown>> = z.enum(['Unknown', 'male', 'female']) as unknown as ToZod<Gender>