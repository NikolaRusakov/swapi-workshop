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
  name: 'Person',
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
  name: 'Film',
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


const lookupMap = [
  gqlPerson,
  gqlFilm
];
export const gqlGetNode = (typename: string) => {
  const nodeDef = lookupMap.find(value => value.name === typename);
  const nodeName = `gql${nodeDef.name}`;
  return {
    entry: gql`
      fragment gqlGetNode on Node{
        ...${nodeName}
      }
      ${nodeDef.entry}
    `
  };
};
