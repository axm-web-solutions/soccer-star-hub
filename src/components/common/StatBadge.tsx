interface StatBadgeProps {
  label: string;
  value: string | number;
}

const StatBadge = ({ label, value }: StatBadgeProps) => (
  <div className="flex flex-col items-center rounded-md bg-muted px-3 py-2">
    <span className="text-lg font-display font-bold text-foreground">{value}</span>
    <span className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</span>
  </div>
);

export default StatBadge;
