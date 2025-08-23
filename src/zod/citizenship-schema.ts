import type { Citizenship } from '../types/Citizenship.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { z } from 'zod'

export const citizenshipSchema = z.enum(['Unknown', 'Israel', 'Expatriate', 'ResidentArea']) as unknown as ToZod<Citizenship>