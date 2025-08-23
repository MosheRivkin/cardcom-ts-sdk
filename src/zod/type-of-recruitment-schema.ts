import type { TypeOfRecruitment } from '../types/TypeOfRecruitment.ts'
import type { ToZod } from '@kubb/plugin-zod/utils/v4'
import { z } from 'zod'

export const typeOfRecruitmentSchema = z.enum(['Independent', 'Telephone', 'UsingARemoteRepresentative']) as unknown as ToZod<TypeOfRecruitment>