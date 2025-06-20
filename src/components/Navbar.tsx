
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu, X, Code, Users, Zap } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b border-primary/20 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="p-2 bg-gradient-to-br from-primary via-secondary to-accent rounded-xl pulse-glow">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                NEXTFANG
              </h1>
              <p className="text-xs text-muted-foreground">Building India's First LGM</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#dsa" className="text-sm font-medium hover:text-primary transition-colors hover:scale-105 transform">DSA</a>
            <a href="#cp" className="text-sm font-medium hover:text-primary transition-colors hover:scale-105 transform">CP</a>
            <a href="#hackathon" className="text-sm font-medium hover:text-primary transition-colors hover:scale-105 transform">Hackathons</a>
            <a href="#fang" className="text-sm font-medium hover:text-primary transition-colors hover:scale-105 transform">FANG</a>
            <a href="#resume" className="text-sm font-medium hover:text-primary transition-colors hover:scale-105 transform">Resume</a>
            <a href="#community" className="text-sm font-medium hover:text-primary transition-colors hover:scale-105 transform">Community</a>
          </div>

          {/* User Counter & CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Badge variant="secondary" className="gap-1 pulse-glow">
              <Users className="h-3 w-3" />
              2,547 Users
            </Badge>
            <Button size="sm" className="bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-accent transition-all duration-300 transform hover:scale-105">
              Join Community
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-primary/20 slide-in-up">
            <div className="flex flex-col gap-4">
              <a href="#dsa" className="text-sm font-medium hover:text-primary transition-colors p-2 rounded hover:bg-primary/10">DSA</a>
              <a href="#cp" className="text-sm font-medium hover:text-primary transition-colors p-2 rounded hover:bg-primary/10">CP</a>
              <a href="#hackathon" className="text-sm font-medium hover:text-primary transition-colors p-2 rounded hover:bg-primary/10">Hackathons</a>
              <a href="#fang" className="text-sm font-medium hover:text-primary transition-colors p-2 rounded hover:bg-primary/10">FANG</a>
              <a href="#resume" className="text-sm font-medium hover:text-primary transition-colors p-2 rounded hover:bg-primary/10">Resume</a>
              <a href="#community" className="text-sm font-medium hover:text-primary transition-colors p-2 rounded hover:bg-primary/10">Community</a>
              <div className="pt-4 border-t border-primary/20">
                <Badge variant="secondary" className="gap-1 mb-3">
                  <Users className="h-3 w-3" />
                  2,547 Users
                </Badge>
                <Button className="w-full bg-gradient-to-r from-primary to-secondary">Join Community</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
