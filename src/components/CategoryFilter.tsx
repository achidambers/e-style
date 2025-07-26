import { Button } from "@/components/ui/button";
import { Heart, Stethoscope, GraduationCap, Users, TreePine, Home, Gamepad2 } from "lucide-react";

interface Category {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  count: number;
}

const categories: Category[] = [
  { id: "all", name: "All", icon: Users, count: 1234 },
  { id: "medical", name: "Medical", icon: Stethoscope, count: 456 },
  { id: "education", name: "Education", icon: GraduationCap, count: 234 },
  { id: "emergency", name: "Emergency", icon: Heart, count: 123 },
  { id: "environment", name: "Environment", icon: TreePine, count: 89 },
  { id: "community", name: "Community", icon: Home, count: 167 },
  { id: "creative", name: "Creative", icon: Gamepad2, count: 78 },
];

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export const CategoryFilter = ({ selectedCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {categories.map((category) => {
        const IconComponent = category.icon;
        const isSelected = selectedCategory === category.id;
        
        return (
          <Button
            key={category.id}
            variant={isSelected ? "default" : "outline"}
            onClick={() => onCategoryChange(category.id)}
            className={`flex items-center gap-2 transition-smooth ${
              isSelected 
                ? "shadow-glow" 
                : "hover:shadow-card"
            }`}
          >
            <IconComponent className="h-4 w-4" />
            <span>{category.name}</span>
            <span className="text-xs opacity-75">({category.count})</span>
          </Button>
        );
      })}
    </div>
  );
};