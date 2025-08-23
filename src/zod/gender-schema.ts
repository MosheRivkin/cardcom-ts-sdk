import type { Gender } from '../types/Gender.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { z } from 'zod'

export const genderSchema = z.enum(['Unknown', 'male', 'female']) as unknown as ToZod<Gender>