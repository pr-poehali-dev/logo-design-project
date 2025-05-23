import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: string;
  iconColor: string;
  bgColor: string;
  title: string;
  description: string;
}

const ServiceCard = ({
  icon,
  iconColor,
  bgColor,
  title,
  description,
}: ServiceCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="text-center">
        <div
          className={`w-16 h-16 ${bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}
        >
          <Icon name={icon} className={`w-8 h-8 ${iconColor}`} />
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-center">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
