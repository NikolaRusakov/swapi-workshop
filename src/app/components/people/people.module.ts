import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PeopleComponent} from './people.component';
import {RouterModule, Routes} from '@angular/router';
import {DetailPanelModule} from '../detail-panel/detail-panel.module';

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
    DetailPanelModule
  ],
  exports: [PeopleComponent]
})
export class PeopleModule {
}
