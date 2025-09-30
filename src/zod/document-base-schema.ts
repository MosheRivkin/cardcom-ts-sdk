import type { DocumentBase } from '../types/DocumentBase.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { advancedDocumentDefinitionSchema } from './advanced-document-definition-schema.ts'
import { documentToCreateSchema } from './document-to-create-schema.ts'
import { productsSchema } from './products-schema.ts'
import { z } from 'zod'

export const documentBaseSchema: z.ZodObject<import("@kubb/plugin-zod/utils").ZodShape<DocumentBase>> = z.object({
  get DocumentTypeToCreate() {
    return documentToCreateSchema
      .default('Auto')
      .describe('Document type to create,  default = 0, will automatically update from admin panel configuration')
      .nullable()
      .nullish()
  },
  Name: z.string().min(1).max(50).describe('document To'),
  TaxId: z.string().max(50).describe('Business registration number or user Identity number').nullable().nullish(),
  Email: z.string().max(50).describe('Email To send the document to').nullable().nullish(),
  IsSendByEmail: z.boolean().default(true).describe('Send the document by email').nullable().nullish(),
  AddressLine1: z.string().max(50).describe('Address Line 1').nullable().nullish(),
  AddressLine2: z.string().max(50).describe('Address Line 2').nullable().nullish(),
  City: z.string().max(50).describe('City').nullable().nullish(),
  Mobile: z.string().max(50).describe('Mobile phone number').nullable().nullish(),
  Phone: z.string().max(50).describe('Land line phone number').nullable().nullish(),
  Comments: z.string().max(250).describe('comments to print on the document').nullable().nullish(),
  IsVatFree: z.boolean().default(false).describe('Is all the items in this document are VAT free?').nullable().nullish(),
  DepartmentId: z.int().min(0).max(9999).describe('department ID as show at the admin panel, for reports').nullable().nullish(),
  get AdvancedDefinition() {
    return advancedDocumentDefinitionSchema.describe('Advanced document definition').nullable().nullish()
  },
  get Products() {
    return z.array(productsSchema.describe('Products')).describe('Document products').optional()
  },
  ExternalId: z.string().max(50).describe('External Id, custom info on document').nullable().nullish(),
}) as unknown as ToZod<DocumentBase>