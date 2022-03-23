import { SysMenuComponent } from './modules/home/page/sys/sys-menu/sys-menu.component';
import { MstSecComponent } from './modules/home/page/mst/mst-sec/mst-sec.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SysBranchComponent } from './modules/home/page/sys/sys-branch/sys-branch.component';
import { CorSecMovComponent } from './modules/home/page/core/core-sec-mov/core-sec-mov.component';
const routes: Routes = [
  {path: '',redirectTo : '/cor-sec-mov', pathMatch: 'full'},
  {path: 'cor-sec-mov', component: CorSecMovComponent},
  {path: 'sys-branch', component: SysBranchComponent},
  {path: 'mst-sec', component: MstSecComponent},
  {path: 'sys-menu',component: SysMenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
