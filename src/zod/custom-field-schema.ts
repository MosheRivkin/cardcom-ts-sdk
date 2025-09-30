import type { CustomField } from '../types/CustomField.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { z } from 'zod'

/**
 * @description Custom field
 */
export const customFieldSchema: z.ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<CustomField>, "passthrough"> = z
  .object({
    Id: z.int().min(1).max(25).describe('Custom field id').optional(),
    Value: z.string().max(50).describe('Custom field value').optional(),
  })
  .describe('Custom field') as unknown as ToZod<CustomField>