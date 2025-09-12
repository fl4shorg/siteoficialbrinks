import React from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Phone } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import profileAvatar from '@/assets/profile-avatar.jpg';

const PresidentsSection = () => {
  const { elementRef, isVisible } = useScrollAnimation();

  const presidents = [
    {
      name: 'Wd',
      image: 'https://i.ibb.co/7ty4kjBc/IMG-20250908-WA0091.jpg',
      initials: 'WD',
      phone: '+559599049560'
    },
    {
      name: 'Leidy',
      image: 'https://i.ibb.co/LdFC2WNz/IMG-20250909-WA0000.jpg',
      initials: 'LD',
      phone: '+553597763131'
    }
  ];

  const handleCall = (phone: string) => {
    window.open(`https://wa.me/${phone}`, '_blank');
  };

  return (
    <section 
      id="presidents"
      ref={elementRef}
      className={`w-full max-w-6xl px-4 py-16 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Roman-style Separator */}
      <div className="w-full max-w-4xl mx-auto mb-12 flex items-center justify-center">
        <div className="relative w-full max-w-2xl">
          {/* Main separator line */}
          <div className="h-px bg-gradient-to-r from-transparent via-brinks-blue to-transparent" />
          
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

      {/* Title */}
      <div className="text-center mb-12">
        <div className="relative inline-block">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-brinks-blue via-brinks-green to-brinks-blue bg-clip-text text-transparent mb-2">
          PRESIDENTES BRINKS
        </h2>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-brinks-blue to-brinks-green rounded-full"></div>
        </div>
        <p className="text-muted-foreground mt-6 text-lg italic">
          "Nossos líderes, guardiões da dignidade e glória"
        </p>
      </div>

      {/* Presidents Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {presidents.map((president, index) => (
          <div
            key={president.name}
            className={`group relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 hover:scale-105 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{
              transitionDelay: `${index * 200}ms`
            }}
          >
            {/* Decorative corner elements */}
            <div className="absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-brinks-blue rounded-tl-lg opacity-30"></div>
            <div className="absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2 border-brinks-green rounded-tr-lg opacity-30"></div>
            <div className="absolute bottom-2 left-2 w-6 h-6 border-l-2 border-b-2 border-brinks-green rounded-bl-lg opacity-30"></div>
            <div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-brinks-blue rounded-br-lg opacity-30"></div>

            <div className="flex flex-col items-center text-center space-y-6">
              {/* Avatar */}
              <div className="relative">
                <Avatar className="w-24 h-24 border-4 border-gradient-to-r from-brinks-blue to-brinks-green shadow-xl">
                  <AvatarImage src={president.image} alt={president.name} />
                  <AvatarFallback className="text-2xl font-bold bg-gradient-to-br from-brinks-blue to-brinks-green text-white">
                    {president.initials}
                  </AvatarFallback>
                </Avatar>
                
                {/* Crown decoration */}
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                  <div className="w-6 h-3 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-t-full border border-yellow-500/30"></div>
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-yellow-300 rounded-full"></div>
                </div>
              </div>

              {/* Name */}
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-foreground group-hover:bg-gradient-to-r group-hover:from-brinks-blue group-hover:to-brinks-green group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {president.name}
                </h3>
              </div>

              {/* Roman numerals for decoration */}
              <div className="text-xs text-muted-foreground font-mono opacity-50">
                {index === 0 ? 'I' : 'II'}
              </div>

              {/* Call Button */}
              <Button
                onClick={() => handleCall(president.phone)}
                className="w-full bg-gradient-to-r from-brinks-blue to-brinks-green hover:from-brinks-green hover:to-brinks-blue text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
              >
                <Phone className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                CHAMAR
              </Button>
            </div>

            {/* Glow effect on hover */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-brinks-blue/10 to-brinks-green/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          </div>
        ))}
      </div>

      {/* Roman quote */}
      <div className="text-center mt-12 max-w-2xl mx-auto">
        <blockquote className="text-muted-foreground italic text-lg border-l-4 border-brinks-blue/30 pl-6">
          "Dois sóis no céu da Brinks: sabedoria e força unidos para sempre"
        </blockquote>
        <cite className="text-sm text-muted-foreground/60 mt-2 block">
          - Código da Aliança, Livro Primeiro
        </cite>
      </div>

      {/* Roman-style Separator */}
      <div className="w-full max-w-4xl mx-auto mt-12 mb-12 flex items-center justify-center">
        <div className="relative w-full max-w-2xl">
          {/* Main separator line */}
          <div className="h-px bg-gradient-to-r from-transparent via-brinks-blue to-transparent" />
          
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

      {/* Spotify Music Player */}
      <div id="anthem" className="text-center max-w-2xl mx-auto">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-brinks-blue to-brinks-green bg-clip-text text-transparent mb-6">
          TRILHA SONORA DOS BRINKS
        </h3>
        <div className="rounded-xl overflow-hidden shadow-2xl border border-white/10">
          <iframe 
            src="https://open.spotify.com/embed/track/2nRKJI3XsWPb5d8VXwn2iK?utm_source=generator&theme=0" 
            width="100%" 
            height="152" 
            frameBorder="0" 
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"
            className="w-full"
          />
        </div>
        <p className="text-muted-foreground/60 text-sm mt-4 italic">
          "Que os tambores de guerra ecoem pela eternidade"
        </p>
      </div>

      {/* Roman-style Separator */}
      <div className="w-full max-w-4xl mx-auto mt-16 flex items-center justify-center">
        <div className="relative w-full max-w-2xl">
          {/* Main separator line */}
          <div className="h-px bg-gradient-to-r from-transparent via-brinks-blue to-transparent" />
          
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
    </section>
  );
};

export default PresidentsSection;