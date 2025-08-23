export const expectedStoreSupplyDeliverySchedule = {
  Immediate: 'Immediate',
  Late: 'Late',
  Continuous: 'Continuous',
} as const

export type ExpectedStoreSupplyDeliveryScheduleEnum = (typeof expectedStoreSupplyDeliverySchedule)[keyof typeof expectedStoreSupplyDeliverySchedule]

export type ExpectedStoreSupplyDeliverySchedule = ExpectedStoreSupplyDeliveryScheduleEnum