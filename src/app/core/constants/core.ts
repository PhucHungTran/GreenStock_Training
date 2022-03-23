// GROUP_CD chung
export const CORE_GLOBAL_TRANS_GROUP_CD = [{
  name: 'CT00 - Giao dịch tiền',
  data: 1,
  value: 'CT00'
},
{
  name: 'RH00 - Quyền',
  data: 2,
  value: 'RH00'
},
{
  name: 'SE00 - Thanh toán bù trừ',
  data: 3,
  value: 'SE00'
}
  ,
{
  name: 'OD00 - Đặt lệnh',
  data: 4,
  value: 'OD00'
},
{
  name: 'CU00 - Khách hàng',
  data: 5,
  value: 'CU00'
}
];

// TASK_CD chung
export const CORE_GLOBAL_TRANS_TASK_CD = [{
  name: 'CT01 - Nộp cọc',
  data: 1,
  value: 'CT01'
},
{
  name: 'CT02 - Rút cọc',
  data: 2,
  value: 'CT02'
},
{
  name: 'CT03 - Chuyền tiền nội bộ',
  data: 3,
  value: 'CT03'
},
{
  name: 'CT04 - Chuyển tiền ngân hàng',
  data: 4,
  value: 'CT04'
},
{
  name: 'RH01 - Khai báo thông tin',
  data: 5,
  value: 'RH01'
},
{
  name: 'RH02 - Duyệt DSSH',
  data: 6,
  value: 'RH02'
},
{
  name: 'RH03 - Cổ tức tiền mặt - Hạch toán tiền',
  data: 7,
  value: 'RH03'
},
{
  name: 'RH04 - Cố tức CP - Hạch toán CK',
  data: 8,
  value: 'RH04'
},
{
  name: 'RH05 - Cổ tức CP - Chuyển giao dịch',
  data: 9,
  value: 'RH05'
},
{
  name: 'RH06 - PHT - ĐK mua thêm',
  data: 10,
  value: 'RH06'
},
{
  name: 'RH07 - PHT - Hủy ĐK mua thêm ',
  data: 11,
  value: 'RH07'
},
{
  name: 'RH08 - PHT - Hạch toán CK',
  data: 12,
  value: 'RH08'
},
{
  name: 'RH09 - PHT - Hạch toán chuyển GD',
  data: 13,
  value: 'RH09'
},
{
  name: 'SE01 - Thanh toán bù trừ T0',
  data: 14,
  value: 'SE01'
},
{
  name: 'SE02 - Thanh toán bù trừ TN',
  data: 15,
  value: 'SE02'
},
{
  name: 'OD01 - Đặt lệnh',
  data: 16,
  value: 'OD01'
}
  ,
{
  name: 'CU01 - Thay đổi thông tin khách hàng',
  data: 17,
  value: 'CU01'
}
,
{
  name: 'CU02 - Mở tiểu khoản',
  data: 18,
  value: 'CU02'
}
,
{
  name: 'CU03 - Thay đổi thông tin tiểu khoản',
  data: 19,
  value: 'CU03'
}
];


export const CORE_GLOBAL_TRANS_STATUS = [{
  name: 'Chưa duyệt',
  data: 1,
  value: 'Pending'
},
{
  name: 'Đã duyệt',
  data: 2,
  value: 'Approved'
},
{
  name: 'Đã hủy',
  data: 255,
  value: 'Cancel'
}];


export const CORE_GLOBAL_CHANEL = [{
  name: 'Back',
  data: 1,
  value: '1'
},
{
  name: 'Web',
  data: 2,
  value: '2'
},
{
  name: 'App',
  data: 3,
  value: '3'
}];

export const CORE_GLOBAL_TRANS_AMOUNT_TYPE = [{
  name: 'CT0001 - Tiền nộp cọc',
  data: 1,
  value: 'CT0001'
},
{
  name: 'CT0002 - Tiền rút cọc',
  data: 2,
  value: 'CT0002'
},
{
  name: 'CT0003 - Tiền chuyển (chuyển khoản) nội bộ',
  data: 3,
  value: 'CT0003'
},
{
  name: 'CT0004 - Tiền nhận (chuyển khoản) nội bộ',
  data: 4,
  value: 'CT0004'
},
{
  name: 'CT0005 - Phí chuyển khoản nội bộ',
  data: 5,
  value: 'CT0005'
},
{
  name: 'CT0006 - Tiền chuyển (chuyển khoản) ngân hàng',
  data: 6,
  value: 'CT0006'
},
{
  name: 'CT0007 - Phí chuyển khoản ngân hàng',
  data: 7,
  value: 'CT0007'
},
{
  name: 'RH0001 - Tiền cổ tức',
  data: 8,
  value: 'RH0001'
},
{
  name: 'RH0002 - Thuế cổ tức',
  data: 9,
  value: 'RH0002'
},
{
  name: 'RH0003 - Phí chuyển khoản cổ tức',
  data: 10,
  value: 'RH0003'
},
{
  name: 'RH0004 - Tiền đăng ký mua thêm',
  data: 11,
  value: 'RH0004'
},
{
  name: 'RH0005 - Tiền hủy đăng ký mua thêm',
  data: 12,
  value: 'RH0005'
},
{
  name: 'SE0001 - Lãi lỗ cọc',
  data: 13,
  value: 'SE0001'
}
];

export const CORE_GLOBAL_TRANS_QUANTITY_TYPE = [{
  name: 'RH0001 - Cổ tức cổ phiếu',
  data: 1,
  value: 'RH0001'
},
{
  name: 'RH0002 - Cổ phiếu mua thêm',
  data: 2,
  value: 'RH0002'
},
{
  name: 'SE0001 - Chứng khoán mua T0',
  data: 3,
  value: 'SE0001'
}
];

export const CORE_SEC_MOV_TRADE_TYPE = [{
  name: 'Giảm',
  data: 1,
  value: 'Giảm'
},
{
  name: 'Tăng',
  data: 2,
  value: 'Tăng'
}
];

export const CORE_SEC_BALANCE_SEC_TYPE = [{
  name: 'CK Sở hữu',
  data: 1,
  value: '1'
},
{
  name: 'Mua T-1',
  data: 2,
  value: '2'
},
{
  name: 'Mua T0',
  data: 3,
  value: '3'
},
{
  name: 'Quyền chờ về',
  data: 4,
  value: '4'
},
  {
      name: 'Quyền về chưa bán',
      data: 5,
      value: '5'
  }];


export const CORE_PFL_REALTIME_BYORDER = [

  {
      name: 'All',
      data: -1,
      value: '-1'
  }
  , {
      name: 'Danh mục',
      data: 0,
      value: '0'
  },

  {
      name: 'Bán',
      data: 1,
      value: '1'
  },
  {
      name: 'Mua',
      data: 2,
      value: '2'
  }];


export const CORE_SEC_MOV_GROUP_CD = [
{
  name: 'RH00 - Quyền',
  data: 2,
  value: 'RH00'
},
{
  name: 'SE00 - Thanh toán bù trừ',
  data: 3,
  value: 'SE00'
}
  ,
{
  name: 'OD00 - Đặt lệnh',
  data: 4,
  value: 'OD00'
}];
