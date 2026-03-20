import { useState, useMemo, useCallback } from "react";
import { Player } from "@/types/player";
import { initialPlayers } from "@/data/players";

export const usePlayers = () => {
  const [players, setPlayers] = useState<Player[]>(initialPlayers);
  const [search, setSearch] = useState("");
  const [positionFilter, setPositionFilter] = useState("");

  const positions = useMemo(
    () => [...new Set(players.map((p) => p.position))],
    [players]
  );

  const filtered = useMemo(() => {
    return players.filter((p) => {
      const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
      const matchesPosition = !positionFilter || p.position === positionFilter;
      return matchesSearch && matchesPosition;
    });
  }, [players, search, positionFilter]);

  const signPlayer = useCallback((id: string) => {
    setPlayers((prev) =>
      prev.map((p) => (p.id === id ? { ...p, signed: true } : p))
    );
  }, []);

  const signedCount = useMemo(() => players.filter((p) => p.signed).length, [players]);

  return {
    players: filtered,
    search,
    setSearch,
    positionFilter,
    setPositionFilter,
    positions,
    signPlayer,
    signedCount,
    totalCount: players.length,
  };
};
