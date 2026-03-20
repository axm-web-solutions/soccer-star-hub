import { useState } from "react";
import { Users, Trophy, TrendingUp, Shield } from "lucide-react";
import { usePlayers } from "@/hooks/usePlayers";
import { initialTournaments } from "@/data/tournaments";
import PlayerGrid from "@/components/players/PlayerGrid";
import PlayerFilters from "@/components/players/PlayerFilters";
import TournamentList from "@/components/tournaments/TournamentList";
import SectionHeader from "@/components/common/SectionHeader";

type Tab = "players" | "tournaments";

const Index = () => {
  const [activeTab, setActiveTab] = useState<Tab>("players");
  const {
    players,
    search,
    setSearch,
    positionFilter,
    setPositionFilter,
    positions,
    signPlayer,
    signedCount,
    totalCount,
  } = usePlayers();

  const tabs: { key: Tab; label: string; icon: React.ReactNode }[] = [
    { key: "players", label: "Jugadores", icon: <Users size={18} /> },
    { key: "tournaments", label: "Torneos", icon: <Trophy size={18} /> },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Header */}
      <header className="border-b border-border" style={{ background: "var(--gradient-hero)" }}>
        <div className="container py-8">
          <div className="flex items-center gap-3 mb-2">
            <Shield className="text-primary" size={32} />
            <h1 className="font-display text-4xl font-bold uppercase tracking-wider text-gradient">
              Football Manager
            </h1>
          </div>
          <p className="text-muted-foreground text-sm">
            Gestión de jugadores, fichajes y resultados de torneos
          </p>

          {/* Stats bar */}
          <div className="mt-6 flex gap-6">
            <div className="flex items-center gap-2 text-sm">
              <TrendingUp size={16} className="text-primary" />
              <span className="text-muted-foreground">Fichados:</span>
              <span className="font-display font-bold text-primary">{signedCount}/{totalCount}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Trophy size={16} className="text-accent" />
              <span className="text-muted-foreground">Torneos:</span>
              <span className="font-display font-bold text-accent">{initialTournaments.length}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Tab Nav */}
      <nav className="border-b border-border bg-card/50 sticky top-0 z-10 backdrop-blur-sm">
        <div className="container flex gap-1 py-1">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex items-center gap-2 rounded-md px-5 py-2.5 font-display text-sm font-semibold uppercase tracking-wider transition-all ${
                activeTab === tab.key
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Content */}
      <main className="container py-8 space-y-6">
        {activeTab === "players" && (
          <>
            <SectionHeader
              title="Plantilla de Jugadores"
              subtitle={`${players.length} jugadores encontrados`}
              icon={<Users size={20} />}
            />
            <PlayerFilters
              search={search}
              onSearchChange={setSearch}
              positionFilter={positionFilter}
              onPositionChange={setPositionFilter}
              positions={positions}
            />
            <PlayerGrid players={players} onSign={signPlayer} />
          </>
        )}

        {activeTab === "tournaments" && (
          <>
            <SectionHeader
              title="Resultados de Torneos"
              subtitle="Historial de partidos y resultados"
              icon={<Trophy size={20} />}
            />
            <TournamentList tournaments={initialTournaments} />
          </>
        )}
      </main>
    </div>
  );
};

export default Index;
