import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { SysBranchComponent } from './page/sys/sys-branch/sys-branch.component';
import { MaterialModule } from '../../shared/material.module';
import { MstSecComponent } from './page/mst/mst-sec/mst-sec.component';
import { SysMenuComponent } from './page/sys/sys-menu/sys-menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CorSecMovComponent } from './page/core/core-sec-mov/core-sec-mov.component';
import { CorSecMovDialogComponent } from './page/core/core-sec-mov/cor-sec-mov-dialog/cor-sec-mov-dialog.component';



@NgModule({
  declarations: [
    SysBranchComponent,
    MstSecComponent,
    SysMenuComponent,
    CorSecMovComponent,
    CorSecMovDialogComponent


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
