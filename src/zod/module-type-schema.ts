import type { ModuleType } from '../types/ModuleType.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { z } from 'zod'

export const moduleTypeSchema: z.ZodObject<import("@kubb/plugin-zod/utils").ZodShape<ModuleType>> = z.object({
  ModuleID: z.string().nullable().nullish(),
}) as unknown as ToZod<ModuleType>