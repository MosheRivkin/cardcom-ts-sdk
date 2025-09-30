import type { ExpectedStoreSupplyDeliverySchedule } from '../types/ExpectedStoreSupplyDeliverySchedule.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { z } from 'zod'

export const expectedStoreSupplyDeliveryScheduleSchema: z.ZodType<import("/home/m/dev/git/cardcom-ts-sdk/src/index").ExpectedStoreSupplyDeliveryScheduleEnum, unknown, z.core.$ZodTypeInternals<import("/home/m/dev/git/cardcom-ts-sdk/src/index").ExpectedStoreSupplyDeliveryScheduleEnum, unknown>> = z.enum(['Immediate', 'Late', 'Continuous']) as unknown as ToZod<ExpectedStoreSupplyDeliverySchedule>