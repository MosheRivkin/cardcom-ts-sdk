import type { ButtonColor } from "./ButtonColor.ts";
import type { ButtonLocale } from "./ButtonLocale.ts";
import type { ButtonType } from "./ButtonType.ts";

export type GooglePayBtnDesign = {
    /**
     * @description GPay button color
    */
    ButtonColor?: ButtonColor;
    /**
     * @description GPay button type (text on the button)
     * @default "Buy"
    */
    ButtonType?: ButtonType;
    /**
     * @description GPay button language
     * @default "English"
    */
    ButtonLocale?: ButtonLocale;
    /**
     * @description GPay button width. Default 328 (px)
     * @default "328"
     * @type string
    */
    ButtonWidth?: string | null;
    /**
     * @description GPay button height. Default 40 (px)
     * @default "4"
     * @type string
    */
    ButtonHeight?: string | null;
};