import type { SlikaInvoicesResult } from "./SlikaInvoicesResult.ts";

export type SlikaInvoicesResponse = {
    /**
     * @description if equel zero then success , else , a develper error see Description for more info
     * @type integer | undefined, int32
    */
    ResponseCode?: number;
    /**
     * @description Description of the ResponseCode
     * @maxLength 250
     * @type string
    */
    Description?: string | null;
    /**
     * @description Total count of documents
     * @type integer | undefined, int32
    */
    TotalCount?: number;
    /**
     * @description Query result
     * @type array
    */
    Invoices?: SlikaInvoicesResult[] | null;
};