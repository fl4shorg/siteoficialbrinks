import React from 'react';
import { Users, Link } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ReportGenerator } from '@/components/ReportGenerator';

const requirements = [
  {
    icon: Users,
    title: 'Ter um Grupo',
    description: 'Tenha um grupo ativo com qualquer quantidade de membros.',
  },
  {
    icon: Link,
    title: 'Link na Descrição',
    description: 'Adicione o link da aliança na descrição do seu grupo.',
  },
];

export const RequirementsSection: React.FC = () => {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { elementRef: cardsRef, isVisible: cardsVisible } = useScrollAnimation();

  return (
    <section className="w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div 
        ref={titleRef}
        className={`text-center mb-8 ${!titleVisible ? 'scroll-hidden' : 'scroll-animate-up'}`}
      >
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Requisitos da Aliança</h2>
        <p className="mt-1 text-sm sm:text-base text-muted-foreground">
          O que você precisa para fazer parte da nossa aliança.
        </p>
      </div>
      
      <div 
        ref={cardsRef}
        className={`grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 ${!cardsVisible ? 'scroll-hidden' : ''}`}
      >
        {requirements.map((requirement, index) => (
          <div 
            key={index} 
            className={`flex flex-col items-center text-center p-3 sm:p-4 rounded-xl bg-card border border-border card-elevated group hover:border-brinks-blue/50 transition-all duration-300 ${
              cardsVisible ? `scroll-animate-scale animate-delay-${(index + 1) * 150}` : ''
            }`}
          >
            <div className="mb-2 sm:mb-3 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-background text-brinks-blue group-hover:glow-blue transition-all duration-300">
              <requirement.icon className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h3 className="text-sm sm:text-base font-bold mb-1 sm:mb-2">{requirement.title}</h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-tight">{requirement.description}</p>
          </div>
        ))}
      </div>
      
      {/* Roman separator at the end */}
      <div className="mt-12 sm:mt-16 flex items-center justify-center">
        <div className="relative w-full max-w-md">
          {/* Main decorative line */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-brinks-green/40 to-transparent"></div>
          
          {/* Center ornament */}
          <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2">
            <div className="relative w-8 h-8 bg-card border-2 border-brinks-green/40 rounded-full flex items-center justify-center">
              {/* Corner decorations */}
              <div className="absolute -top-1 -left-1 w-2 h-2 border border-brinks-green rotate-45 bg-background"></div>
              <div className="absolute -top-1 -right-1 w-2 h-2 border border-brinks-green rotate-45 bg-background"></div>
              <div className="absolute -bottom-1 -left-1 w-2 h-2 border border-brinks-green rotate-45 bg-background"></div>
              <div className="absolute -bottom-1 -right-1 w-2 h-2 border border-brinks-green rotate-45 bg-background"></div>
              
              {/* Center diamond */}
              <div className="w-3 h-3 bg-brinks-blue transform rotate-45 clip-diamond"></div>
            </div>
          </div>
          
          {/* Side ornaments */}
          <div className="absolute left-4 top-0 transform -translate-y-1/2">
            <div className="w-4 h-1 bg-brinks-green/60 clip-diamond"></div>
          </div>
          <div className="absolute right-4 top-0 transform -translate-y-1/2">
            <div className="w-4 h-1 bg-brinks-green/60 clip-diamond"></div>
          </div>
        </div>
      </div>
      
      <ReportGenerator />
    </section>
  );
};