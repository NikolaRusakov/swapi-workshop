import gql from 'graphql-tag';
import {swapiPeopleFilm, swapiPeople, gqlPersonFilm} from './fragments';

export const SWAPI_PEOPLE_FILM_QUERY = gql`
  {
    people {
      ...swapiPeopleFilm
    }
  }
  ${swapiPeopleFilm.entry}
`;

export const GQL_PERSON_FILM_QUERY = gql`
  {
    allPeople {
      people{
        ...gqlPersonFilm
      }
    }
  }
  ${gqlPersonFilm.entry}
`;

export const SWAPI_PEOPLE_ONLY_QUERY = gql`
  {
    people {
      ...swapiPeople
    }
  }
  ${swapiPeople.entry}
`;


export const GQL_NODE_QUERY = gql`
  query getNode($id: id){
    node(id: $id){
      ...swapiPeople
    }
  }
  ${swapiPeople.entry}
`;

