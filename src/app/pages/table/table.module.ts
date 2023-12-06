import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { IgxGridModule } from 'igniteui-angular';
import { TableRoutingModule } from './table-routing.module';



@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    IgxGridModule,
    TableRoutingModule
  ]
})
export class TableModule { }
