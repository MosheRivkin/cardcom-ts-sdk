import type { ExUpdatTokesProsses } from "./ExUpdatTokesProsses.ts";

export type ExtUpdateTokens = {
    /**
     * @description Prosses ID
     * @type integer | undefined, int32
    */
    ID?: number;
    /**
     * @description list of update tokens
     * @type array
    */
    UpdatedTokenList?: ExUpdatTokesProsses[] | null;
};