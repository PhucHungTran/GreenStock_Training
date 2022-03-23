import { Injectable } from '@angular/core';
import * as xlsx from 'xlsx'
import * as fileSaver from 'file-saver'
@Injectable({
  providedIn: 'root'
})
export class ExportExcelService {

  constructor() { }
  fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  fileExtension = '.xlsx';

  public exportExcel(jsonData: any[], fileName: string): void {

    const ws: xlsx.WorkSheet = xlsx.utils.json_to_sheet(jsonData);
    const wb: xlsx.WorkBook = { Sheets: { 'data': ws }, SheetNames: ['data'] };
    const excelBuffer: any = xlsx.write(wb, { bookType: 'xlsx', type: 'array' });
    this.saveExcelFile(excelBuffer, fileName);
  }

  private saveExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], { type: this.fileType });
    fileSaver.saveAs(data, fileName + this.fileExtension);
  }
}
