import { Button } from "@/components/ui/button";
import { Heart, Search, User, Menu } from "lucide-react";
import { Input } from "@/components/ui/input";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-gradient-hero p-2 rounded-lg">
            <Heart className="h-6 w-6 text-white" />
          </div>
          <span className="font-bold text-xl bg-gradient-hero bg-clip-text text-transparent">
            FundRise
          </span>
        </div>

        {/* Search Bar - Hidden on mobile */}
        <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search fundraisers..."
              className="pl-10 bg-muted/50 border-none focus:bg-card transition-smooth"
            />
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
            Discover
          </Button>
          <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
            How it works
          </Button>
          <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
            About
          </Button>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Button variant="outline" className="hidden sm:flex">
            <User className="h-4 w-4 mr-2" />
            Sign In
          </Button>
          <Button variant="hero" className="hidden sm:flex">
            Start Fundraiser
          </Button>
          
          {/* Mobile menu button */}
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};