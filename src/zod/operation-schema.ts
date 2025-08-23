import type { Operation } from '../types/Operation.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { z } from 'zod'

export const operationSchema = z.enum([
  'ChargeOnly',
  'ChargeAndCreateToken',
  'CreateTokenOnly',
  'SuspendedDeal',
  'Do3DSAndSubmit',
]) as unknown as ToZod<Operation>