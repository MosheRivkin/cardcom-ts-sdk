import type { Operation } from '../types/Operation.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { z } from 'zod'

export const operationSchema: z.ZodType<import("src/index").OperationEnum, unknown, z.core.$ZodTypeInternals<import("src/index").OperationEnum, unknown>> = z.enum([
  'ChargeOnly',
  'ChargeAndCreateToken',
  'CreateTokenOnly',
  'SuspendedDeal',
  'Do3DSAndSubmit',
]) as unknown as ToZod<Operation>