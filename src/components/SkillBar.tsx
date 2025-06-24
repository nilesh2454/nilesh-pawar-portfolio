
type SkillBarProps = {
  name: string;
  percentage: number;
};

export default function SkillBar({ name, percentage }: SkillBarProps) {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="font-semibold">{name}</span>
        <span className="text-muted-foreground">{percentage}%</span>
      </div>
      <div className="skill-bar">
        <div 
          className="skill-progress" 
          style={{ '--progress': `${percentage}%` } as React.CSSProperties} 
        />
      </div>
    </div>
  );
}
