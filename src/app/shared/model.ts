export interface Competition {
  id: number;
  lastUpdated: string;
  currentSeason: {
    currentMatchday: number;
  };
  area: any;
  name: string;
}

export interface Fixture {
  homeTeam: Team;
  awayTeam: Team;
  score: Score;
  diff: string;
  utcDate: string;
  status: StatusType;
  id: number;
  matchday: number;
}

export interface Team {
  id: number;
  name: string;
  crestUrl?: string;
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
  position: number;
  team: Team;
  playedGames: number;
  won: number;
  draw: number;
  lost: number;
  points: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
}

export enum StatusType {
  SCHEDULED = 'SCHEDULED',
  LIVE = 'LIVE',
  IN_PLAY = 'IN_PLAY',
  PAUSED = 'PAUSED',
  FINISHED = 'FINISHED',
  POSTPONED = 'POSTPONED',
  SUSPENDED = 'SUSPENDED',
  CANCELED = 'CANCELED'
}

