import { Observable } from 'rxjs';
import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { CoreService } from 'src/app/core/service/core.service';
import { MstService } from 'src/app/core/service/mst.service';
import { CustomerService } from 'src/app/core/service/customer.service';
import { ExportExcelService } from 'src/app/core/service/export-excel.service';
import { CorSecMov } from 'src/app/data/schema/core/cor-sec-mov';
import { CorSubAccount } from 'src/app/data/schema/customer/cor-sub-acc';
import { MstSec } from 'src/app/data/schema/mst/mst-sec';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { CorSecMovDialogComponent } from './cor-sec-mov-dialog/cor-sec-mov-dialog.component';
import {
  CORE_GLOBAL_TRANS_QUANTITY_TYPE,
  CORE_GLOBAL_TRANS_TASK_CD,
  CORE_GLOBAL_TRANS_STATUS,
  CORE_SEC_MOV_GROUP_CD,
  CORE_SEC_MOV_TRADE_TYPE
} from 'src/app/core/constants/core';
import { map, startWith } from 'rxjs/operators';
import { SelectionModel } from '@angular/cdk/collections';
import { MatInput } from '@angular/material/input';
import { MatSelect } from '@angular/material/select';
@Component({
  selector: 'app-cor-sec-mov',
  templateUrl: './core-sec-mov.component.html',
  styleUrls: ['./core-sec-mov.component.scss']
})
export class CorSecMovComponent implements OnInit, AfterViewInit {

  subAccList: CorSubAccount[] = [];
  secMovList: MstSec[] = [];
  listSecMov: CorSecMov[] = [];
  query = {}

  groupCdList: any;
  statusList: any;
  taskCdList: any;
  taskCd2List: any;
  tradeTypeList: any;
  quantityTypeList: any;

  // isLoadingResults = true;
  // isRateLimitReached = false;

  statusSelect !: string;
  groupCdSelect !: string;
  taskCdSelect !: string;
  tradeTypeSelect !: string;

  subAccoNoFilter !: Observable<string[]>;
  subAccoNoControl = new FormControl();
  secCdFilter !: Observable<string[]>;
  secCdControl = new FormControl();

  alloDate !: Date;
  startDate !: Date;
  endDate !: Date;
  id !: number;

  m_limit: number = 10;
  m_offset: number = 0;
  m_length: number = 10;



  selection = new SelectionModel<CorSecMov>(true, [])

  displayedColumns: string[] = ['select', 'alloDate', 'srcNo', 'effectDate', 'status', 'groupCd', 'taskCd', 'subAccoNo', 'tradeType', 'secCd', 'quantity', 'quantityType', 'description', 'descriptionEn', 'unitCode', 'remarks', 'approvedUserId', 'approvedTime', 'cancelledUserId', 'cancelledTime', 'createdUserId', 'createdTime', 'updatedUserId', 'updatedTime', 'id']

  dataSource !: MatTableDataSource<CorSecMov>
  paginatorSize: number[] = [10, 25, 50, 100]

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  @ViewChild('fromInput', {
    read: MatInput
  })
  fromInput!: MatInput;

  @ViewChild('toInput', {
    read: MatInput
  })
  toInput!: MatInput;

  @ViewChild('groupCd', {
    read: MatSelect
  })
  groupCd!: MatSelect;

  @ViewChild('taskCd', {
    read: MatSelect
  })
  taskCd!: MatSelect;

  @ViewChild('tradeType', {
    read: MatSelect
  })
  tradeType!: MatSelect;

  @ViewChild('sub', {
    read: MatInput
  })
  sub!: MatInput;

  @ViewChild('sec', {
    read: MatInput
  })
  sec!: MatInput;

  @ViewChild('tus', {
    read: MatSelect
  })
  tus!: MatSelect;

