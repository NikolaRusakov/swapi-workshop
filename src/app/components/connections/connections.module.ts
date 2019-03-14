import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnectionsComponent } from './connections.component';
import {MatProgressSpinnerModule} from '@angular/material';
import {DetailPanelModule} from '../detail-panel/detail-panel.module';

@NgModule({
  declarations: [ConnectionsComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    DetailPanelModule
  ],
  exports: [ConnectionsComponent]

})
export class ConnectionsModule { }
