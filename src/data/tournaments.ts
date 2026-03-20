import { Tournament } from "@/types/player";

export const initialTournaments: Tournament[] = [
  {
    id: "t1",
    name: "Copa Liga MX 2024",
    date: "2024-03-15",
    location: "Estadio Azteca, CDMX",
    results: [
      { id: "r1", homeTeam: "América", awayTeam: "Guadalajara", homeScore: 3, awayScore: 1, round: "Final" },
      { id: "r2", homeTeam: "Tigres", awayTeam: "Monterrey", homeScore: 2, awayScore: 2, round: "Semifinal" },
      { id: "r3", homeTeam: "Cruz Azul", awayTeam: "Pumas", homeScore: 1, awayScore: 0, round: "Cuartos" },
    ],
  },
  {
    id: "t2",
    name: "Torneo Apertura 2024",
    date: "2024-07-20",
    location: "Estadio BBVA, Monterrey",
    results: [
      { id: "r4", homeTeam: "Monterrey", awayTeam: "Santos", homeScore: 4, awayScore: 0, round: "Jornada 1" },
      { id: "r5", homeTeam: "León", awayTeam: "Toluca", homeScore: 2, awayScore: 3, round: "Jornada 1" },
      { id: "r6", homeTeam: "Pachuca", awayTeam: "Atlas", homeScore: 1, awayScore: 1, round: "Jornada 1" },
    ],
  },
  {
    id: "t3",
    name: "Copa Libertadores Sub-20",
    date: "2024-09-10",
    location: "Estadio Universitario, Lima",
    results: [
      { id: "r7", homeTeam: "Boca Juniors", awayTeam: "Flamengo", homeScore: 2, awayScore: 1, round: "Final" },
      { id: "r8", homeTeam: "River Plate", awayTeam: "Palmeiras", homeScore: 0, awayScore: 1, round: "Semifinal" },
    ],
  },
];
