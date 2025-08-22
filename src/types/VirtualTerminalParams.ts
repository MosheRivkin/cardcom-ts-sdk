export type VirtualTerminalParams = {
    /**
     * @description Set to True if the tranzactio will be charge by the merchent and not by the card holder
     * @default false
     * @type boolean
    */
    IsEnable?: boolean | null;
    /**
     * @description allow the merchent to change the sum of the transaction
     * @default false
     * @type boolean
    */
    IsOpenSum?: boolean | null;
    /**
     * @description When using Credit Card reader , will the \"commit\" button be press after the merchent swipe the credit card
     * @default false
     * @type boolean
    */
    ChargeOnSwipe?: boolean | null;
};