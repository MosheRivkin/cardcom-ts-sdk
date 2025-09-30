import type { ThreeDSecureState } from '../types/ThreeDSecureState.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { z } from 'zod'

export const threeDSecureStateSchema: z.ZodType<import("src/index").ThreeDSecureStateEnum, unknown, z.core.$ZodTypeInternals<import("src/index").ThreeDSecureStateEnum, unknown>> = z.enum(['Auto', 'Enabled', 'Disabled']) as unknown as ToZod<ThreeDSecureState>