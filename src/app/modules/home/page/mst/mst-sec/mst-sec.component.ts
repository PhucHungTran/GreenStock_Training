import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MstSec } from 'src/app/data/schema/mst/mst-sec';
import { MstService } from 'src/app/core/service/mst.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-mst-sec',
  templateUrl: './mst-sec.component.html',
  styleUrls: ['./mst-sec.component.scss'],

})
export class MstSecComponent implements OnInit, AfterViewInit {
  query = {};
  listMstSec : MstSec[] = [];
  dataSearch = [''];
  displayedColumns: string[] = ['secCd', 'secType', 'secSName', 'secName',
  'capitalValue', 'listedQty', 'foreignMaxQty','stockDividendRate','cashDividendRate', 'marketCd', 'tradingLot', 'parValue', 'maxRoom', 'status', 'remarks', 'createdUserId', 'createdTime', 'updatedUserId', 'updatedTime'];
  dataSource !: MatTableDataSource<MstSec>
  panigatorSize : number[] = [10,25,50,100]
  @ViewChild(MatPaginator) panigator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;
  constructor(
    private mstService : MstService
  ) { }

  ngAfterViewInit(): void {
    this.getAllMstSec();
  }

  ngOnInit(): void {

  }

  getAllMstSec() {
    this.mstService.getMstSec(this.query).subscribe(data => {
      this.listMstSec = data.data;
      this.dataSearch.push()
      this.dataSource = new MatTableDataSource(this.listMstSec);
      this.dataSource.paginator = this.panigator;
      this.dataSource.sort = this.sort;
      this.dataSource.filterPredicate = (data : any, filterValue : string) => {
      return data.secSName.trim().toLowerCase().indexOf(filterValue.trim().toLocaleLowerCase()) >= 0;

    }
    }, err => console.log(err))
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}


