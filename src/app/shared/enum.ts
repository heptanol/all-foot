
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

export const OthersLeagues = {
  UEFA_CHAMPIONS_LEAGUE: {
    id: '2001',
    name: 'UEFA champions league',
    country: 'europe',
    currentMatchDay: 1
  }
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


