export async function getPlayer(id: string) {
  const res = await fetch(`http://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/athletes/${id}?lang=en&region=us`, {
    method: "GET",
  });
  const data = await res.json();

  let collegeData = undefined;
  if (data.college) {
    const collegeRes = await fetch(data.college.$ref, { method: "GET" });
    collegeData = await collegeRes.json();
  }

  let teamData = undefined;

  if (data.team) {
    const teamRes = await fetch(data.team.$ref, { method: "GET" });
    teamData = await teamRes.json();
  }

  const player = {
    id: data.id,
    firstName: data.firstName,
    lastName: data.lastName,
    shortName: data.shortName,
    weight: data.weight,
    displayWeight: data.displayWeight,
    height: data.height,
    displayHeight: data.displayHeight,
    age: data.age,
    dateOfBirth: data.dateOfBirth,
    draftYear: data.debutYear,
    birthPlace: data.birthPlace,
    college: {
      id: collegeData ? collegeData.id : "",
      mascot: collegeData ? collegeData.mascot : "",
      name: collegeData ? collegeData.name : "",
      shortName: collegeData ? collegeData.shortName : "",
      abbrev: collegeData ? collegeData.abbrev : "",
      logo: collegeData ? collegeData.logos[0].href : "",
    },
    slug: data.slug,
    jersey: data.jersey,
    position: data.position,
    team: {
      id: teamData ? teamData.id : "",
      slug: teamData ? teamData.slug : "",
      location: teamData ? teamData.location : "",
      name: teamData ? teamData.name : "",
      abbrev: teamData ? teamData.abbreviation : "",
      displayName: teamData ? teamData.displayName : "",
      shortDisplayName: teamData ? teamData.shortDisplayName : "",
      color: teamData ? teamData.color : "",
      alternateColor: teamData ? teamData.alternateColor : "",
      logo: teamData ? teamData.logos[0].href : "",
    },
    headshot: {
      src: data.headshot.href,
      alt: data.headshot.alt,
    },
  };

  return player;
}
