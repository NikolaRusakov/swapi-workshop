import {Component} from '@angular/core';
import {Apollo} from 'apollo-angular';
import {map} from 'rxjs/operators';
import keysToCamel from 'src/app/utils/converting-keys';
import {GQL_NODE_QUERY, GQL_PERSON_FILM_QUERY, SWAPI_PEOPLE_FILM_QUERY, SWAPI_PEOPLE_ONLY_QUERY} from '../../gql/queries';
import {MatDialog} from '@angular/material';
import {DetailDialogComponent} from '../detail-dialog/detail-dialog.component';
import {NodeGQL} from '../../gql/service-queries';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
})
export class PeopleComponent {

  details =
    this.apollo.use('extra').watchQuery({
      query: GQL_PERSON_FILM_QUERY
      // this.apollo.watchQuery({
      // query: SWAPI_PEOPLE_FILM_QUERY
    }).valueChanges.pipe(
      // @ts-ignore
      map(value => keysToCamel(value).data.allPeople.people));

  constructor(
    private readonly apollo: Apollo,
    private dialog: MatDialog,
    private feedGQL: NodeGQL
  ) {
  }


  openDetails(id: string, typename: string): void {
    console.log(id, typename);
    const details = this.feedGQL.watch({id, typename}).valueChanges.pipe(
      // @ts-ignore
      map(value => Object.entries(keysToCamel(value).data.node)
        .filter(detail => detail[0] !== '_Typename'))
    );
    details.subscribe(item => {
      console.log(item);
    });
    this.dialog.open(DetailDialogComponent, {
      width: '250px',
      data: details
    });
  }

}
