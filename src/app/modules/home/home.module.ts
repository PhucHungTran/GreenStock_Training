import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { SysBranchComponent } from './page/sys/sys-branch/sys-branch.component';
import { MaterialModule } from '../../shared/material.module';
import { MstSecComponent } from './page/mst/mst-sec/mst-sec.component';
import { SysMenuComponent } from './page/sys/sys-menu/sys-menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SysBranchComponent,
    MstSecComponent,
    SysMenuComponent


  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class HomeModule { }
