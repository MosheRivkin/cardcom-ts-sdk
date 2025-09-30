import type { Products } from '../types/Products.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { z } from 'zod'

/**
 * @description Products
 */
export const productsSchema: z.ZodObject<import("@kubb/plugin-zod/utils").ZodShape<Products>> = z
  .object({
    ProductID: z.string().max(50).describe("Product ID , exemple 'AVG-BB-10;").nullable().nullish(),
    Description: z.string().min(1).max(250).describe('product description'),
    Quantity: z.number().min(-99999.99).max(99999.99).default(1).describe('quantity').nullable().nullish(),
    UnitCost: z.number().min(-9999999999.99).max(9999999999.99).default(0).describe('cost of one unit'),
    TotalLineCost: z
      .number()
      .default(0)
      .describe('Recommended, if the Quantity contains decimal point send the total line cost to prevent round errors')
      .nullable()
      .nullish(),
    IsVatFree: z.boolean().default(false).describe('Is this product VAT Free , used for mix VAT items in one documents').nullable().nullish(),
  })
  .describe('Products') as unknown as ToZod<Products>