  constructor(
    private corService: CoreService,
    private mstService: MstService,
    private exportService: ExportExcelService,
    private customerService: CustomerService,
    private dialog: MatDialog,
    private changDectorRef: ChangeDetectorRef
  ) {
    this.groupCdList = CORE_SEC_MOV_GROUP_CD;
    this.taskCdList = CORE_GLOBAL_TRANS_TASK_CD;
    this.taskCd2List = CORE_GLOBAL_TRANS_TASK_CD;
    this.statusList = CORE_GLOBAL_TRANS_STATUS;
    this.quantityTypeList = CORE_GLOBAL_TRANS_QUANTITY_TYPE;
    this.tradeTypeList = CORE_SEC_MOV_TRADE_TYPE;
  }




  ngAfterViewInit(): void {
    // this.getCoreSecMov(this.query, this.m_limit, this.m_offset);
    this.getCoreSecMov();
    this.getCorSubAcco();
    this.getMstSec();
  }

  ngOnInit(): void {
  }

  // Trang thai
  getStatus(status: any) {
    if (typeof status === 'string') {
      for (let data of this.statusList) {
        if (data.value === status) {
          return data;
        }
      }
    }
    else {
      for (let data of this.statusList) {
        if (data.data === status) {
          return data;
        }
      }
    }
    return '';
  }

  //phân trang
  // OnPageChange(event: PageEvent) {
  //   console.log(event);
  //   this.getCoreSecMov(this.query, event.pageSize, event.pageIndex * event.pageSize);
  // }

  //Nghiep vu
  getGroupCd(groupcd: any) {
    if (typeof groupcd === 'string') {
      for (let data of this.groupCdList) {
        if (data.value === groupcd) {
          return data;
        }
      }
    } else {
      for (let data of this.groupCdList) {
        if (data.data === groupcd) {
          return data;
        }
      }
    }
    return '';
  }


  //Thao tac
  getTaskCd(taskcd: any) {
    if (typeof taskcd === 'string') {
      for (let data of this.taskCd2List) {
        if (data.value === taskcd) {
          return data;
        }
      }
    } else {
      for (let data of this.taskCd2List) {
        if (data.data === taskcd) {
          return data;
        }
      }
    }
    return '';
  }


  //Tang giam
  getTradeType(tradeType: any) {
    if (typeof tradeType === 'string') {
      for (let data of this.tradeTypeList) {
        if (data.value === tradeType) {
          return data;
        }
      }
    } else {
      for (let data of this.tradeTypeList) {
        if (data.data === tradeType) {
          return data;
        }
      }
    }
    return '';
  }


  //Loai chung khoan
  getQuantityType(quantitytype: any) {
    if (typeof quantitytype === 'string') {
      for (let data of this.quantityTypeList) {
        if (data.value === quantitytype) {
          return data;
        }
      }
    } else {
      for (let data of this.quantityTypeList) {
        if (data.data === quantitytype) {
          return data;
        }
      }
    }
    return '';
  }

  // getCoreSecMov(query: any, limit: number, offset: number): void {
  //   this.isLoadingResults = true;
  //   this.corService.getSecMov(query, limit, offset).subscribe(data => {
  //     console.log(data);
  //     this.listSecMov = data.data;
  //     this.dataSource = new MatTableDataSource(this.listSecMov);
  //     this.isLoadingResults = false;
  //     this.changDectorRef.detectChanges();
  //     // this.dataSource.paginator = this.paginator;
  //     this.dataSource.sort = this.sort;
  //     this.m_length = data.count;
  //   }, err => console.log(err))
  // }

  getCoreSecMov(): void {
    this.corService.getSecMov(this.query).subscribe(data => {
      this.listSecMov = data.data;
      this.dataSource = new MatTableDataSource(this.listSecMov);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }, err => console.log(err))
  }

  getCorSubAcco(): void {
    this.customerService.getCorSubAcc(this.query).subscribe(data => {
      this.subAccList = data.data;
      this.subAccoNoFilter = this.subAccoNoControl.valueChanges.pipe(
        startWith(''), map(value => this._subAccoNoFilter(value))
      );
    }, err => console.log(err))
  }

  getMstSec(): void {
    this.mstService.getMstSec(this.query).subscribe(data => {
      this.secMovList = data.data;
      this.secCdFilter = this.secCdControl.valueChanges.pipe(
        startWith(''), map(value => this._secCdFilter(value))
      );
      this.changDectorRef.detectChanges()
    }, err => console.log(err))
  }

