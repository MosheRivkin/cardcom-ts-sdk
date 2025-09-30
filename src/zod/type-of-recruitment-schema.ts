import type { TypeOfRecruitment } from '../types/TypeOfRecruitment.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { z } from 'zod'

export const typeOfRecruitmentSchema: z.ZodType<import("/home/m/dev/git/cardcom-ts-sdk/src/index").TypeOfRecruitmentEnum, unknown, z.core.$ZodTypeInternals<import("/home/m/dev/git/cardcom-ts-sdk/src/index").TypeOfRecruitmentEnum, unknown>> = z.enum(['Independent', 'Telephone', 'UsingARemoteRepresentative']) as unknown as ToZod<TypeOfRecruitment>