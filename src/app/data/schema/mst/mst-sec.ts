export interface MstSec {
  secCd: string;
  secType: number;
  secSName: string;
  secName: string;
  secClass: number;
  capitalValue: number;
  listedQty: number;
  foreignMaxQty: number;
  marketCd: string;
  tradingLot: number;
  parValue: number;
  maxRoom: number;
  status: number;
  remarks: string;
  createdUserId: string;
  createdTime: Date;
  updatedUserId: string;
  updatedTime: Date;
  isCalRightToAsset: string;
  stockDividendRate: number
  cashDividendRate: number;
}
