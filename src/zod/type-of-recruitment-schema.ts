import type { TypeOfRecruitment } from '../types/TypeOfRecruitment.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { z } from 'zod'

export const typeOfRecruitmentSchema: z.ZodType<import("src/index").TypeOfRecruitmentEnum, unknown, z.core.$ZodTypeInternals<import("src/index").TypeOfRecruitmentEnum, unknown>> = z.enum(['Independent', 'Telephone', 'UsingARemoteRepresentative']) as unknown as ToZod<TypeOfRecruitment>