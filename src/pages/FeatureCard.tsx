import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  pattern: string;
  onClick: () => void;
  index: number;
}

const FeatureCard = ({ icon: Icon, title, description, color, pattern, onClick, index }: FeatureCardProps) => {
  return (
    <Card
      onClick={onClick}
      className="group relative cursor-pointer overflow-hidden rounded-xl border-2 border-white/10 bg-gradient-to-br from-gray-900/80 to-gray-800/70 p-1 shadow-lg transition-all duration-300 hover:border-blue-400/50 hover:shadow-blue-500/20 hover:-translate-y-1"
      style={{ animation: `fade-in-up 0.5s ${index * 0.1}s ease-out forwards`, opacity: 0 }}
    >
      {/* Background Pattern */}
      <div
        className={`absolute inset-0 h-full w-full bg-repeat opacity-5 transition-opacity duration-500 group-hover:opacity-10 ${pattern}`}
      ></div>

      <div className="relative z-10 h-full rounded-lg bg-background/80 p-4 backdrop-blur-sm">
        <CardHeader className="text-center">
          {/* Icon */}
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-gray-800 to-gray-700 shadow-inner">
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-full bg-black/40 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg ${color.replace('text-', 'shadow-')}/50`}
            >
              <Icon className={`h-6 w-6 transition-colors duration-300 ${color}`} />
            </div>
          </div>

          {/* Title */}
          <CardTitle className="text-lg font-semibold text-primary-foreground transition-colors duration-300 group-hover:text-blue-300">
            {title}
          </CardTitle>

          {/* Description */}
          <CardDescription className="mt-2 text-sm text-primary-foreground/70">
            {description}
          </CardDescription>
        </CardHeader>
      </div>

      {/* Hover Glow Effect */}
      <div
        className={`absolute -top-1/2 -left-1/2 h-[200%] w-[200%] animate-spin-slow bg-gradient-conic from-transparent via-blue-500/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
      ></div>
    </Card>
  );
};

export default FeatureCard;