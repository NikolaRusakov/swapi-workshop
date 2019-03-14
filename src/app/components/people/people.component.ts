import {Component, OnInit} from '@angular/core';
import {Apollo} from 'apollo-angular';
import {map, withLatestFrom} from 'rxjs/operators';
import keysToCamel from 'src/app/utils/converting-keys';
import {GQL_NODE_QUERY, GQL_PERSON_FILM_QUERY, SWAPI_PEOPLE_FILM_QUERY, SWAPI_PEOPLE_ONLY_QUERY} from '../../gql/queries';
import {MatDialog} from '@angular/material';
import {DetailDialogComponent} from '../detail-dialog/detail-dialog.component';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  details =
    // this.apollo.use('extra').watchQuery({
    //     query: GQL_PERSON_FILM_QUERY
    this.apollo.watchQuery({
    query: SWAPI_PEOPLE_FILM_QUERY
  }).valueChanges.pipe(
    // @ts-ignore
    map(value => keysToCamel(value).data.people));

  constructor(
    private readonly apollo: Apollo,
    private dialog: MatDialog,
  ) {
  }

  openDetails(id: string): void {

    this.apollo.use('extra').watchQuery({
      query: GQL_NODE_QUERY,
      variables: {
        id
      }
    }).valueChanges.pipe(
      // @ts-ignore
      map(value => keysToCamel(value).data.people),
      withLatestFrom(([, last]) => {
          this.dialog.open(DetailDialogComponent, {
            width: '250px',
            data: {...last}
          });
        }
      )
    );
  }

  ngOnInit() {
  }

}
