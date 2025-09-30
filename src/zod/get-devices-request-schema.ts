import type { GetDevicesRequest } from '../types/GetDevicesRequest.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { z } from 'zod'

export const getDevicesRequestSchema: z.ZodObject<import("@kubb/plugin-zod/utils").ZodShape<GetDevicesRequest>> = z.object({
  ApiName: z.string().min(1).describe('Api Name for authentication'),
  ApiPassword: z.string().min(1).describe('Api password for authentication'),
  TerminalNumber: z.int().describe('Terminal number at Cardcom'),
}) as unknown as ToZod<GetDevicesRequest>