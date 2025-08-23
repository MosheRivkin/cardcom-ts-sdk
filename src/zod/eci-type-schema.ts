import type { EciType } from '../types/EciType.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { z } from 'zod'

export const eciTypeSchema = z.enum(['Empty', 'NoCavvUcaf', 'CavvUcafNotIssuer', 'CavvUcaf']) as unknown as ToZod<EciType>