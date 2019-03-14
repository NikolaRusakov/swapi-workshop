import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DetailPanelComponent} from './detail-panel.component';
import {MatExpansionModule} from '@angular/material';

@NgModule({
  declarations: [DetailPanelComponent],
  imports: [
    CommonModule,
    MatExpansionModule
  ],
  exports: [DetailPanelComponent]
})
export class DetailPanelModule {
}
