import React from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { BenefitsSection } from '@/components/BenefitsSection';
import { RequirementsSection } from '@/components/RequirementsSection';
import { GroupsSection } from '@/components/GroupsSection';
import { RulesSection } from '@/components/RulesSection';
import PresidentsSection from '@/components/PresidentsSection';
import { Footer } from '@/components/Footer';
import { Separator } from '@/components/ui/separator';

const Index = () => {
  return (
    <div className="relative flex size-full min-h-screen flex-col overflow-x-hidden bg-background text-foreground">
      <Header />
      
      <main className="flex flex-col items-center">
        <HeroSection />
        <BenefitsSection />
        <RequirementsSection />
        <GroupsSection />
        
        {/* Roman-style Separator */}
        <div className="w-full max-w-4xl px-4 py-8 flex items-center justify-center">
          <div className="relative w-full max-w-2xl">
            {/* Main separator line */}
            <Separator className="h-px bg-gradient-to-r from-transparent via-brinks-blue to-transparent" />
            
            {/* Central Roman ornament */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                {/* Central diamond */}
                <div className="w-6 h-6 bg-gradient-to-r from-brinks-blue to-brinks-green transform rotate-45 shadow-lg border border-white/20"></div>
                
                {/* Corner decorations */}
                <div className="absolute -top-2 -left-2 w-2 h-2 border border-brinks-green rotate-45 bg-background"></div>
                <div className="absolute -top-2 -right-2 w-2 h-2 border border-brinks-green rotate-45 bg-background"></div>
                <div className="absolute -bottom-2 -left-2 w-2 h-2 border border-brinks-green rotate-45 bg-background"></div>
                <div className="absolute -bottom-2 -right-2 w-2 h-2 border border-brinks-green rotate-45 bg-background"></div>
                
                {/* Side ornaments */}
                <div className="absolute top-1/2 -left-4 w-3 h-1 bg-brinks-blue transform -translate-y-1/2 clip-diamond"></div>
                <div className="absolute top-1/2 -right-4 w-3 h-1 bg-brinks-green transform -translate-y-1/2 clip-diamond"></div>
              </div>
            </div>
            
            {/* Side decorative elements */}
            <div className="absolute top-1/2 left-8 w-4 h-px bg-brinks-green transform -translate-y-1/2"></div>
            <div className="absolute top-1/2 right-8 w-4 h-px bg-brinks-blue transform -translate-y-1/2"></div>
            
            {/* Outer decorative dots */}
            <div className="absolute top-1/2 left-4 w-1 h-1 bg-brinks-blue rounded-full transform -translate-y-1/2"></div>
            <div className="absolute top-1/2 right-4 w-1 h-1 bg-brinks-green rounded-full transform -translate-y-1/2"></div>
          </div>
        </div>
        
        <RulesSection />
        <PresidentsSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;