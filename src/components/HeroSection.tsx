import { Button } from "@/components/ui/button";
import { ArrowRight, Play, TrendingUp, Users, DollarSign } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export const HeroSection = () => {
  return (
    <section className="relative bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 bg-black/20" />
      <div className="container mx-auto px-4 py-20 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Turn Your Dreams Into
                <span className="block text-warm-orange">Reality</span>
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
                Join millions who trust our platform to fund their passions, 
                support causes, and make a difference in the world.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="accent" className="text-lg px-8 py-4">
                Start Your Campaign
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 bg-white/10 border-white/20 text-white hover:bg-white/20">
                <Play className="mr-2 h-5 w-5" />
                Watch How It Works
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <DollarSign className="h-6 w-6 text-warm-orange mr-1" />
                  <span className="text-2xl font-bold">$2.4B+</span>
                </div>
                <p className="text-white/80 text-sm">Raised</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-6 w-6 text-warm-orange mr-1" />
                  <span className="text-2xl font-bold">85M+</span>
                </div>
                <p className="text-white/80 text-sm">Donors</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <TrendingUp className="h-6 w-6 text-warm-orange mr-1" />
                  <span className="text-2xl font-bold">1.2M+</span>
                </div>
                <p className="text-white/80 text-sm">Campaigns</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-hover">
              <img
                src={heroImage}
                alt="Community supporting each other"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-hover animate-bounce">
              <span className="text-2xl">💖</span>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-success-green text-white rounded-full p-4 shadow-hover">
              <TrendingUp className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};