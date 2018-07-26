export interface Competition {
  id: number;
  lastUpdated: string;
  currentSeason: CurrentSeason;
  area: any;
  name: string;
}

export interface CurrentSeason {
  currentMatchday: number;
}

export interface Fixture {
  homeTeam: Team;
  awayTeam: Team;
  score: Score;
  diff: string;
  utcDate: string;
  status: string;
  id: number;
  matchday: number;
}

export interface Team {
  id: number;
  name: string;
}
export interface Score {
  fullTime: Goals;
  halfTime: Goals;
  extraTime: Goals;
  penalties: Goals;
}
export interface Goals {
  homeTeam: number;
  awayTeam: number;
}

export interface TableTeam  {
  'goalDifference': number;
  'goals': number;
  'goalsAgainst': number;
  'playedGames': number;
  'points': number;
  'position': number;
  'teamName': string;
  'teamId': number;
  'wins': number;
  'losses': number;
  'draws': number;
}

