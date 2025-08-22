export type SlikaInvoicesRequest = {
    /**
     * @description Api Name for authentication
     * @minLength 1
     * @type string
    */
    ApiName: string;
    /**
     * @description Api password for authentication
     * @minLength 1
     * @type string
    */
    ApiPassword: string;
    /**
     * @description Form Create Date DDMMYYYY
     * @minLength 1
     * @type string
    */
    FromCreateDate: string;
    /**
     * @description To Create Date DDMMYYYY
     * @minLength 1
     * @type string
    */
    ToCreateDate: string;
};