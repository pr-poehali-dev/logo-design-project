import { icons } from "lucide-react";

interface IconProps {
  name: keyof typeof icons;
  className?: string;
  size?: number;
  fallback?: keyof typeof icons;
}

const Icon: React.FC<IconProps> = ({
  name,
  className,
  size = 24,
  fallback = "CircleAlert",
}) => {
  const LucideIcon = icons[name] || icons[fallback];

  return <LucideIcon className={className} size={size} />;
};

export default Icon;
