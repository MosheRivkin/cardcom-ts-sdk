import type { GetDevicesRequest } from '../types/GetDevicesRequest.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { z } from 'zod'

export const getDevicesRequestSchema: z.ZodObject<import("/home/m/dev/git/cardcom-ts-sdk/node_modules/@kubb/plugin-zod/dist/utils/v4").ZodShape<GetDevicesRequest>, "passthrough"> = z.object({
  ApiName: z.string().min(1).describe('Api Name for authentication'),
  ApiPassword: z.string().min(1).describe('Api password for authentication'),
  TerminalNumber: z.int().describe('Terminal number at Cardcom'),
}) as unknown as ToZod<GetDevicesRequest>