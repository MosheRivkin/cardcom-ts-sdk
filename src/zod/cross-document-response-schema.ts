import type { CrossDocumentResponse } from '../types/CrossDocumentResponse.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { z } from 'zod'

export const crossDocumentResponseSchema = z.object({
  ResponseCode: z.int().optional(),
  Description: z.string().nullable().nullish(),
}) as unknown as ToZod<CrossDocumentResponse>