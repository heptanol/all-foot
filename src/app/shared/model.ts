import {Durations} from './enum';

export interface Competition {
  competition: {
    id: number;
    name: string;
    area: {
      id: number;
      name: string;
    }
  };
  season: {
    id: number;
    currentMatchday: number;
  };
  standings: Standing[];
}

export interface Standing {
  group: string;
  stage: any;
  type: any;
  table: TableTeam[];
}

export interface Fixture {
  homeTeam: Team;
  awayTeam: Team;
  score: {
    duration: Durations;
    fullTime: Goals;
    halfTime: Goals;
    extraTime: Goals;
    penalties: Goals;
  };
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

