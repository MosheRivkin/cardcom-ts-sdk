import type { CrossDocumentResponse } from '../types/CrossDocumentResponse.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { z } from 'zod'

export const crossDocumentResponseSchema: z.ZodObject<import("@kubb/plugin-zod/utils").ZodShape<CrossDocumentResponse>> = z.object({
  ResponseCode: z.int().optional(),
  Description: z.string().nullable().nullish(),
}) as unknown as ToZod<CrossDocumentResponse>