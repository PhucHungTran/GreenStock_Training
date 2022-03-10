import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';
import { SysService } from 'src/app/core/service/sys.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SysBranch } from 'src/app/data/schema/sys/sys-branch';
import { MatSort } from '@angular/material/sort';
@Component({
  selector: 'app-sys-branch',
  templateUrl: './sys-branch.component.html',
  styleUrls: ['./sys-branch.component.scss']
})
export class SysBranchComponent implements OnInit, AfterViewInit {
  query = {};
  listBranch: SysBranch[] = [];
  displayedColumns: string[] = ['branchCode', 'branchName', 'branchSName', 'address', 'telNo', 'faxNo', 'email', 'type', 'status',
    'remarks', 'createdUserId', 'createdTime', 'updatedUserId', 'updatedTime']

  dataSource !: MatTableDataSource<SysBranch>
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;
  constructor(
    private branchService: SysService
  ) { }



  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.getAllBranch()
  }

  applyFilter(event : Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase()
  }

  getAllBranch() {
    this.branchService.getBranch(this.query).subscribe(data => {
      this.listBranch = data.data;
      console.log(this.listBranch)

      this.dataSource = new MatTableDataSource(this.listBranch);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      // console.log(this.dataSource)
    }, err => console.log(err))
  }
}
