import type { PaymentType } from "../types/PaymentType.ts";
import type { ToZod } from "@kubb/plugin-zod/utils/v4";
import { z } from "zod";

export const paymentTypeSchema = z.enum(["Unknown", "Standard", "SpecialCredits", "ImmediateCharge", "CreditClub", "SuperCredit", "InstallmentCredit", "Payments", "ClubPatments"]) as unknown as ToZod<PaymentType>