export interface Competition {
  id: string;
  caption: string;
  currentMatchday: number;
  lastUpdated: string;
  league: string;
  numberOfGames: string;
  numberOfMatchdays: number;
  numberOfTeams: string;
  year: string;
}

export interface Fixture {
  awayTeamId: number;
  awayTeamName: string;
  competitionId: number;
  date: string;
  homeTeamId: number;
  homeTeamName: string;
  id: number;
  matchday: number;
  odds: any;
  result: {
    goalsHomeTeam: number;
    goalsAwayTeam: number;
    halfTime: {
      goalsHomeTeam: number;
      goalsAwayTeam: number;
    }
  };
  status: string;
}

export interface Ranking  {
  'goalDifference': number;
  'goals': number;
  'goalsAgainst': number;
  'playedGames': number;
  'points': number;
  'rank': number;
  'team': string;
  'teamId': number;
}

