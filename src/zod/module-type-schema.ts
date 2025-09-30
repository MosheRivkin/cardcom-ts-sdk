import type { ModuleType } from '../types/ModuleType.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { z } from 'zod'

export const moduleTypeSchema: z.ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<ModuleType>, "passthrough"> = z.object({
  ModuleID: z.string().nullable().nullish(),
}) as unknown as ToZod<ModuleType>