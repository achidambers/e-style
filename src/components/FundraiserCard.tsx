import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Heart, Share2, Users } from "lucide-react";

interface FundraiserCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  goal: number;
  raised: number;
  donors: number;
  category: string;
  timeLeft: string;
  creator: string;
}

export const FundraiserCard = ({
  title,
  description,
  image,
  goal,
  raised,
  donors,
  category,
  timeLeft,
  creator,
}: FundraiserCardProps) => {
  const percentage = (raised / goal) * 100;

  return (
    <Card className="group bg-gradient-card hover:shadow-hover transition-smooth hover:scale-105 border border-border/50">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover transition-smooth group-hover:scale-110"
          />
          <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
            {category}
          </Badge>
          <div className="absolute top-3 right-3 flex gap-2">
            <Button size="icon" variant="outline" className="h-8 w-8 bg-white/90 hover:bg-white">
              <Heart className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="outline" className="h-8 w-8 bg-white/90 hover:bg-white">
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2 text-card-foreground">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {description}
        </p>
        <div className="space-y-3">
          <div className="flex justify-between items-center text-sm">
            <span className="font-semibold text-success-green">
              ${raised.toLocaleString()} raised
            </span>
            <span className="text-muted-foreground">
              {percentage.toFixed(0)}% of ${goal.toLocaleString()}
            </span>
          </div>
          <Progress value={percentage} className="h-2" />
          <div className="flex justify-between items-center text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span>{donors} donors</span>
            </div>
            <span>{timeLeft}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <div className="w-full">
          <p className="text-xs text-muted-foreground mb-3">
            Created by <span className="font-medium">{creator}</span>
          </p>
          <Button className="w-full" variant="hero">
            Donate Now
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};