import type { AdvancedDocumentDefinition } from "./AdvancedDocumentDefinition.ts";
import type { DocumentToCreate } from "./DocumentToCreate.ts";
import type { Products } from "./Products.ts";

export type DocumentBase = {
    /**
     * @description Document type to create,  default = 0, will automatically update from admin panel configuration
     * @default "Auto"
    */
    DocumentTypeToCreate?: DocumentToCreate | null;
    /**
     * @description document To
     * @minLength 1
     * @maxLength 50
     * @type string
    */
    Name: string;
    /**
     * @description Business registration number or user Identity number
     * @maxLength 50
     * @type string
    */
    TaxId?: string | null;
    /**
     * @description Email To send the document to
     * @maxLength 50
     * @type string
    */
    Email?: string | null;
    /**
     * @description Send the document by email
     * @default true
     * @type boolean
    */
    IsSendByEmail?: boolean | null;
    /**
     * @description Address Line 1
     * @maxLength 50
     * @type string
    */
    AddressLine1?: string | null;
    /**
     * @description Address Line 2
     * @maxLength 50
     * @type string
    */
    AddressLine2?: string | null;
    /**
     * @description City
     * @maxLength 50
     * @type string
    */
    City?: string | null;
    /**
     * @description Mobile phone number
     * @maxLength 50
     * @type string
    */
    Mobile?: string | null;
    /**
     * @description Land line phone number
     * @maxLength 50
     * @type string
    */
    Phone?: string | null;
    /**
     * @description comments to print on the document
     * @maxLength 250
     * @type string
    */
    Comments?: string | null;
    /**
     * @description Is all the items in this document are VAT free?
     * @default false
     * @type boolean
    */
    IsVatFree?: boolean | null;
    /**
     * @description department ID as show at the admin panel, for reports
     * @minLength 0
     * @maxLength 9999
     * @type integer
    */
    DepartmentId?: number | null;
    /**
     * @description Advanced document definition
    */
    AdvancedDefinition?: AdvancedDocumentDefinition | null;
    /**
     * @description Document products
     * @type array | undefined
    */
    Products?: Products[];
    /**
     * @description External Id, custom info on document
     * @maxLength 50
     * @type string
    */
    ExternalId?: string | null;
};