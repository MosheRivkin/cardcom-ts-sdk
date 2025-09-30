import type { DocumentLP } from '../types/DocumentLP.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { documentBaseSchema } from './document-base-schema.ts'
import { z } from 'zod'

export const documentLpSchema: z.ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<DocumentLP>, "passthrough"> = documentBaseSchema.and(
  z.object({
    IsAllowEditDocument: z
      .boolean()
      .default(false)
      .describe('Allow the card owner to edit the "document" information: To, address, phone... (not the products and amount) , default = false')
      .nullable()
      .nullish(),
    IsShowOnlyDocument: z
      .boolean()
      .default(false)
      .describe('Will only show the document information to the card owner. NO DOCCUMENT WILL BE CREATED. default = false (system will create a document)')
      .nullable()
      .nullish(),
    Language: z.string().default('he').describe('The language of the document to be created. ').nullable().nullish(),
  }),
) as unknown as ToZod<DocumentLP>