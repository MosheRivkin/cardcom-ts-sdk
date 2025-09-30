import type { PrepareDeviceRequest } from '../types/PrepareDeviceRequest.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { z } from 'zod'

export const prepareDeviceRequestSchema: z.ZodObject<import("@kubb/plugin-zod/utils").ZodShape<PrepareDeviceRequest>> = z.object({
  ApiName: z.string().min(1).describe('Api Name for authentication'),
  ApiPassword: z.string().min(1).describe('Api password for authentication'),
  TerminalNumber: z.int().describe('Terminal number at Cardcom'),
  DeviceUUID: z.string().min(1).max(50).describe('Mobile device UUID'),
  DeviceManufacturer: z.string().max(50).describe('Mobile device manufacturer').nullable().nullish(),
  DeviceModel: z.string().max(50).describe('Mobile device model').nullable().nullish(),
}) as unknown as ToZod<PrepareDeviceRequest>