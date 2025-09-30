import type { Relations } from '../types/Relations.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { z } from 'zod'

export const relationsSchema: z.ZodType<import("src/index").RelationsEnum, unknown, z.core.$ZodTypeInternals<import("src/index").RelationsEnum, unknown>> = z.enum(['AuthorizedSignature', 'AuthorizedSignatureForeignResident']) as unknown as ToZod<Relations>