import React from 'react';
import { Shield, MessageCircle, Users, Star, Swords } from 'lucide-react';
import { Button } from '@/components/ui/button';
import bannerBackground from '@/assets/banner-background.gif';
import brinksLogo from '@/assets/brinks-logo.png';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full text-center">
      {/* Hero background */}
      <div 
        className="w-full h-64 sm:h-80 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${bannerBackground})` }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
        
        {/* Roman decorative border for banner */}
        <div className="absolute inset-0 pointer-events-none z-10">
          {/* Outer ornamental frame */}
          <div className="absolute inset-4 border-2 border-brinks-blue/60 rounded-lg">
            {/* Corner decorations */}
            <div className="absolute -top-2 -left-2 w-6 h-6 border border-brinks-blue rotate-45 bg-black/20 backdrop-blur-sm"></div>
            <div className="absolute -top-2 -right-2 w-6 h-6 border border-brinks-blue rotate-45 bg-black/20 backdrop-blur-sm"></div>
            <div className="absolute -bottom-2 -left-2 w-6 h-6 border border-brinks-blue rotate-45 bg-black/20 backdrop-blur-sm"></div>
            <div className="absolute -bottom-2 -right-2 w-6 h-6 border border-brinks-blue rotate-45 bg-black/20 backdrop-blur-sm"></div>
            
            {/* Side decorative elements */}
            <div className="absolute top-1/2 -left-3 w-4 h-8 bg-brinks-blue transform -translate-y-1/2 clip-diamond opacity-80"></div>
            <div className="absolute top-1/2 -right-3 w-4 h-8 bg-brinks-blue transform -translate-y-1/2 clip-diamond opacity-80"></div>
            <div className="absolute left-1/2 -top-3 w-8 h-4 bg-brinks-blue transform -translate-x-1/2 clip-diamond opacity-80"></div>
            <div className="absolute left-1/2 -bottom-3 w-8 h-4 bg-brinks-blue transform -translate-x-1/2 clip-diamond opacity-80"></div>
          </div>
          
          {/* Inner frame */}
          <div className="absolute inset-6 border border-brinks-green/50 rounded-lg">
            {/* Inner ornamental dots */}
            <div className="absolute top-2 left-2 w-2 h-2 bg-brinks-green rounded-full opacity-70"></div>
            <div className="absolute top-2 right-2 w-2 h-2 bg-brinks-green rounded-full opacity-70"></div>
            <div className="absolute bottom-2 left-2 w-2 h-2 bg-brinks-green rounded-full opacity-70"></div>
            <div className="absolute bottom-2 right-2 w-2 h-2 bg-brinks-green rounded-full opacity-70"></div>
          </div>
          
          {/* Epic Banner Badge */}
          <div className="absolute top-6 left-1/2 transform -translate-x-1/2">
            <div className="relative">
              {/* Badge Roman decorative border */}
              <div className="absolute inset-0 scale-105">
                <div className="border border-brinks-green/60 rounded-md bg-black/50 backdrop-blur-sm">
                  {/* Corner decorations for badge */}
                  <div className="absolute -top-0.5 -left-0.5 w-2 h-2 border border-brinks-green rotate-45 bg-brinks-blue/60"></div>
                  <div className="absolute -top-0.5 -right-0.5 w-2 h-2 border border-brinks-green rotate-45 bg-brinks-blue/60"></div>
                  <div className="absolute -bottom-0.5 -left-0.5 w-2 h-2 border border-brinks-green rotate-45 bg-brinks-blue/60"></div>
                  <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 border border-brinks-green rotate-45 bg-brinks-blue/60"></div>
                </div>
              </div>
              
              {/* Badge content */}
              <div className="relative z-10 px-3 py-1.5 bg-gradient-to-r from-brinks-blue/15 to-brinks-green/15 border border-brinks-green/40 rounded-md backdrop-blur-sm">
                <div className="text-center">
                  <div className="text-xs font-bold text-brinks-green/80 tracking-wide">★ NEEXT ★</div>
                  <div className="text-sm font-extrabold text-white tracking-wider">
                    O MELHOR TEM NOME
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center gap-6 max-w-4xl px-4 mx-auto pb-16 sm:pb-24 -mt-20 sm:-mt-24">
        {/* Profile image with Roman empire decorative border */}
        <div className="relative">
          {/* Roman decorative border */}
          <div className="absolute inset-0 w-32 h-32 sm:w-48 sm:h-48 mx-auto">
            {/* Outer ornamental frame */}
            <div className="absolute inset-0 border-4 border-brinks-green rounded-lg rotate-0 scale-110 opacity-80">
              {/* Corner decorations */}
              <div className="absolute -top-2 -left-2 w-6 h-6 border-2 border-brinks-green rotate-45 bg-background"></div>
              <div className="absolute -top-2 -right-2 w-6 h-6 border-2 border-brinks-green rotate-45 bg-background"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 border-2 border-brinks-green rotate-45 bg-background"></div>
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-2 border-brinks-green rotate-45 bg-background"></div>
              
              {/* Side decorative elements */}
              <div className="absolute top-1/2 -left-3 w-4 h-8 bg-brinks-green transform -translate-y-1/2 clip-diamond"></div>
              <div className="absolute top-1/2 -right-3 w-4 h-8 bg-brinks-green transform -translate-y-1/2 clip-diamond"></div>
              <div className="absolute left-1/2 -top-3 w-8 h-4 bg-brinks-green transform -translate-x-1/2 clip-diamond"></div>
              <div className="absolute left-1/2 -bottom-3 w-8 h-4 bg-brinks-green transform -translate-x-1/2 clip-diamond"></div>
            </div>
            
            {/* Inner golden frame */}
            <div className="absolute inset-1 border-2 border-brinks-blue rounded-lg opacity-60 scale-105">
              {/* Inner ornamental dots */}
              <div className="absolute top-2 left-2 w-2 h-2 bg-brinks-blue rounded-full"></div>
              <div className="absolute top-2 right-2 w-2 h-2 bg-brinks-blue rounded-full"></div>
              <div className="absolute bottom-2 left-2 w-2 h-2 bg-brinks-blue rounded-full"></div>
              <div className="absolute bottom-2 right-2 w-2 h-2 bg-brinks-blue rounded-full"></div>
            </div>
          </div>
          
          {/* Original image */}
          <img 
            alt="Brinks Logo" 
            className="relative z-10 w-32 h-32 sm:w-48 sm:h-48 rounded-lg border-4 border-card object-cover glow-green" 
            src={brinksLogo}
          />
        </div>
        
        {/* Hero text */}
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter gradient-text mb-4">
            BRINKS ALIANÇA
          </h1>
          
          {/* Roman decorative underline */}
          <div className="flex justify-center items-center mb-6">
            <div className="relative w-48 sm:w-64 h-3">
              {/* Main decorative line */}
              <div className="absolute inset-0 border-b-2 border-brinks-green opacity-80"></div>
              
              {/* Center ornament - Crossed Swords */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative w-8 h-8 bg-gradient-to-r from-brinks-blue to-brinks-green rounded-full p-1.5 border border-brinks-green/60 shadow-lg">
                  <Swords className="w-full h-full text-white rotate-45" strokeWidth={2.5} />
                </div>
              </div>
              
              {/* Side ornaments */}
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                <div className="w-3 h-6 bg-brinks-green clip-diamond opacity-70"></div>
              </div>
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <div className="w-3 h-6 bg-brinks-green clip-diamond opacity-70"></div>
              </div>
              
              {/* End decorations */}
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
                <div className="w-2 h-2 bg-brinks-blue rounded-full opacity-80"></div>
              </div>
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                <div className="w-2 h-2 bg-brinks-blue rounded-full opacity-80"></div>
              </div>
            </div>
          </div>
        </div>
        
        <p className="max-w-2xl text-base sm:text-lg text-muted-foreground">
          Brinks é mais que uma aliança: é união. Auxiliamos e ajudamos todos a crescer, protegemos uns aos outros. Mexeu com um, mexeu com todos.
        </p>
        
        {/* CTA buttons */}
        <div className="mt-4 flex flex-col sm:flex-row items-center gap-8">
          {/* Groups Button with Roman decorations */}
          <div className="relative">
            {/* Roman decorative border for groups button */}
            <div className="absolute inset-0 w-full h-full">
              {/* Outer ornamental frame */}
              <div className="absolute inset-0 border-2 border-cyan-400 rounded-md rotate-0 scale-110 opacity-80">
                {/* Corner decorations */}
                <div className="absolute -top-1 -left-1 w-3 h-3 border border-cyan-400 rotate-45 bg-background"></div>
                <div className="absolute -top-1 -right-1 w-3 h-3 border border-cyan-400 rotate-45 bg-background"></div>
                <div className="absolute -bottom-1 -left-1 w-3 h-3 border border-cyan-400 rotate-45 bg-background"></div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 border border-cyan-400 rotate-45 bg-background"></div>
                
                {/* Side decorative elements */}
                <div className="absolute top-1/2 -left-2 w-2 h-4 bg-cyan-400 transform -translate-y-1/2 clip-diamond"></div>
                <div className="absolute top-1/2 -right-2 w-2 h-4 bg-cyan-400 transform -translate-y-1/2 clip-diamond"></div>
              </div>
              
              {/* Inner green accent frame */}
              <div className="absolute inset-1 border border-cyan-300/40 rounded-md opacity-60 scale-105">
                {/* Inner ornamental dots */}
                <div className="absolute top-1 left-1 w-1 h-1 bg-cyan-300 rounded-full"></div>
                <div className="absolute top-1 right-1 w-1 h-1 bg-cyan-300 rounded-full"></div>
                <div className="absolute bottom-1 left-1 w-1 h-1 bg-cyan-300 rounded-full"></div>
                <div className="absolute bottom-1 right-1 w-1 h-1 bg-cyan-300 rounded-full"></div>
              </div>
            </div>
            
            <Button 
              variant="glass-cyan" 
              size="default" 
              className="relative z-10 font-bold"
              onClick={() => {
                const groupsSection = document.querySelector('[data-groups-section]');
                if (groupsSection) {
                  groupsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
            >
              <Star className="w-5 h-5 mr-2" />
              Entrar nos Grupos
            </Button>
          </div>
          
          {/* Recruitment Button with Roman decorations */}
          <div className="relative">
            {/* Roman decorative border for blue button */}
            <div className="absolute inset-0 w-full h-full">
              {/* Outer ornamental frame */}
              <div className="absolute inset-0 border-2 border-brinks-blue rounded-md rotate-0 scale-110 opacity-80">
                {/* Corner decorations */}
                <div className="absolute -top-1 -left-1 w-3 h-3 border border-brinks-blue rotate-45 bg-background"></div>
                <div className="absolute -top-1 -right-1 w-3 h-3 border border-brinks-blue rotate-45 bg-background"></div>
                <div className="absolute -bottom-1 -left-1 w-3 h-3 border border-brinks-blue rotate-45 bg-background"></div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 border border-brinks-blue rotate-45 bg-background"></div>
                
                {/* Side decorative elements */}
                <div className="absolute top-1/2 -left-2 w-2 h-4 bg-brinks-blue transform -translate-y-1/2 clip-diamond"></div>
                <div className="absolute top-1/2 -right-2 w-2 h-4 bg-brinks-blue transform -translate-y-1/2 clip-diamond"></div>
              </div>
              
              {/* Inner green accent frame */}
              <div className="absolute inset-1 border border-brinks-green/40 rounded-md opacity-60 scale-105">
                {/* Inner ornamental dots */}
                <div className="absolute top-1 left-1 w-1 h-1 bg-brinks-green rounded-full"></div>
                <div className="absolute top-1 right-1 w-1 h-1 bg-brinks-green rounded-full"></div>
                <div className="absolute bottom-1 left-1 w-1 h-1 bg-brinks-green rounded-full"></div>
                <div className="absolute bottom-1 right-1 w-1 h-1 bg-brinks-green rounded-full"></div>
              </div>
            </div>
            
            <Button 
              variant="glass-blue" 
              size="default" 
              className="relative z-10 font-bold"
              onClick={() => window.open('https://chat.whatsapp.com/DEnGxy9GELcIRVxf28hkl5?mode=ems_copy_t', '_blank')}
            >
              <img src="https://i.ibb.co/zVKKzrGd/capacete-romano.png" alt="Roman Helmet" className="w-5 h-5 mr-2" />
              Recrutamento: Faça Parte da Aliança
            </Button>
          </div>
          
          {/* WhatsApp Button with Roman decorations */}
          <div className="relative">
            {/* Roman decorative border for green button */}
            <div className="absolute inset-0 w-full h-full">
              {/* Outer ornamental frame */}
              <div className="absolute inset-0 border-2 border-brinks-green rounded-md rotate-0 scale-110 opacity-80">
                {/* Corner decorations */}
                <div className="absolute -top-1 -left-1 w-3 h-3 border border-brinks-green rotate-45 bg-background"></div>
                <div className="absolute -top-1 -right-1 w-3 h-3 border border-brinks-green rotate-45 bg-background"></div>
                <div className="absolute -bottom-1 -left-1 w-3 h-3 border border-brinks-green rotate-45 bg-background"></div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 border border-brinks-green rotate-45 bg-background"></div>
                
                {/* Side decorative elements */}
                <div className="absolute top-1/2 -left-2 w-2 h-4 bg-brinks-green transform -translate-y-1/2 clip-diamond"></div>
                <div className="absolute top-1/2 -right-2 w-2 h-4 bg-brinks-green transform -translate-y-1/2 clip-diamond"></div>
              </div>
              
              {/* Inner blue accent frame */}
              <div className="absolute inset-1 border border-brinks-blue/40 rounded-md opacity-60 scale-105">
                {/* Inner ornamental dots */}
                <div className="absolute top-1 left-1 w-1 h-1 bg-brinks-blue rounded-full"></div>
                <div className="absolute top-1 right-1 w-1 h-1 bg-brinks-blue rounded-full"></div>
                <div className="absolute bottom-1 left-1 w-1 h-1 bg-brinks-blue rounded-full"></div>
                <div className="absolute bottom-1 right-1 w-1 h-1 bg-brinks-blue rounded-full"></div>
              </div>
            </div>
            
            <Button 
              variant="glass-green" 
              size="default" 
              className="relative z-10"
              onClick={() => window.open('https://whatsapp.com/channel/0029Vb7JSYk1XquVGL0ibz3c', '_blank')}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Siga Nosso Canal no WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};