import {NgModule, Inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DetailDialogComponent} from './detail-dialog.component';
import {MAT_DIALOG_DATA, MatButtonModule, MatCardModule, MatDialogRef, MatDialogModule} from '@angular/material';

@NgModule({
  declarations: [DetailDialogComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [DetailDialogComponent]
})
export class DetailDialogModule {
}
