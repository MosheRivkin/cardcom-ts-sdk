/* eslint-disable no-alert, no-console */

import { lowProfileCreate } from './low-profile-create.ts'
import { lowProfileGetLpResult } from './low-profile-get-lp-result.ts'

export function lowProfile(): { lowProfileCreate: typeof lowProfileCreate; lowProfileGetLpResult: typeof lowProfileGetLpResult; } {
  return { lowProfileCreate, lowProfileGetLpResult }
}