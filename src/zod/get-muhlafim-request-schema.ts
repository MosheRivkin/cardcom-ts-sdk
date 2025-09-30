import type { GetMuhlafimRequest } from '../types/GetMuhlafimRequest.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { z } from 'zod'

export const getMuhlafimRequestSchema: z.ZodObject<import("@kubb/plugin-zod/utils").ZodShape<GetMuhlafimRequest>> = z.object({
  SupplierUserName: z.string().min(1).describe('Supplier Username'),
  Secret: z.string().min(1).describe('Secret Key or Password'),
  DateFrom: z.date().min(1).describe('Start Date'),
  DateTo: z.date().min(1).describe('End Date'),
  CompanyNumber: z.int().describe('Company Identification Number'),
  Certification: z.string().min(1).describe('Certificate or Credential'),
}) as unknown as ToZod<GetMuhlafimRequest>