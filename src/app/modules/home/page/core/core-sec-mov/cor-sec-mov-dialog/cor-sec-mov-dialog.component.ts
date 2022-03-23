import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CoreService } from 'src/app/core/service/core.service';
import { CorSecMov } from 'src/app/data/schema/core/cor-sec-mov';
@Component({
  selector: 'app-cor-sec-mov-dialog',
  templateUrl: './cor-sec-mov-dialog.component.html',
  styleUrls: ['./cor-sec-mov-dialog.component.scss']
})
export class CorSecMovDialogComponent implements OnInit {

  ACTION_APPROVE = 'approve';
  ACTION_CANCEL = 'cancel';

  action !: string;

  corSecMov !: CorSecMov[];

  message = '';
  title = '';
  titleConfirm = '';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<CorSecMovDialogComponent>,
    private coreService: CoreService
  ) {
    this.action = data.action;
    this.ACTION_APPROVE = 'approve';
    this.ACTION_CANCEL = 'cancel';
    this.corSecMov = data.data;
    if (this.action === this.ACTION_APPROVE) {
      this.title = 'Duyệt yêu cầu';
      this.titleConfirm = 'Duyệt';
      this.message = 'Xác nhận duyệt yêu cầu';
    } else if (this.action === this.ACTION_CANCEL) {
      this.title = 'Hủy yêu cầu';
      this.titleConfirm = 'Hủy';
      this.message = 'Xác nhận hủy yêu cầu';
    }
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.action === this.ACTION_APPROVE) {
      this.coreService.approvedCorSecMov(this.corSecMov).subscribe(data => {
        this.dialogRef.close();
      }, err => console.log(err))
    } else if (this.action === this.ACTION_CANCEL) {
      this.coreService.cancelCorSecMov(this.corSecMov).subscribe(data => {
        this.dialogRef.close();
      }, err => console.log(err))
    }
  }

  onCancel(){
    this.dialogRef.close();
  }

}
