import type { KycInfoGeneric } from "./KycInfoGeneric.ts";
import type { KycInfoOsekMurshe } from "./KycInfoOsekMurshe.ts";

export type KycInfo = {
    /**
     * @description פרמטרים שמתאימים לכל
    */
    KycInfoGeneric?: KycInfoGeneric | null;
    /**
     * @description פרמטרים שמתאימים לעוסק מורשה
    */
    KycInfoOsekMurshe?: KycInfoOsekMurshe | null;
};