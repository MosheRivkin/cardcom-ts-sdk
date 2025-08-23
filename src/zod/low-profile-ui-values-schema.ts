import type { LowProfileUIValues } from '../types/LowProfileUIValues.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { customFieldSchema } from './custom-field-schema.ts'
import { z } from 'zod'

/**
 * @description values that was filled the the card holder
 */
export const lowProfileUiValuesSchema = z
  .object({
    CardOwnerEmail: z.string().max(50).describe("Card Owner's email").optional(),
    CardOwnerName: z.string().max(50).describe('Card Owner name.').optional(),
    CardOwnerPhone: z.string().max(50).describe('Card Owner Phone.').optional(),
    CardOwnerIdentityNumber: z.string().max(50).describe('Card Owner identity Number').optional(),
    NumOfPayments: z.int().describe('number of payments for the deal').optional(),
    CardYear: z.int().describe('Card expiration year.').optional(),
    CardMonth: z.int().describe('card expiration month.').optional(),
    get CustomFields() {
      return z.array(customFieldSchema.describe('Custom field')).describe('Custome Fields values that were sent alongside the deal.').nullable().nullish()
    },
    IsAbroadCard: z.boolean().describe('boolean - is the card from isreal or is it a tourist card').optional(),
  })
  .describe('values that was filled the the card holder') as unknown as ToZod<LowProfileUIValues>