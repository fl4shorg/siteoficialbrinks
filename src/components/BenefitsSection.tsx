import React from 'react';
import { Users, Shield, Bot, TrendingUp, Heart } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const benefits = [
  {
    icon: Shield,
    title: 'Segurança',
    description: 'A gente protege seu grupo contra ameaças internas, mantendo tudo seguro e organizado.',
  },
  {
    icon: Bot,
    title: 'Bots Exclusivos',
    description: 'Você tem acesso gratuito aos nossos bots dentro do seu grupo, com ferramentas que ajudam na gestão e no engajamento.',
  },
  {
    icon: TrendingUp,
    title: 'Crescimento',
    description: 'Seu grupo sempre vai crescer com nossa divulgação e apoio da comunidade.',
  },
  {
    icon: Users,
    title: 'União',
    description: 'Aqui todos crescem juntos. O sucesso de um é o sucesso de todos.',
  },
  {
    icon: Heart,
    title: 'Apoio Total',
    description: 'Se mexer com um, é como mexer com todos. A Aliança Brinks está sempre ao seu lado.',
  },
];

export const BenefitsSection: React.FC = () => {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { elementRef: cardsRef, isVisible: cardsVisible } = useScrollAnimation();

  return (
    <section className="w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div 
        ref={titleRef}
        className={`text-center mb-8 ${!titleVisible ? 'scroll-hidden' : 'scroll-animate-up'}`}
      >
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Benefícios da Aliança</h2>
        <p className="mt-1 text-sm sm:text-base text-muted-foreground">
          Tudo o que você precisa para uma comunidade próspera.
        </p>
      </div>
      
      <div 
        ref={cardsRef}
        className={`grid grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 ${!cardsVisible ? 'scroll-hidden' : ''}`}
      >
        {benefits.map((benefit, index) => (
          <div 
            key={index} 
            className={`flex flex-col items-center text-center p-3 sm:p-4 rounded-xl bg-card border border-border card-elevated group hover:border-brinks-green/50 transition-all duration-300 ${
              cardsVisible ? `scroll-animate-up animate-delay-${(index + 1) * 100}` : ''
            }`}
          >
            <div className="mb-2 sm:mb-3 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-background text-brinks-green group-hover:glow-green transition-all duration-300">
              <benefit.icon className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h3 className="text-sm sm:text-base font-bold mb-1 sm:mb-2">{benefit.title}</h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-tight">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};