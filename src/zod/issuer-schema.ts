import type { Issuer } from '../types/Issuer.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { z } from 'zod'

export const issuerSchema: z.ZodType<import("src/index").IssuerEnum, unknown, z.core.$ZodTypeInternals<import("src/index").IssuerEnum, unknown>> = z.enum(['NonIsrael', 'Isracard', 'CAL', 'Diners', 'AmericanExpress', 'JCB', 'Laumicard']) as unknown as ToZod<Issuer>