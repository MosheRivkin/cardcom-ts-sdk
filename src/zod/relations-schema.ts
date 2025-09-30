import type { Relations } from '../types/Relations.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { z } from 'zod'

export const relationsSchema: z.ZodType<import("/home/m/dev/git/cardcom-ts-sdk/src/index").RelationsEnum, unknown, z.core.$ZodTypeInternals<import("/home/m/dev/git/cardcom-ts-sdk/src/index").RelationsEnum, unknown>> = z.enum(['AuthorizedSignature', 'AuthorizedSignatureForeignResident']) as unknown as ToZod<Relations>