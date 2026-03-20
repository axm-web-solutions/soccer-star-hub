import { Player } from "@/types/player";
import StarRating from "@/components/common/StarRating";
import StatBadge from "@/components/common/StatBadge";
import { UserCheck, UserPlus } from "lucide-react";

interface PlayerCardProps {
  player: Player;
  onSign: (id: string) => void;
}

const PlayerCard = ({ player, onSign }: PlayerCardProps) => (
  <div className="group relative overflow-hidden rounded-lg border border-border bg-card p-0 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 animate-slide-up">
    {/* Header band */}
    <div className="flex items-center gap-3 border-b border-border bg-muted/50 px-4 py-3">
      <img
        src={player.image}
        alt={player.name}
        className="h-12 w-12 rounded-full object-cover ring-2 ring-primary/30"
      />
      <div className="flex-1 min-w-0">
        <h3 className="font-display text-lg font-bold uppercase tracking-wide truncate text-foreground">
          {player.name}
        </h3>
        <p className="text-xs text-muted-foreground">
          {player.position} · {player.nationality}
        </p>
      </div>
      <span className="font-display text-xl font-bold text-primary">
        €{player.value}M
      </span>
    </div>

    {/* Body */}
    <div className="px-4 py-4 space-y-4">
      <div className="flex items-center justify-between">
        <StarRating rating={player.rating} />
        <span className="text-xs text-muted-foreground">
          {player.age} años · {player.club}
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2">
        <StatBadge label="Goles" value={player.goals} />
        <StatBadge label="Asist." value={player.assists} />
        <StatBadge label="PJ" value={player.matches} />
      </div>

      <button
        onClick={() => onSign(player.id)}
        className={`w-full flex items-center justify-center gap-2 rounded-md px-4 py-2.5 font-display text-sm font-semibold uppercase tracking-wider transition-all ${
          player.signed
            ? "bg-primary/20 text-primary cursor-default"
            : "bg-primary text-primary-foreground hover:brightness-110 active:scale-[0.98]"
        }`}
        disabled={player.signed}
      >
        {player.signed ? (
          <>
            <UserCheck size={16} /> Fichado
          </>
        ) : (
          <>
            <UserPlus size={16} /> Fichar Jugador
          </>
        )}
      </button>
    </div>
  </div>
);

export default PlayerCard;
