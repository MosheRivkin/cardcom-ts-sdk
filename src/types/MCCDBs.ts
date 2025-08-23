export type MCCDBs = {
  /**
   * @type integer | undefined, int32
   */
  MCC_CardCom?: number
  /**
   * @type integer | undefined
   */
  MCC_Code_Local?: number
  /**
   * @type integer | undefined
   */
  MCC_Code_Master?: number
  /**
   * @type integer | undefined
   */
  MCC_Code_Visa?: number
  /**
   * @type string
   */
  MCC_Description?: string | null
  /**
   * @type integer | undefined
   */
  MCC_Code_MainClassification?: number
  /**
   * @type string
   */
  MCC_Description_MainClassification?: string | null
  /**
   * @type boolean | undefined
   */
  PriorApprovalForRecruitingABusinessRiskManagement?: boolean
  /**
   * @type integer | undefined, int32
   */
  RecruitmentRouteType?: number
  /**
   * @type boolean | undefined
   */
  ATouristMissingDocument?: boolean
  /**
   * @type boolean | undefined
   */
  MissingDocumentStatusDefault?: boolean
  /**
   * @type integer | undefined
   */
  RiskLevel?: number
}