import type { ModuleType } from "./ModuleType.ts";

export type TerminalInfo = {
    /**
     * @description Bank code - get list of banks from https://secure.cardcom.solutions/api/v11/CompanyOperations/GetBanks
     * @type string
    */
    BankCode?: string | null;
    /**
     * @description Bank branch code -  - get list of bank branches from https://secure.cardcom.solutions/api/v11/CompanyOperations/GetBanksBranches by bank number
     * @type string
    */
    BankBranchCode?: string | null;
    /**
     * @description Bank account number
     * @type string
    */
    BankAccountNumber?: string | null;
    /**
     * @type array
    */
    ModuleList?: ModuleType[] | null;
};