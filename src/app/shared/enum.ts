import { CompetitionConfig } from './model';

export const Leagues = {
  LIGA : {
    id: '2014',
    name: 'Liga',
    path:  'liga',
    country: 'spain'
  },
  PRIMERLEAGE : {
    id: '2021',
    name: 'Premier League',
    path:  'premier-league',
    country: 'england'
  },
  SERIA : {
    id: '2019',
    name: 'Serie A',
    path:  'serie-a',
    country: 'italy'
  },
  BUNDESLIGA : {
    id: '2002',
    name: 'Bundesliga',
    path:  'bundesliga',
    country: 'germany'
  },
  LIGUE1 : {
    id: '2015',
    name: 'Ligue 1',
    path:  'ligue-1',
    country: 'france'
  },
  EREDIVISIE : {
    id: '2003',
    name: 'Eredivisie',
    path:  'eredivisie',
    country: 'netherlands'
  },
  PRIMERA : {
    id: '2017',
    name: 'Primeira Liga',
    path:  'primeira-liga',
    country: 'portugal'
  },
};

export enum StageType {
  REGULAR_SEASON = 'REGULAR_SEASON',
  GROUP_STAGE = 'GROUP_STAGE',
  ROUND_OF_16 = 'ROUND_OF_16',
  QUARTER_FINALS = 'QUARTER_FINALS',
  SEMI_FINALS = 'SEMI_FINALS',
  FINAL = 'FINAL',
}

export const Cups = {
  UEFA_CHAMPIONS_LEAGUE: <CompetitionConfig>{
    path: 'champions-league',
    id: '2001',
    name: 'UEFA champions league',
    country: 'europe',
    availableStage: [
      StageType.ROUND_OF_16,
      StageType.QUARTER_FINALS,
      StageType.SEMI_FINALS,
      StageType.FINAL
    ]
  },
  // WORLD_CUP: <CompetitionConfig>{
  //   path: 'world-cup',
  //   id: 'WC',
  //   name: 'FIFA World Cup',
  //   country: 'world',
  //   availableStage: [
  //     StageType.ROUND_OF_16,
  //     StageType.QUARTER_FINALS,
  //     StageType.SEMI_FINALS,
  //     StageType.FINAL
  //   ]
  // }
};

export enum FeedsType {
  SOFOOT_NEWS = 'http://feeds.feedburner.com/SoFoot_news',
  LEQUIPE = 'https://www.lequipe.fr/rss/actu_rss_Football.xml',
}

export enum Devices {
  DESKTOP,
  TABLET,
  PHONE
}

export enum Breakpoint {
  DESKTOP = 840,
  TABLET = 480,
  PHONE = 0
}

export enum DurationType {
  EXTRA_TIME = 'EXTRA_TIME',
  PENALTY_SHOOTOUT = 'PENALTY_SHOOTOUT',
  REGULAR = 'REGULAR'
}

export enum StandingType {
  TOTAL = 'TOTAL',
  HOME = 'HOME',
  AWAY = 'AWAY',
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

export enum CardEnum {
  YELLOW_CARD = 'YELLOW_CARD',
  RED_CARD = 'RED_CARD',
}

export enum PlayerPosition {
  Goalkeeper = 'Goalkeeper',
  Defender = 'Defender',
  Midfielder = 'Midfielder',
  Attacker = 'Attacker',
}

export enum MatchEventEnum {
  BOOKING = 'BOOKING',
  SUBSTITUTION = 'SUBSTITUTION',
  GOAL = 'GOAL',
}
export enum LangEnnum {
  EN = 'en',
  FR = 'fr',
}

