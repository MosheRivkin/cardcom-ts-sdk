import type { ExpectedStoreSupplyDeliverySchedule } from '../types/ExpectedStoreSupplyDeliverySchedule.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { z } from 'zod'

export const expectedStoreSupplyDeliveryScheduleSchema: z.ZodType<import("src/index").ExpectedStoreSupplyDeliveryScheduleEnum, unknown, z.core.$ZodTypeInternals<import("src/index").ExpectedStoreSupplyDeliveryScheduleEnum, unknown>> = z.enum(['Immediate', 'Late', 'Continuous']) as unknown as ToZod<ExpectedStoreSupplyDeliverySchedule>