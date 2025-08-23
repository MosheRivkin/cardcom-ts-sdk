import type { DocumentSearchResponse } from '../types/DocumentSearchResponse.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { invHeadLineDtoSchema } from './inv-head-line-dto-schema.ts'
import { z } from 'zod'

export const documentSearchResponseSchema = z.object({
  ResponseCode: z.int().optional(),
  Description: z.string().nullable().nullish(),
  get Documents() {
    return z.array(invHeadLineDtoSchema).nullable().nullish()
  },
  Page: z.int().optional(),
  Count: z.int().optional(),
}) as unknown as ToZod<DocumentSearchResponse>