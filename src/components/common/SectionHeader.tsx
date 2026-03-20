import { ReactNode } from "react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
}

const SectionHeader = ({ title, subtitle, icon }: SectionHeaderProps) => (
  <div className="flex items-center gap-3 mb-6">
    {icon && <div className="flex items-center justify-center h-10 w-10 rounded-md bg-primary/15 text-primary">{icon}</div>}
    <div>
      <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-foreground">{title}</h2>
      {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
    </div>
  </div>
);

export default SectionHeader;
