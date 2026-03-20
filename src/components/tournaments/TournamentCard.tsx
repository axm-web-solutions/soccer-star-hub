import { Tournament } from "@/types/player";
import { Calendar, MapPin } from "lucide-react";

interface TournamentCardProps {
  tournament: Tournament;
}

const TournamentCard = ({ tournament }: TournamentCardProps) => (
  <div className="rounded-lg border border-border bg-card overflow-hidden animate-slide-up">
    <div className="bg-muted/50 px-5 py-4 border-b border-border">
      <h3 className="font-display text-lg font-bold uppercase tracking-wide text-foreground">
        {tournament.name}
      </h3>
      <div className="mt-1 flex items-center gap-4 text-xs text-muted-foreground">
        <span className="flex items-center gap-1"><Calendar size={12} /> {tournament.date}</span>
        <span className="flex items-center gap-1"><MapPin size={12} /> {tournament.location}</span>
      </div>
    </div>
    <div className="divide-y divide-border">
      {tournament.results.map((result) => (
        <div key={result.id} className="flex items-center justify-between px-5 py-3 hover:bg-muted/30 transition-colors">
          <span className="text-xs uppercase tracking-wider text-muted-foreground w-20">{result.round}</span>
          <div className="flex items-center gap-3 flex-1 justify-center">
            <span className="text-sm font-medium text-foreground text-right flex-1">{result.homeTeam}</span>
            <div className="flex items-center gap-1 rounded bg-muted px-3 py-1 font-display text-sm font-bold">
              <span className={result.homeScore > result.awayScore ? "text-primary" : "text-foreground"}>{result.homeScore}</span>
              <span className="text-muted-foreground">-</span>
              <span className={result.awayScore > result.homeScore ? "text-primary" : "text-foreground"}>{result.awayScore}</span>
            </div>
            <span className="text-sm font-medium text-foreground text-left flex-1">{result.awayTeam}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default TournamentCard;
