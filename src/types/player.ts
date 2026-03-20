export interface Player {
  id: string;
  name: string;
  position: string;
  nationality: string;
  age: number;
  rating: number; // 0-5 stars
  value: number; // in millions
  club: string;
  goals: number;
  assists: number;
  matches: number;
  image: string;
  signed: boolean;
}

export interface Tournament {
  id: string;
  name: string;
  date: string;
  location: string;
  results: TournamentResult[];
}

export interface TournamentResult {
  id: string;
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  round: string;
}
