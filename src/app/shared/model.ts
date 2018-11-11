import {CardEnum, DurationType, StageType, StandingType, StatusType} from './enum';


/************************
 *      API Object      *
 ************************/
export interface CompetitionResponse {
  competition: Competition;
  season: Season;
  standings: Standing[];
}
export interface MatchResponse {
  competition: Competition;
  matches: Match[];
  totalMatchDays: number;
}
/************************
 * Competition Object   *
 ************************/
export interface Competition {
  id: number;
  name: string;
  plan: string;
  code: string;
  area: {
    id: number;
    name: string;
  };
}

export interface Season {
  id: number;
  currentMatchday: number;
  startDate: string;
  endDate: string;
}

export interface Standing {
  group: string;
  stage: StageType;
  type: StandingType;
  table: TableTeam[];
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

/************************
 *    Match Object      *
 ************************/
export interface Match {
  homeTeam: Team;
  awayTeam: Team;
  minute: number;
  score: {
    duration: DurationType;
    fullTime: Goals;
    halfTime: Goals;
    extraTime: Goals;
    penalties: Goals;
    winner: string;
  };
  diff: string;
  utcDate: string;
  status: StatusType;
  stage: StageType;
  id: number;
  matchday: number;
  goals: Goal[];
  bookings?: Booking[];
  substitutions?: Substitution[];
}

export interface Team {
  id: number;
  name: string;
  captain: Player;
  coach: Coach;
  lineup: Player[];
  bench: Player[];
  crestUrl?: string;
}

export interface Goals {
  homeTeam: number;
  awayTeam: number;
}

export interface Player {
  countryOfBirth: string;
  dateOfBirth: string;
  firstName: string;
  id: string;
  lastName: string;
  lastUpdated: string;
  name: string;
  nationality: string;
  position: string;
  shirtNumber: number;
}

export interface Coach {
  countryOfBirth: string;
  id: number;
  name: string;
  nationality: string;
}

export interface ScorerTable {
  player: Player;
  team: Team;
  numberOfGoals: number;
}


export interface CompetitionConfig {
  path: string;
  id: string;
  name: string;
  country: string;
  availableStage?: any[];
}

export interface News {
  link: string;
  pubDate: string;
  title: string;
  enclosure?: {};
}

export interface Goal {
  minute: number;
  scorer: Player;
  team: Team;
  extraTime: string;
  assist: Player;
  type: string;
}

export interface Booking {
  card: CardEnum;
  minute: number;
  player: Player;
  team: Team;
}

export interface Substitution {
  minute: number;
  playerIn: Player;
  playerOut: Player;
  team: Team;
}


