export interface CorSubAccount {
  subAccoCd: number;
  custCd: number;
  custNo: string;
  subAccoNo: string;
  subAccoType: number; // Option
  productId: string;
  productName: string;
  productToDate: Date;
  maxLoanAmt: number;
  notCalCompanyLimit: boolean;
  contractNo: string;
  openDate: Date;
  closeDate: Date;
  reopenDate: Date;
  status: number;
  isDefault: boolean;
  notUpdateProductLimit: boolean;
  channel: number;
  remarks: string;
  createdUserId: string;
  createdTime: Date;
  updatedUserId: string;
  updatedTime: Date;
  isCalRightToAsset: string;

}
