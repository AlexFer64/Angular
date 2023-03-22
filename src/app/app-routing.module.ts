import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListCDsComponent } from './list-cds/list-cds.component';
import {  CdComponent } from './cd/cd.component';

const routes: Route[] = [
  {path: '', component: HomeComponent},
  {path: 'catalog', component: ListCDsComponent},
  {path: 'cd/:id', component: CdComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
