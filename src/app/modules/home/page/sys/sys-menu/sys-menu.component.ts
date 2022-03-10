
import { Component, OnInit } from '@angular/core';
import { SysMenu } from 'src/app/data/schema/sys/sys-menu';
import data from '../../../../../../data.json';

interface subtasks {
  name: string;
  completed: boolean
}
@Component({
  selector: 'app-sys-menu',
  templateUrl: './sys-menu.component.html',
  styleUrls: ['./sys-menu.component.scss']
})
export class SysMenuComponent implements OnInit {
  menu: SysMenu[] = data;
  temp = this.testFunction().test;
  tempKey = Object.keys(this.temp)

  allCompltedTemp = this.testFunction().allCompletedTemp;

  constructor() {}

  ngOnInit(): void {}

  someComplete(key: any): boolean {
    if (this.temp[key].subtasks == null) {
      return false;
    }
    return this.temp[key].subtasks.filter((t: any) => t.completed).length > 0 && !this.allCompltedTemp[key];
  }

  updateAllComplete(key: any) {
    this.allCompltedTemp[key] = this.temp[key].subtasks != null && this.temp[key].subtasks.every((t: subtasks) => t.completed);
  }

  setAll(completed: boolean, key: any) {
    this.allCompltedTemp[key] = completed
    if (this.temp[key].subtasks == null) {
      return;
    }
    this.temp[key].subtasks.forEach((t: any) => (t.completed = completed));
  }

  testFunction() {
    let allCompletedTemp: any = {};
    let test: any = {};
    this.menu.forEach(item => {
      allCompletedTemp[item.parentCode] = false
      if (test[item.parentCode]) {
        test[item.parentCode].subtasks.push({ name: item.menuName, completed: false })
      } else {
        test[item.parentCode] = {
          name: item.parentCode,
          completed: false,
          subtasks: [
            { name: item.menuName, completed: false }
          ],
        }
      }
    })
    return {
      test,
      allCompletedTemp
    };
  }

  onClear(){
    this.temp = this.testFunction().test;
    this.allCompltedTemp = this.testFunction().allCompletedTemp;
  }

  onSubmit(){
    let output : any = [];
    Object.keys(this.temp).forEach((item : any) => {
      this.temp[item].subtasks.forEach((element : any) => {
        if(element.completed){
          output.push(this.menu.find((i) => {
            return i.parentCode == item && i.menuName == element.name;
          }))
        }
      });
    })
    console.log(output)
  }

}
