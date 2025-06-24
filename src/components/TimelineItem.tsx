
import { cn } from "@/lib/utils";

type TimelineItemProps = {
  year: string;
  title: string;
  subtitle?: string;
  description: string;
  isLast?: boolean;
};

export default function TimelineItem({
  year,
  title,
  subtitle,
  description,
  isLast = false,
}: TimelineItemProps) {
  return (
    <div className="relative pl-8 pb-8">
      {/* Timeline Line */}
      {!isLast && (
        <div className="absolute left-3 top-3 w-0.5 h-full bg-muted-foreground/20"></div>
      )}
      
      {/* Timeline Dot */}
      <div className="absolute left-0 top-3 w-6 h-6 rounded-full border-4 border-background bg-primary"></div>
      
      {/* Content */}
      <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 mb-1">
        <span className="text-sm font-medium px-2 py-1 rounded bg-secondary inline-block w-fit">
          {year}
        </span>
        <h3 className="text-lg md:text-xl font-bold">
          {title}
        </h3>
      </div>
      
      {subtitle && (
        <p className="text-muted-foreground font-medium mb-2">{subtitle}</p>
      )}
      
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
