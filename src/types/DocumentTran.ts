import type { DocumentBase } from "./DocumentBase.ts";

export type DocumentTran = (DocumentBase & {
    /**
     * @description Manual numbering of the document. Special permission must be requested to use this parameter.
     * @type string
    */
    ManualNumber?: string | null;
    /**
     * @description Document production date.
     * @type string
    */
    DocumentDateDDMMYYYY?: string | null;
    /**
     * @description Document value date (for journal entries)
     * @type string
    */
    ValueDate?: string | null;
    /**
     * @description document languge: \"he\" / \"en\" / \"ru\" / \"ar\" / \"fr\" / \"it\"
     * @type string
    */
    Languge?: string | null;
    /**
     * @description should the system send the document via SMS (only with the SMS module)
     * @default true
     * @type boolean
    */
    IsSendSMS?: boolean | null;
});