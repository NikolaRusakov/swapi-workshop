import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { MainNavComponent } from './main-nav.component';
import {RouterModule} from '@angular/router';
import {PeoplePageComponent} from '../../pages/people-page/people-page.component';

@NgModule({
  declarations: [MainNavComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: PeoplePageComponent,
      children: [
        {
          path: 'people',
          loadChildren: 'src/app/components/people/people.module#PeopleModule'
        },
        {
          path: 'connections',
          loadChildren: 'src/app/components/connections/connections.module#ConnectionsModule'
        }
      ]
    }]),
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule
  ], exports: [MainNavComponent]
})
export class MainNavModule {
}
