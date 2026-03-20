import { Player } from "@/types/player";
import PlayerCard from "./PlayerCard";

interface PlayerGridProps {
  players: Player[];
  onSign: (id: string) => void;
}

const PlayerGrid = ({ players, onSign }: PlayerGridProps) => (
  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    {players.map((player) => (
      <PlayerCard key={player.id} player={player} onSign={onSign} />
    ))}
  </div>
);

export default PlayerGrid;
