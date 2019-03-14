import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PeoplePageComponent} from './people-page.component';
import {MainNavModule} from '../../material/main-nav/main-nav.module';
import {MainDashboardModule} from '../../material/main-dashboard/main-dashboard.module';
import {RouterModule} from '@angular/router';
import {DetailPanelModule} from '../../components/detail-panel/detail-panel.module';

@NgModule({
  declarations: [PeoplePageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: PeoplePageComponent,
      children: [
        {
          path: 'people',
          loadChildren: 'src/app/components/people/people.module#PeopleModule'
        }
      ]
    }]),
    MainNavModule,
    MainDashboardModule,
    DetailPanelModule
  ],
  exports: [PeoplePageComponent]
})
export class PeoplePageModule {
}