  search() {
    let querySearch = {
      startDate: this.startDate,
      endDate: this.endDate,
      status: this.getStatus(this.statusSelect).data,
      groupCd: this.getGroupCd(this.groupCdSelect).value,
      taskCd: this.getTaskCd(this.taskCdSelect).value,
      subAccoNo: this.subAccoNoControl.value,
      tradeType: this.getTradeType(this.tradeTypeSelect).data,
      secCd: this.secCdControl.value
    };
    this.corService.getSecMov(querySearch).subscribe(data => {
      this.dataSource = new MatTableDataSource(data.data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.id = this.dataSource.data.length;
    },err => console.log(err))

    // this.getCoreSecMov(this.query, this.m_limit, this.m_offset);
    // this.m_offset = 0;
  }

  // reset() {
  //   this.query = {};
  //   this.m_limit = 10;
  //   this.m_offset = 0;

  //   this.getCoreSecMov(this.query, this.m_limit, this.m_offset);
  // }

  reset(): void{
    this.fromInput.value = '';
    this.toInput.value = '';
    this.groupCd.value = '';
    this.taskCd.value = '';
    this.tradeType.value = '';
    this.sub.value = '';
    this.sec.value = '';
    this.tus.value = '';
    let queryReset = {
    }
    this.corService.getSecMov(queryReset).subscribe(data => {
      this.dataSource = new MatTableDataSource(data.data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.id = this.dataSource.data.length;
    },err => console.log(err))
  }

  aprrovedCorSecMov(row: any) {
    const dialogRef = this.dialog.open(CorSecMovDialogComponent, {
      height: '180px',
      width: '550px',
      data: {
        action: 'approve',
        data: [row]
      },
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(data => {
      this.search();
      this.selection.clear();
    })
  }

  cancelCorSecMov(row: any) {
    const dialogRef = this.dialog.open(CorSecMovDialogComponent, {
      height: '180px',
      width: '550px',
      data: {
        action: 'cancel',
        data: [row]
      },
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(data => {
      this.search();
      this.selection.clear();
    })
  }

  // approveSelected(): void {
  //   const corsecmov = this.selection.selected;
  //   const dialogRef = this.dialog.open(CorSecMovDialogComponent, {
  //     height: '250px',
  //     width: '600px',
  //     data: {
  //       action: 'approve',
  //       data: corsecmov
  //     },
  //     disableClose: true
  //   });
  //   dialogRef.afterClosed().subscribe(data => {
  //     this.search();
  //     this.selection.clear();
  //   })
  // }

  // cancelSelected(): void {
  //   const corsecmov = this.selection.selected;
  //   const dialogRef = this.dialog.open(CorSecMovDialogComponent, {
  //     height: '250px',
  //     width: '600px',
  //     data: {
  //       action: 'cancel',
  //       data: corsecmov
  //     },
  //     disableClose: true
  //   });
  //   dialogRef.afterClosed().subscribe(data => {
  //     this.search();
  //     this.selection.clear();
  //   })
  // }

  private _subAccoNoFilter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.subAccList.map(item => {
      return item.subAccoNo;
    }).filter((option: any) => option.toLowerCase().indexOf(filterValue) === 0);
  }

  private _secCdFilter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.secMovList.map(item => {
      return item.secCd;
    }).filter((option: any) => option.toLowerCase().indexOf(filterValue) === 0);
  }

  setupTaskCd(): void {
    if (this.groupCdSelect === 'CT00-Giao dịch tiền') {
      this.taskCdList = [{
        name: 'CT01-Nộp tiền',
        data: 'CT01',
        value: 'CT01-Nộp tiền'
      },
      {
        name: 'CT02-Rút tiền',
        data: 'CT02',
        value: 'CT02-Rút tiền'
      },
      {
        name: 'CT03- Chuyển tiền nội bộ',
        data: 'CT03',
        value: 'CT03- Chuyển tiền nội bộ',
      },
      {
        name: 'CT04- Chuyển tiền ngân  hàng',
        data: 'CT04',
        value: 'CT04- Chuyển tiền ngân  hàng',
      }];
    }
    else if (this.groupCdSelect === 'RH00') {


      this.taskCdList = [{
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
      }];

    }
    else if (this.groupCdSelect === 'SE00') {
      this.taskCdList = [{
        name: 'SE01 - Thanh toán bù trừ T0',
        data: 14,
        value: 'SE01'
      },
      {
        name: 'SE02 - Thanh toán bù trừ TN',
        data: 15,
        value: 'SE02'
      }];

    }
    else if (this.groupCdSelect === 'OD00') {
      this.taskCdList = [{
        name: 'OD01 - Đặt lệnh',
        data: 16,
        value: 'OD01'
      }];

    }


  }

  getDateFormat(data: any): any {
    if (data === null) {
      return null;
    }
    let date = new Date(data);
    let dateStr = ('00' + date.getDate()).slice(-2) + '/' +
      ('00' + (date.getMonth() + 1)).slice(-2) + '/' +
      date.getFullYear();
    return dateStr.toString();
  }

  getTimeFormat(data: any): any {
    if (data === null) {
      return null;
    }
    let date = new Date(data);
    let dateStr = ('00' + date.getDate()).slice(-2) + '/' +
      ('00' + (date.getMonth() + 1)).slice(-2) + '/' +
      date.getFullYear() + ' ' +
      ('00' + date.getHours()).slice(-2) + ':' +
      ('00' + date.getMinutes()).slice(-2) + ':' +
      ('00' + date.getSeconds()).slice(-2);
    return dateStr.toString();
  }

  exportExcel(): void {
    const exportList = [];
    for (let [index, item] of this.listSecMov.entries()) {
      exportList.push({
        'Ngày': this.getDateFormat(item.alloDate),
        'STT gốc': item.srcNo,
        'Ngày hiệu lực ': this.getDateFormat(item.effectDate),
        'Trạng thái': this.getStatus(item.status).name,
        'Nghiệp vụ': this.getGroupCd(item.groupCd).name,
        // 'Mã thao tác': item.globalTransId,
        'Thao tác': this.getTaskCd(item.taskCd).name,
        'Tiểu khoản ': item.subAccoNo,
        'Tăng/Giảm ': this.getTradeType(item.tradeType).name,
        'Mã CK': item.secCd,
        'Số lượng': item.quantity,
        'Loại chứng khoán': this.getQuantityType(item.quantityType).name,
        'Nội dung ': item.description,
        'Nội dung tiếng anh': item.descriptionEn,
        'Đơn vị': item.unitCode,
        'Ghi chú ': item.remarks,
        'Người duyệt': item.approvedUserId,
        'Ngày duyệt': this.getTimeFormat(item.approvedTime),
        'Người hủy': item.cancelledUserId,
        'Ngày hủy': this.getTimeFormat(item.cancelledTime),
        'Người tạo': item.createdUserId,
        'Ngày tạo': this.getTimeFormat(item.createdTime),
        'Người cập nhật': item.updatedUserId,
        'Ngày cập nhật': this.getTimeFormat(item.updatedTime),
        'STT': this.listSecMov.length - index
      });
    }
    this.exportService.exportExcel(exportList, 'Bảng kiểm soát - Giao dịch chứng khoán - ' + new Date().toString().slice(3, 15))
  }

  isAllSelected(): boolean {
    let numSelected = this.selection.selected.length;
    let numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle(): void {
    this.isAllSelected() ? this.selection.clear() : this.dataSource.data.forEach(row => this.selection.select(row));
  }

  onChangeSelected(e: any): void {
    this.selection.toggle(e);
    let corMovTemp: CorSecMov[] = this.listSecMov.filter(i => {
      return i.globalTransId === e.globalTransId && i.alloDate === e.alloDate;
    });

    if (this.selection.isSelected(e)) {
      for (let i of corMovTemp) {
        if (!this.selection.isSelected(i)) {
          this.selection.toggle(i);
        }
      }
    } else {
      for (let i of corMovTemp) {
        if (this.selection.isSelected(i)) {
          this.selection.toggle(i);
        }
      }
    }
  }
}
