export interface CorSecMov {
  alloDate: Date;
  refNo: number;
  effectDate: Date;
  subAccoCd: number;
  secType: number;
  secCd: string;
  groupCd: string;
  taskCd: string;
  globalTransId: number;
  srcDate: Date;
  srcNo: number;
  srcUnitCode: number;
  beginQty: number;
  quantity: number;
  quantityType: string;
  price: number;
  tradeType: number;
  afterQty: number;
  status: number;
  unitCode: string;
  description: string;
  descriptionEn: string;
  approvedUserId: string;
  approvedTime: string;
  cancelledUserId: string;
  cancelledTime: Date;
  remarks: string;
  createdUserId: string;
  createdTime: Date;
  updatedUserId: string;
  updatedTime: Date;
  autoApprove: boolean;
  startDate: Date;
  endDate: Date;
  id:number;
  subAccoNo: string;
}
