import { useState } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { CategoryFilter } from "@/components/CategoryFilter";
import { FundraiserCard } from "@/components/FundraiserCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, Shield, Clock, Heart } from "lucide-react";

// Mock data for fundraisers
const mockFundraisers = [
  {
    id: "1",
    title: "Help Sarah Beat Cancer",
    description: "Supporting Sarah's medical treatment and recovery journey. Every donation brings hope.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
    goal: 50000,
    raised: 32500,
    donors: 284,
    category: "Medical",
    timeLeft: "23 days left",
    creator: "Mark Johnson"
  },
  {
    id: "2", 
    title: "Clean Water for Rural Communities",
    description: "Building wells to provide clean, safe drinking water to underserved communities.",
    image: "https://images.unsplash.com/photo-1594736797933-d0001ba2fe65?w=400&h=300&fit=crop",
    goal: 25000,
    raised: 18750,
    donors: 156,
    category: "Community",
    timeLeft: "15 days left",
    creator: "Water For All NGO"
  },
  {
    id: "3",
    title: "Scholarship Fund for Underprivileged Students",
    description: "Providing educational opportunities to talented students who need financial support.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop",
    goal: 30000,
    raised: 22100,
    donors: 198,
    category: "Education",
    timeLeft: "30 days left",
    creator: "Education First Foundation"
  },
  {
    id: "4",
    title: "Disaster Relief Emergency Fund",
    description: "Immediate assistance for families affected by recent natural disasters.",
    image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=300&fit=crop",
    goal: 75000,
    raised: 45200,
    donors: 423,
    category: "Emergency",
    timeLeft: "8 days left",
    creator: "Relief Network"
  },
  {
    id: "5",
    title: "Save the Local Forest",
    description: "Protecting endangered wildlife habitat and preserving our natural heritage.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop",
    goal: 40000,
    raised: 28900,
    donors: 312,
    category: "Environment",
    timeLeft: "45 days left",
    creator: "Green Earth Initiative"
  },
  {
    id: "6",
    title: "Independent Film Production",
    description: "Supporting local filmmakers in creating meaningful stories that inspire change.",
    image: "https://images.unsplash.com/photo-1489599849671-f5532dcf4cce?w=400&h=300&fit=crop",
    goal: 15000,
    raised: 8750,
    donors: 87,
    category: "Creative",
    timeLeft: "20 days left",
    creator: "Indie Films Collective"
  }
];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredFundraisers = selectedCategory === "all" 
    ? mockFundraisers 
    : mockFundraisers.filter(f => f.category.toLowerCase() === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      
      {/* Trust Indicators */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <Shield className="h-8 w-8 text-primary" />
              <p className="font-semibold">Secure Payments</p>
              <p className="text-sm text-muted-foreground">256-bit encryption</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Star className="h-8 w-8 text-warm-orange" />
              <p className="font-semibold">4.8/5 Rating</p>
              <p className="text-sm text-muted-foreground">From 50K+ users</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Clock className="h-8 w-8 text-success-green" />
              <p className="font-semibold">Quick Setup</p>
              <p className="text-sm text-muted-foreground">5 minutes to start</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Heart className="h-8 w-8 text-destructive" />
              <p className="font-semibold">No Platform Fee</p>
              <p className="text-sm text-muted-foreground">Keep more donations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Browse Fundraisers */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              Discover Campaigns
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Support Causes You Care About
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Browse thousands of fundraising campaigns and make a difference in someone's life today.
            </p>
          </div>

          {/* Category Filter */}
          <div className="mb-8">
            <CategoryFilter 
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
          </div>

          {/* Fundraiser Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredFundraisers.map((fundraiser) => (
              <FundraiserCard key={fundraiser.id} {...fundraiser} />
            ))}
          </div>

          {/* Load More */}
          <div className="text-center">
            <Button size="lg" variant="outline">
              Load More Campaigns
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Start Your Own Campaign?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join thousands of successful fundraisers who've raised millions for causes they care about.
            </p>
            <Button size="lg" variant="accent" className="text-lg px-8 py-4">
              Start Fundraising Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t bg-muted/50">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2024 FundRise. Made with ❤️ for communities worldwide.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
