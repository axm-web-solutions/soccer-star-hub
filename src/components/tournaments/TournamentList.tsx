import { Tournament } from "@/types/player";
import TournamentCard from "./TournamentCard";

interface TournamentListProps {
  tournaments: Tournament[];
}

const TournamentList = ({ tournaments }: TournamentListProps) => (
  <div className="space-y-5">
    {tournaments.map((t) => (
      <TournamentCard key={t.id} tournament={t} />
    ))}
  </div>
);

export default TournamentList;
