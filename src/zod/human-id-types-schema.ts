import type { HumanIDTypes } from '../types/HumanIDTypes.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { z } from 'zod'

export const humanIdTypesSchema = z.enum(['IDNumber', 'Passport']) as unknown as ToZod<HumanIDTypes>