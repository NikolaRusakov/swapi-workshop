import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PeopleComponent} from './people.component';
import {RouterModule, Routes} from '@angular/router';
import {DetailPanelModule} from '../detail-panel/detail-panel.module';
import {MatButtonModule, MatIconModule, MatProgressSpinnerModule} from '@angular/material';

const routes: Routes = [
  {
    children: [
      {
        path: 'people',
        loadChildren: 'src/app/components/people/people.module#PeopleModule'
      }
    ]
  },
];
@NgModule({
  declarations: [PeopleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: PeopleComponent,
      // ...routes
    }]),
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    DetailPanelModule
  ],
  exports: [PeopleComponent]
})
export class PeopleModule {
}
