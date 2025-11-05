export type Player = {
  id: string;
  firstName: string;
  lastName: string;
  shortName: string;
  weight: number;
  displayWeight: string;
  height: number;
  displayHeight: string;
  age: number;
  dateOfBirth: string;
  draftYear: number;
  birthPlace: {
    city: string;
    state: string;
    country: string;
  };
  college: {
    id: string;
    mascot: string;
    name: string;
    shortName: string;
    abbrev: string;
    logo: string;
  };
  slug: string;
  jersey: string;
  position: {
    $ref: string;
    id: string;
    name: string;
    displayName: string;
    abbreviation: string;
    leaf: boolean;
  };
  team: {
    id: string;
    slug: string;
    location: string;
    name: string;
    abbrev: string;
    displayName: string;
    shortDisplayName: string;
    color: string;
    alternateColor: string;
    logo: string;
  };
  headshot: {
    src: string;
    alt: string;
  };
};
