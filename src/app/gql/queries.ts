import gql from 'graphql-tag';
import {swapiPeopleFilm, swapiPeople, gqlPersonFilm, gqlGetNode, gqlPerson} from './fragments';

export const SWAPI_PEOPLE_FILM_QUERY = gql`
  {
    people {
      ...swapiPeopleFilm
    }
  }
  ${swapiPeopleFilm.entry}
`;


export const SWAPI_PEOPLE_ONLY_QUERY = gql`
  {
    people {
      ...swapiPeople
    }
  }
  ${swapiPeople.entry}
`;


export const GQL_PERSON_FILM_QUERY = gql`
  {
    allPeople {
      people{
        id
        ...gqlPersonFilm
      }
    }
  }
  ${gqlPersonFilm.entry}
`;

export const GQL_NODE_QUERY =
  gql`
    query node($id: ID!){
      node(id: $id){
        id
        ...gqlPerson
      }
    }
    ${gqlPerson.entry}
  `/*,
  variables: {id}
}*/;


