import React from 'react';
import { Instagram, Crown, Shield } from 'lucide-react';
import spartanIcon from '@/assets/spartan-icon.png';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-card border-t border-border">
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
        
        {/* Side ornamental elements */}
        <div className="absolute top-1/2 left-0 w-2 h-6 bg-brinks-green transform -translate-y-1/2 clip-diamond opacity-30"></div>
        <div className="absolute top-1/2 right-0 w-2 h-6 bg-brinks-green transform -translate-y-1/2 clip-diamond opacity-30"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Central decorative border */}
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-brinks-blue via-brinks-green to-brinks-blue opacity-60"></div>
          
          {/* Roman decorative corners in content */}
          <div className="absolute top-6 left-1/4 w-4 h-4 border-2 border-brinks-green rotate-45 opacity-40"></div>
          <div className="absolute top-6 right-1/4 w-4 h-4 border-2 border-brinks-green rotate-45 opacity-40"></div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Brand section */}
            <div className="flex items-center gap-4">
              {/* Roman decorative frame for logo */}
              <div className="relative">
                <div className="absolute inset-0 w-12 h-12">
                  {/* Ornamental border with more decoration */}
                  <div className="absolute inset-0 border-2 border-brinks-green rounded-md rotate-0 scale-110 opacity-70">
                    {/* Corner mini decorations */}
                    <div className="absolute -top-1 -left-1 w-3 h-3 border-2 border-brinks-green rotate-45 bg-background"></div>
                    <div className="absolute -top-1 -right-1 w-3 h-3 border-2 border-brinks-green rotate-45 bg-background"></div>
                    <div className="absolute -bottom-1 -left-1 w-3 h-3 border-2 border-brinks-green rotate-45 bg-background"></div>
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 border-2 border-brinks-green rotate-45 bg-background"></div>
                  </div>
                  {/* Inner blue accent with double border */}
                  <div className="absolute inset-1 border-2 border-brinks-blue/40 rounded-sm opacity-50"></div>
                  <div className="absolute inset-2 border border-brinks-green/20 rounded-sm opacity-30"></div>
                </div>
                
                <div className="relative z-10 flex h-10 w-10 items-center justify-center">
                  <img 
                    src={spartanIcon} 
                    alt="Spartan Icon" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              
              {/* Title with enhanced imperial styling */}
              <div className="relative">
                <div className="flex items-center gap-2">
                  <Crown className="w-5 h-5 text-brinks-green opacity-70" />
                  <h2 className="text-2xl font-bold tracking-tight gradient-text">BRINKS</h2>
                  <Shield className="w-5 h-5 text-brinks-blue opacity-70" />
                </div>
                {/* Enhanced underline decoration */}
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-brinks-blue via-brinks-green to-brinks-blue opacity-50 rounded-full"></div>
                <div className="absolute -bottom-1 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-transparent via-brinks-green to-transparent opacity-70"></div>
              </div>
            </div>
            
            {/* Social section with roman styling */}
            <div className="flex flex-col items-center gap-3">
              <div className="flex items-center space-x-4">
                <a 
                  className="relative group text-muted-foreground hover:text-brinks-green transition-colors" 
                  href="https://instagram.com/neet.tk" 
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram @neet.tk"
                >
                  <Instagram className="h-6 w-6" />
                  <div className="absolute -inset-2 border border-brinks-green/20 rounded-md rotate-45 opacity-0 group-hover:opacity-50 transition-opacity"></div>
                </a>
              </div>
              
              {/* Roman ornamental line */}
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-brinks-green to-transparent opacity-50"></div>
            </div>
          </div>
          
          {/* Copyright with roman styling */}
          <div className="mt-6 pt-6 text-center text-sm text-muted-foreground relative">
            {/* Ornamental border with diamond pattern */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-brinks-blue to-transparent opacity-60"></div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-2 h-2 border border-brinks-blue rotate-45 bg-background opacity-60"></div>
            
            <p className="relative">
              © MMXXIV BRINKS IMPERIUM • Todos os direitos reservados
            </p>
            
            {/* Bottom decorative elements */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-brinks-blue to-brinks-green opacity-40"></div>
          </div>
        </div>
        
        {/* Bottom corner decorations */}
        <div className="absolute bottom-2 left-4">
          <div className="w-3 h-3 border border-brinks-blue rotate-45 bg-background opacity-80"></div>
        </div>
        <div className="absolute bottom-2 right-4">
          <div className="w-3 h-3 border border-brinks-blue rotate-45 bg-background opacity-80"></div>
        </div>
      </div>
    </footer>
  );
};