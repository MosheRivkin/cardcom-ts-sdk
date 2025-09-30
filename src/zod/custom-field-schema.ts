import type { CustomField } from '../types/CustomField.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { z } from 'zod'

/**
 * @description Custom field
 */
export const customFieldSchema: z.ZodObject<import("@kubb/plugin-zod/utils").ZodShape<CustomField>> = z
  .object({
    Id: z.int().min(1).max(25).describe('Custom field id').optional(),
    Value: z.string().max(50).describe('Custom field value').optional(),
  })
  .describe('Custom field') as unknown as ToZod<CustomField>