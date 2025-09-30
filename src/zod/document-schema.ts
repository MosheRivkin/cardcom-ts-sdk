import type { Document } from '../types/Document.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { documentBaseSchema } from './document-base-schema.ts'
import { documentToCreateSchema } from './document-to-create-schema.ts'
import { z } from 'zod'

export const documentSchema: z.ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<Document>, "passthrough"> = documentBaseSchema.and(
  z.object({
    ManualNumber: z.string().nullable().nullish(),
    DocumentDate: z.string().nullable().nullish(),
    ValueDate: z.string().nullable().nullish(),
    ISOCoinID: z.int().describe('ISOCoinID. 1=ILS, 2=USD, the rest as described in ISO. Default is 1').optional(),
    ISOCoinName: z.string().describe('ISOCoinName as described in ISO. if ISOCoinID is provided this property is not needed.').nullable().nullish(),
    Languge: z
      .string()
      .describe("Language. 'he' or 'en'. Default is he. When providing AccountID the account language will override this property.")
      .nullable()
      .nullish(),
    get DocumentTypeToCreate() {
      return documentToCreateSchema.describe('The type of the document')
    },
  }),
) as unknown as ToZod<Document>