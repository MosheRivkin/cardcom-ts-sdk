import type { MuhlafimByDateRequest } from '../types/MuhlafimByDateRequest.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { z } from 'zod'

export const muhlafimByDateRequestSchema: z.ZodObject<import("@kubb/plugin-zod/utils").ZodShape<MuhlafimByDateRequest>> = z.object({
  apiUserName: z.string().min(1).describe('API username'),
  apiPassword: z.string().min(1).describe('API password'),
  fromDate: z.date().min(1).describe('DateTime from'),
  toDate: z.date().min(1).describe('DateTime to'),
}) as unknown as ToZod<MuhlafimByDateRequest>