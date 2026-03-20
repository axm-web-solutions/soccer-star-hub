import { Search, Filter } from "lucide-react";

interface PlayerFiltersProps {
  search: string;
  onSearchChange: (value: string) => void;
  positionFilter: string;
  onPositionChange: (value: string) => void;
  positions: string[];
}

const PlayerFilters = ({ search, onSearchChange, positionFilter, onPositionChange, positions }: PlayerFiltersProps) => (
  <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
    <div className="relative flex-1">
      <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
      <input
        type="text"
        placeholder="Buscar jugador..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full rounded-md border border-border bg-muted py-2.5 pl-9 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
      />
    </div>
    <div className="relative">
      <Filter size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
      <select
        value={positionFilter}
        onChange={(e) => onPositionChange(e.target.value)}
        className="appearance-none rounded-md border border-border bg-muted py-2.5 pl-9 pr-8 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
      >
        <option value="">Todas las posiciones</option>
        {positions.map((pos) => (
          <option key={pos} value={pos}>{pos}</option>
        ))}
      </select>
    </div>
  </div>
);

export default PlayerFilters;
