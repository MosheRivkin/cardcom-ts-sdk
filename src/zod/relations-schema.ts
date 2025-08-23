import type { Relations } from '../types/Relations.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { z } from 'zod'

export const relationsSchema = z.enum(['AuthorizedSignature', 'AuthorizedSignatureForeignResident']) as unknown as ToZod<Relations>