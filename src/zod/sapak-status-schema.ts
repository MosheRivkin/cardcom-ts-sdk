import type { SapakStatus } from '../types/SapakStatus.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { z } from 'zod'

export const sapakStatusSchema = z.enum(['UnderTest', 'InProcess', 'Approved', 'Blocked', 'Error']) as unknown as ToZod<SapakStatus>