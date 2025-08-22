import type { ButtonLocale } from "../types/ButtonLocale.ts";
import type { ToZod } from "@kubb/plugin-zod/utils/v4";
import { z } from "zod";

export const buttonLocaleSchema = z.enum(["Arabic", "Bulgarian", "Catalan", "Chinese", "Croatian", "Czech", "Danish", "Dutch", "English", "Estonian", "Finnish", "French", "German", "Greek", "Indonesian", "Italian", "Japanese", "Korean", "Malay", "Norwegian", "Polish", "Portuguese", "Russian", "Serbian", "Slovak", "Slovenian", "Spanish", "Swedish", "Thai", "Turkish", "Ukrainian"]) as unknown as ToZod<ButtonLocale>