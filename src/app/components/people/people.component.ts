import {Component, OnInit} from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  details = this.apollo.watchQuery({
    query: gql`
      {
        people {
          url
          homeworld
          height
          skin_color
          birth_year
          eye_color
          hair_color
          gender
          name
          mass
          films {
            producer
            director
            release_date
            title
            episode_id
            opening_crawl
          }
        }
      }
    `
    // @ts-ignore
  }).valueChanges.pipe(map(value => value.data.people));

  constructor(private readonly apollo: Apollo) {
  }

  ngOnInit() {
  }

}
