import gql from 'graphql-tag';


export const swapiPeople = {
  name: 'swapiPeople',
  entry: gql`
    fragment swapiPeople on People{
      height
      skin_color
      birth_year
      eye_color
      hair_color
      gender
      name
      mass
    }
  `,
};

export const swapiFilm = {
  name: 'swapiFilm',
  entry: gql`
    fragment swapiFilm on Film{
      producer
      director
      title
      release_date
      episode_id
      opening_crawl
    }
  `,
};

export const swapiPeopleFilm = {
  name: 'swapiPeopleFilm',
  entry: gql`
    fragment swapiPeopleFilm on People{
      ...swapiPeople
      films {
        ...swapiFilm
      }
    }
    ${swapiPeople.entry}
    ${swapiFilm.entry}
  `
};

export const gqlPerson = {
  name: 'gqlPerson',
  entry: gql`
    fragment gqlPerson on Person{
      id
      height
      skinColor
      birthYear
      eyeColor
      hairColor
      gender
      name
      mass
    }
  `,
};

export const gqlFilm = {
  name: 'gqlFilm',
  entry: gql`
    fragment gqlFilm on Film{
      id
      producers
      director
      title
      director
      releaseDate
      episodeID
      openingCrawl
    }
  `,
};

export const gqlPersonFilm = {
  name: 'gqlPersonFilm',
  entry: gql`
    fragment gqlPersonFilm on Person{
      ...gqlPerson
      filmConnection{
        films {
          ...gqlFilm
        }
      }
    }
    ${gqlPerson.entry}
    ${gqlFilm.entry}
  `
};
export const gqlGetNode = (nodeDef) => ({
  entry: gql`
    fragment gqlGetNode on Node{
      ${nodeDef.name}
    }
    ${nodeDef.entry}
  `
});

/*fragment comparisonFields on Character {
  name
  friendsConnection(first: $first) {
    totalCount
    edges {
      node {
        name
      }
    }
  }
}*/
