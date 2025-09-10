import React from 'react';
import { Menu, Sun, Moon, Shield, Crown, User, Scroll, Users, Music, Sword } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useNavigate } from 'react-router-dom';
import spartanIcon from '@/assets/spartan-icon.png';

export const Header: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(true);
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    // Always navigate to home page first if not already there
    if (window.location.pathname !== '/') {
      navigate('/');
    }
    
    // Use a single setTimeout with longer delay for reliable scrolling
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerHeight = 100;
        const elementPosition = element.offsetTop - headerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const windowHeight = window.innerHeight;
        
        // For sections near the bottom (like anthem), scroll to max possible position
        let targetPosition = elementPosition;
        if (sectionId === 'anthem') {
          // For anthem, scroll to the bottom minus window height to ensure it's visible
          targetPosition = Math.max(0, documentHeight - windowHeight);
        }
        
        // Use smooth scroll with requestAnimationFrame for better control
        const scrollDistance = targetPosition - window.scrollY;
        const scrollDuration = 800;
        const startTime = performance.now();
        
        const animateScroll = (currentTime: number) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / scrollDuration, 1);
          
          // Ease-in-out function for smooth animation
          const easeInOut = progress < 0.5 
            ? 2 * progress * progress 
            : 1 - Math.pow(-2 * progress + 2, 3) / 2;
            
          const currentPosition = window.scrollY + (scrollDistance * easeInOut);
          window.scrollTo(0, currentPosition);
          
          if (progress < 1) {
            requestAnimationFrame(animateScroll);
          }
        };
        
        requestAnimationFrame(animateScroll);
      }
    }, window.location.pathname !== '/' ? 800 : 100);
  };

  React.useEffect(() => {
    // Initialize dark mode
    document.documentElement.classList.add('dark');
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      {/* Roman Imperial Decorative Border */}
      <div className="relative">
        {/* Top ornamental border */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brinks-green to-transparent opacity-60"></div>
        
        {/* Corner decorations */}
        <div className="absolute top-2 left-4">
          <div className="w-3 h-3 border border-brinks-blue rotate-45 bg-background opacity-80"></div>
        </div>
        <div className="absolute top-2 right-4">
          <div className="w-3 h-3 border border-brinks-blue rotate-45 bg-background opacity-80"></div>
        </div>
        
        {/* Main header content */}
        <div className="flex items-center justify-between px-4 sm:px-10 py-4">
          {/* Logo section with Roman decorations */}
          <div className="flex items-center gap-3">
            <div className="relative">
              {/* Roman decorative frame for logo */}
              <div className="absolute inset-0 w-10 h-10 sm:w-12 sm:h-12">
                {/* Ornamental border */}
                <div className="absolute inset-0 border-2 border-brinks-green rounded-md rotate-0 scale-110 opacity-70">
                  {/* Corner mini decorations */}
                  <div className="absolute -top-0.5 -left-0.5 w-2 h-2 border border-brinks-green rotate-45 bg-background"></div>
                  <div className="absolute -top-0.5 -right-0.5 w-2 h-2 border border-brinks-green rotate-45 bg-background"></div>
                  <div className="absolute -bottom-0.5 -left-0.5 w-2 h-2 border border-brinks-green rotate-45 bg-background"></div>
                  <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 border border-brinks-green rotate-45 bg-background"></div>
                </div>
                
                {/* Inner blue accent */}
                <div className="absolute inset-1 border border-brinks-blue/40 rounded-sm opacity-50"></div>
              </div>
              
              <div className="relative z-10 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center">
                <img 
                  src={spartanIcon} 
                  alt="Spartan Icon" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            
            {/* Title with imperial styling */}
            <div className="relative">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight gradient-text">
                BRINKS
              </h2>
              {/* Subtle underline decoration */}
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-brinks-blue via-brinks-green to-brinks-blue opacity-40"></div>
            </div>
            
            {/* Imperial crown icon */}
            <Crown className="w-4 h-4 sm:w-5 sm:h-5 text-brinks-green opacity-60" />
          </div>
          
          {/* Right section with Roman decorations */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Theme toggle with Roman styling */}
            <div className="relative flex items-center gap-1 sm:gap-2">
              {/* Roman decorative border for theme section */}
              <div className="absolute inset-0 -mx-2 -my-1 border border-brinks-blue/20 rounded-md opacity-30"></div>
              
              <Sun className="relative z-10 h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
              <button
                onClick={toggleTheme}
                className="relative inline-flex h-6 w-12 items-center rounded-full bg-border transition-colors focus:outline-none focus:ring-2 focus:ring-brinks-blue focus:ring-offset-2 border border-brinks-green/20"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-gradient-to-r from-brinks-blue to-brinks-green transition-transform ${
                    isDarkMode ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <Moon className="relative z-10 h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
            </div>
            
            {/* Roman Menu Dropdown */}
            <div className="relative">
              {/* Roman decorative border for menu button */}
              <div className="absolute inset-0 w-full h-full">
                <div className="absolute inset-0 border border-brinks-green rounded-md rotate-0 scale-110 opacity-50">
                  {/* Corner decorations */}
                  <div className="absolute -top-0.5 -left-0.5 w-1.5 h-1.5 border border-brinks-green rotate-45 bg-background"></div>
                  <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 border border-brinks-green rotate-45 bg-background"></div>
                  <div className="absolute -bottom-0.5 -left-0.5 w-1.5 h-1.5 border border-brinks-green rotate-45 bg-background"></div>
                  <div className="absolute -bottom-0.5 -right-0.5 w-1.5 h-1.5 border border-brinks-green rotate-45 bg-background"></div>
                </div>
              </div>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="relative z-10 h-9 w-9 sm:h-10 sm:w-10 p-0 border border-brinks-blue/20 hover:border-brinks-green/40 transition-colors">
                    <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                </DropdownMenuTrigger>
                
                <DropdownMenuContent 
                  align="end" 
                  className="relative w-64 sm:w-80 bg-gradient-to-br from-card/98 to-card/85 backdrop-blur-md border-2 border-brinks-green/70 rounded-2xl shadow-2xl p-0 overflow-hidden z-50"
                >
                  {/* Roman Imperial Frame */}
                  <div className="absolute inset-0 pointer-events-none">
                    {/* Main ornamental border */}
                    <div className="absolute inset-0.5 border-2 border-brinks-blue/30 rounded-xl">
                      {/* Corner imperial decorations */}
                      <div className="absolute -top-1.5 -left-1.5 w-4 h-4 border-2 border-brinks-gold rotate-45 bg-card/90 shadow-sm"></div>
                      <div className="absolute -top-1.5 -right-1.5 w-4 h-4 border-2 border-brinks-gold rotate-45 bg-card/90 shadow-sm"></div>
                      <div className="absolute -bottom-1.5 -left-1.5 w-4 h-4 border-2 border-brinks-gold rotate-45 bg-card/90 shadow-sm"></div>
                      <div className="absolute -bottom-1.5 -right-1.5 w-4 h-4 border-2 border-brinks-gold rotate-45 bg-card/90 shadow-sm"></div>
                    </div>
                    
                    {/* Inner geometric pattern */}
                    <div className="absolute inset-4 border border-brinks-green/30 rounded-lg">
                      {/* Central cross pattern */}
                      <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brinks-blue/20 to-transparent transform -translate-y-1/2"></div>
                      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-brinks-green/20 to-transparent transform -translate-x-1/2"></div>
                    </div>
                    
                    {/* Side imperial laurel elements */}
                    <div className="absolute top-1/2 -left-0.5 w-2 h-8 bg-gradient-to-b from-brinks-green/40 to-brinks-blue/40 transform -translate-y-1/2 rounded-r-full"></div>
                    <div className="absolute top-1/2 -right-0.5 w-2 h-8 bg-gradient-to-b from-brinks-blue/40 to-brinks-green/40 transform -translate-y-1/2 rounded-l-full"></div>
                  </div>
                  
                  {/* Roman Header with geometric pattern */}
                  <div className="relative bg-gradient-to-r from-brinks-blue/15 via-card/20 to-brinks-green/15 p-3 sm:p-4 border-b border-brinks-gold/20">
                    <div className="text-center relative">
                      {/* Central imperial emblem */}
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-brinks-gold/20 to-brinks-green/20 border-2 border-brinks-gold/40 mb-2">
                        <Crown className="w-6 h-6 text-brinks-gold" />
                      </div>
                      
                      {/* Decorative horizontal lines */}
                      <div className="flex items-center justify-center gap-3 mb-1">
                        <div className="w-8 h-px bg-gradient-to-r from-transparent to-brinks-gold/60"></div>
                        <div className="w-2 h-2 border border-brinks-gold/60 rotate-45 bg-card"></div>
                        <div className="w-8 h-px bg-gradient-to-l from-transparent to-brinks-gold/60"></div>
                      </div>
                      
                      <div className="text-xs text-muted-foreground/80 italic tracking-wider">
                        "Gloria et Honor"
                      </div>
                    </div>
                  </div>
                  
                  {/* Menu Items with Roman styling */}
                  <div className="p-2 sm:p-3 space-y-1">
                    <DropdownMenuItem onClick={() => navigate('/loginbrinks')} className="group relative overflow-hidden rounded-lg p-4 cursor-pointer border border-transparent hover:border-brinks-blue/20 hover:bg-gradient-to-r hover:from-brinks-blue/5 hover:to-brinks-green/5 transition-all duration-300">
                      <div className="flex items-center gap-3 w-full">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-brinks-blue/20 to-brinks-green/20 flex items-center justify-center border border-white/10">
                          <User className="w-5 h-5 text-brinks-blue" />
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-foreground group-hover:text-brinks-blue transition-colors">
                            Login
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Acesso ao sistema
                          </div>
                        </div>
                        <div className="w-2 h-2 bg-brinks-blue rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </div>
                    </DropdownMenuItem>
                    
                    <DropdownMenuItem onClick={() => scrollToSection('rules')} className="group relative overflow-hidden rounded-lg p-4 cursor-pointer border border-transparent hover:border-brinks-blue/20 hover:bg-gradient-to-r hover:from-brinks-blue/5 hover:to-brinks-green/5 transition-all duration-300">
                      <div className="flex items-center gap-3 w-full">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-brinks-blue/20 to-brinks-green/20 flex items-center justify-center border border-white/10">
                          <Scroll className="w-5 h-5 text-brinks-green" />
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-foreground group-hover:text-brinks-green transition-colors">
                            Regras
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Código da Aliança
                          </div>
                        </div>
                        <div className="w-2 h-2 bg-brinks-green rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </div>
                    </DropdownMenuItem>
                    
                    <DropdownMenuItem onClick={() => scrollToSection('presidents')} className="group relative overflow-hidden rounded-lg p-4 cursor-pointer border border-transparent hover:border-brinks-blue/20 hover:bg-gradient-to-r hover:from-brinks-blue/5 hover:to-brinks-green/5 transition-all duration-300">
                      <div className="flex items-center gap-3 w-full">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-brinks-blue/20 to-brinks-green/20 flex items-center justify-center border border-white/10">
                          <Crown className="w-5 h-5 text-brinks-gold" />
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-foreground group-hover:text-brinks-gold transition-colors">
                            Presidentes da Brinks
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Nossos líderes
                          </div>
                        </div>
                        <div className="w-2 h-2 bg-brinks-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </div>
                    </DropdownMenuItem>
                    
                    <DropdownMenuItem onClick={() => scrollToSection('grupos')} className="group relative overflow-hidden rounded-lg p-4 cursor-pointer border border-transparent hover:border-brinks-blue/20 hover:bg-gradient-to-r hover:from-brinks-blue/5 hover:to-brinks-green/5 transition-all duration-300">
                      <div className="flex items-center gap-3 w-full">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-brinks-blue/20 to-brinks-green/20 flex items-center justify-center border border-white/10">
                          <Users className="w-5 h-5 text-brinks-blue" />
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-foreground group-hover:text-brinks-blue transition-colors">
                            Grupos
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Alianças
                          </div>
                        </div>
                        <div className="w-2 h-2 bg-brinks-blue rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </div>
                    </DropdownMenuItem>
                    
                    <DropdownMenuItem onClick={() => scrollToSection('anthem')} className="group relative overflow-hidden rounded-lg p-4 cursor-pointer border border-transparent hover:border-brinks-blue/20 hover:bg-gradient-to-r hover:from-brinks-blue/5 hover:to-brinks-green/5 transition-all duration-300">
                      <div className="flex items-center gap-3 w-full">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-brinks-blue/20 to-brinks-green/20 flex items-center justify-center border border-white/10">
                          <Music className="w-5 h-5 text-brinks-green" />
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-foreground group-hover:text-brinks-green transition-colors">
                            Hino da Aliança
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Trilha sonora épica
                          </div>
                        </div>
                        <div className="w-2 h-2 bg-brinks-green rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </div>
                    </DropdownMenuItem>
                  </div>
                  
                  {/* Roman Footer */}
                  <div className="relative bg-gradient-to-r from-brinks-blue/10 to-brinks-green/10 p-3 border-t border-white/10">
                    <div className="text-center">
                      <div className="text-xs text-muted-foreground/60 italic">
                        "Per aspera ad astra"
                      </div>
                    </div>
                    
                    {/* Decorative border */}
                    <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-brinks-blue to-transparent"></div>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            
            {/* Imperial shield icon */}
            <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-brinks-blue opacity-60" />
          </div>
        </div>
        
        {/* Bottom ornamental border */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brinks-blue to-transparent opacity-40"></div>
        
        {/* Side ornamental elements */}
        <div className="absolute top-1/2 left-0 w-2 h-6 bg-brinks-green transform -translate-y-1/2 clip-diamond opacity-30"></div>
        <div className="absolute top-1/2 right-0 w-2 h-6 bg-brinks-green transform -translate-y-1/2 clip-diamond opacity-30"></div>
      </div>
    </header>
  );
};