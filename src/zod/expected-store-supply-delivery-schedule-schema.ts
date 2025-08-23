import type { ExpectedStoreSupplyDeliverySchedule } from '../types/ExpectedStoreSupplyDeliverySchedule.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { z } from 'zod'

export const expectedStoreSupplyDeliveryScheduleSchema = z.enum(['Immediate', 'Late', 'Continuous']) as unknown as ToZod<ExpectedStoreSupplyDeliverySchedule>