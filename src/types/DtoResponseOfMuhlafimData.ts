import type { MuhlafimData } from "./MuhlafimData.ts";

export type DtoResponseOfMuhlafimData = {
    /**
     * @type integer | undefined, int32
    */
    Code?: number;
    /**
     * @type string
    */
    Description?: string | null;
    Content?: MuhlafimData | null;
};