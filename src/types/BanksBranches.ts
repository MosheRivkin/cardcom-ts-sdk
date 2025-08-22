import type { Banks } from "./Banks.ts";

export type BanksBranches = {
    /**
     * @type integer | undefined, int32
    */
    Bank_Code?: number;
    /**
     * @type integer | undefined, int32
    */
    Branch_Code?: number;
    /**
     * @type string
    */
    Branch_Name?: string | null;
    /**
     * @type string
    */
    Branch_Address?: string | null;
    Banks?: Banks | null;
};