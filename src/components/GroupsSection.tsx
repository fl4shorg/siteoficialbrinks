import React, { useState, useEffect } from 'react';
import { Pin, Users, Star, Radio, Heart, Sticker, Crown, Hash, Calendar, Clock, Send } from 'lucide-react';
import { DiscordIcon } from '@/components/ui/discord-icon';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { useScrollAnimation, useStaggeredAnimation } from '@/hooks/useScrollAnimation';

interface Group {
  id: string;
  name: string;
  description: string;
  image: string;
  link: string;
  platform: 'telegram' | 'discord';
  category: 'pinned' | 'premium' | 'anime' | 'featured' | 'channels' | 'friendship' | 'discord' | 'telegram';
  isPinned?: boolean;
  isPremium?: boolean;
  isFeatured?: boolean;
  isChannel?: boolean;
  postDate: string;
  dateSymbol: string;
}

interface ApiGroup {
  ID: number;
  Nome: string;
  Descricao: string;
  Categoria: string;
  Link: string;
  Imagem: string;
  Destaque: string;
  Data: string;
  Ativo: boolean;
}

const GroupCard: React.FC<{ group: Group }> = ({ group }) => {
  const getBadgeText = () => {
    if (group.isPremium) return 'PREMIUM';
    if (group.isPinned) return 'FIXADO';
    if (group.isFeatured) return 'DESTAQUE';
    if (group.isChannel) return 'CANAL';
    if (group.category === 'anime') return 'ANIMES & FIGURINHAS';
    if (group.category === 'friendship') return 'NOVAS AMIZADES';
    if (group.platform === 'discord') return 'SERVIDOR DISCORD';
    if (group.platform === 'telegram') return 'GRUPO TELEGRAM';
    return 'GRUPO';
  };

  const getBadgeStyle = () => {
    if (group.isPremium) return 'bg-gradient-to-r from-amber-500 to-yellow-500 text-white shadow-lg';
    if (group.isPinned) return 'bg-gradient-to-r from-brinks-blue to-primary text-white shadow-lg';
    if (group.isFeatured) return 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg';
    if (group.isChannel) return 'bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg';
    if (group.category === 'anime') return 'bg-gradient-to-r from-brinks-blue to-cyan-500 text-white shadow-lg';
    if (group.category === 'friendship') return 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg';
    if (group.platform === 'discord') return 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg';
    if (group.platform === 'telegram') return 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg';
    return 'bg-gradient-to-r from-brinks-dark to-brinks-surface text-white shadow-lg';
  };

  return (
    <div className="relative group cursor-pointer card-elevated bg-card rounded-xl overflow-hidden backdrop-blur-sm hover:border-brinks-blue/30 transition-all duration-500 h-full mx-auto w-full max-w-[320px]">
      {/* Roman Imperial Decorative Border */}
      <div className="absolute inset-0 pointer-events-none z-20">
        {/* Outer ornamental frame */}
        <div className="absolute inset-0 border-2 border-brinks-blue/40 rounded-xl group-hover:border-brinks-green/60 transition-colors duration-500">
          {/* Corner decorations */}
          <div className="absolute -top-1 -left-1 w-3 h-3 border border-brinks-blue rotate-45 bg-card group-hover:border-brinks-green transition-colors duration-300"></div>
          <div className="absolute -top-1 -right-1 w-3 h-3 border border-brinks-blue rotate-45 bg-card group-hover:border-brinks-green transition-colors duration-300"></div>
          <div className="absolute -bottom-1 -left-1 w-3 h-3 border border-brinks-blue rotate-45 bg-card group-hover:border-brinks-green transition-colors duration-300"></div>
          <div className="absolute -bottom-1 -right-1 w-3 h-3 border border-brinks-blue rotate-45 bg-card group-hover:border-brinks-green transition-colors duration-300"></div>
          
          {/* Side decorative elements */}
          <div className="absolute top-1/2 -left-2 w-2 h-4 bg-brinks-blue transform -translate-y-1/2 clip-diamond group-hover:bg-brinks-green transition-colors duration-300"></div>
          <div className="absolute top-1/2 -right-2 w-2 h-4 bg-brinks-blue transform -translate-y-1/2 clip-diamond group-hover:bg-brinks-green transition-colors duration-300"></div>
        </div>
        
        {/* Inner frame */}
        <div className="absolute inset-1 border border-brinks-green/30 rounded-xl group-hover:border-brinks-blue/50 transition-colors duration-300">
          {/* Inner ornamental dots */}
          <div className="absolute top-1 left-1 w-1 h-1 bg-brinks-green rounded-full group-hover:bg-brinks-blue transition-colors duration-300"></div>
          <div className="absolute top-1 right-1 w-1 h-1 bg-brinks-green rounded-full group-hover:bg-brinks-blue transition-colors duration-300"></div>
          <div className="absolute bottom-1 left-1 w-1 h-1 bg-brinks-green rounded-full group-hover:bg-brinks-blue transition-colors duration-300"></div>
          <div className="absolute bottom-1 right-1 w-1 h-1 bg-brinks-green rounded-full group-hover:bg-brinks-blue transition-colors duration-300"></div>
        </div>
      </div>

      {/* Background Image with Overlay - Increased height like in image */}
      <div 
        className="relative h-48 w-full bg-cover bg-center overflow-hidden rounded-t-xl"
        style={{ backgroundImage: `url(${group.image})` }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        
        {/* Roman decorative overlay for image */}
        <div className="absolute inset-0 pointer-events-none z-10">
          {/* Inner image border */}
          <div className="absolute inset-2 border border-brinks-green/40 rounded-lg">
            {/* Corner ornaments for image */}
            <div className="absolute -top-0.5 -left-0.5 w-2 h-2 border border-brinks-green rotate-45 bg-black/40 backdrop-blur-sm"></div>
            <div className="absolute -top-0.5 -right-0.5 w-2 h-2 border border-brinks-green rotate-45 bg-black/40 backdrop-blur-sm"></div>
            <div className="absolute -bottom-0.5 -left-0.5 w-2 h-2 border border-brinks-green rotate-45 bg-black/40 backdrop-blur-sm"></div>
            <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 border border-brinks-green rotate-45 bg-black/40 backdrop-blur-sm"></div>
          </div>
        </div>
        
        {/* Category badge - top left with Roman styling */}
        <div className="absolute top-2 left-2 z-20">
          <div className="relative">
            {/* Roman badge border */}
            <div className="absolute inset-0 scale-105">
              <div className="border border-brinks-green/60 rounded-md bg-black/50 backdrop-blur-sm">
                <div className="absolute -top-0.5 -left-0.5 w-1.5 h-1.5 border border-brinks-green rotate-45 bg-brinks-blue/60"></div>
                <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 border border-brinks-green rotate-45 bg-brinks-blue/60"></div>
              </div>
            </div>
            <span className={`relative z-10 inline-block px-1.5 py-0.5 text-[10px] font-bold rounded-md uppercase tracking-tight backdrop-blur-sm ${getBadgeStyle()}`}>
              {getBadgeText()}
            </span>
          </div>
        </div>
        
        {/* Star icon - top right with Roman styling */}
        <div className="absolute top-2 right-2 z-20">
          <div className="relative">
            {/* Roman star border */}
            <div className="absolute inset-0 w-8 h-8">
              <div className="absolute inset-0 border border-brinks-green/40 rounded-full bg-black/50 backdrop-blur-sm group-hover:border-brinks-blue/60 transition-colors duration-300">
                <div className="absolute top-0 left-1/2 w-1 h-1 bg-brinks-green rounded-full transform -translate-x-1/2 -translate-y-0.5"></div>
                <div className="absolute bottom-0 left-1/2 w-1 h-1 bg-brinks-green rounded-full transform -translate-x-1/2 translate-y-0.5"></div>
                <div className="absolute left-0 top-1/2 w-1 h-1 bg-brinks-green rounded-full transform -translate-x-0.5 -translate-y-1/2"></div>
                <div className="absolute right-0 top-1/2 w-1 h-1 bg-brinks-green rounded-full transform translate-x-0.5 -translate-y-1/2"></div>
              </div>
            </div>
            <div className="relative z-10 w-8 h-8 flex items-center justify-center">
              <Star className="w-4 h-4 text-amber-400 fill-amber-400 drop-shadow-sm" />
            </div>
          </div>
        </div>

        {/* Decorative Roman corner accents */}
        <div className="absolute bottom-2 right-2 w-8 h-8 opacity-60">
          <div className="w-full h-full bg-brinks-green transform rotate-45 clip-diamond"></div>
        </div>
        <div className="absolute bottom-2 left-2 w-6 h-6 opacity-40">
          <div className="w-full h-full bg-brinks-blue transform rotate-45 clip-diamond"></div>
        </div>
      </div>
      
      {/* Content section with Roman styling - Compact like in image */}
      <div className="relative bg-gradient-to-b from-card to-muted/30 p-3 space-y-2 rounded-b-xl">
        {/* Roman decorative line separator */}
        <div className="absolute top-0 left-3 right-3 h-px bg-gradient-to-r from-transparent via-brinks-green/40 to-transparent"></div>
        
        {/* Group name - smaller like in image */}
        <h3 className="text-sm font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent leading-tight line-clamp-2">
          {group.name}
        </h3>
        
        {/* Group description */}
        <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
          {group.description}
        </p>
        
        {/* Date with symbol - compact */}
        <div className="flex items-center gap-1 text-xs text-muted-foreground/80">
          <span>{group.dateSymbol}</span>
          <Clock className="w-3 h-3" />
          <span>{group.postDate}</span>
        </div>
        
        {/* Enter button with Roman-inspired design */}
        <div className="relative">
          {/* Roman button decorative border */}
          <div className="absolute inset-0 w-full h-full">
            <div className="absolute inset-0 border border-brinks-green/30 rounded-lg group-hover:border-brinks-blue/50 transition-colors duration-300">
              <div className="absolute -top-0.5 -left-0.5 w-1 h-1 border border-brinks-green rotate-45 bg-card group-hover:border-brinks-blue transition-colors duration-300"></div>
              <div className="absolute -top-0.5 -right-0.5 w-1 h-1 border border-brinks-green rotate-45 bg-card group-hover:border-brinks-blue transition-colors duration-300"></div>
              <div className="absolute -bottom-0.5 -left-0.5 w-1 h-1 border border-brinks-green rotate-45 bg-card group-hover:border-brinks-blue transition-colors duration-300"></div>
              <div className="absolute -bottom-0.5 -right-0.5 w-1 h-1 border border-brinks-green rotate-45 bg-card group-hover:border-brinks-blue transition-colors duration-300"></div>
            </div>
          </div>
          
          <Button 
            className="relative z-10 w-full bg-gradient-to-r from-brinks-blue to-brinks-green hover:from-brinks-blue/90 hover:to-brinks-green/90 text-white font-medium py-1.5 px-1.5 text-xs rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-white/10"
            onClick={() => window.open(group.link, '_blank')}
          >
            <Users className="w-3 h-3 mr-1 flex-shrink-0" />
            <span className="truncate leading-tight">
              {group.platform === 'telegram' 
                ? (group.isChannel ? 'Entrar no Canal' : 'Entrar no Grupo')
                : (group.isChannel ? 'Entrar no Canal' : 'Entrar no Servidor')
              }
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export const GroupsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [groups, setGroups] = useState<Group[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { elementRef: sectionRef, isVisible: sectionVisible } = useScrollAnimation();

  const apiUrl = "https://script.google.com/macros/s/AKfycbyIr_0-wwYO3y0X3r_YpbIzmuwC1T0dSJGYyKB0zcuFhdVONWlhkg_DlYihl4jTlA/exec";

  // Função para mapear categoria da API para categoria do sistema
  const mapCategory = (apiCategory: string, destaque: string): Group['category'] => {
    if (destaque === 'destaque') return 'featured';
    if (destaque === 'fixado') return 'pinned';
    
    switch (apiCategory?.toLowerCase()) {
      case 'animes':
      case 'figurinhas':
        return 'anime';
      case 'canal':
        return 'channels';
      case 'novas amizades':
        return 'friendship';
      case 'discord':
        return 'discord';
      case 'telegram':
        return 'telegram';
      default:
        return 'telegram'; // padrão para telegram
    }
  };

  // Função para detectar plataforma
  const detectPlatform = (link: string, name: string, description: string, categoria?: string): 'telegram' | 'discord' => {
    const linkLower = link.toLowerCase();
    const nameLower = name.toLowerCase();
    const descLower = description.toLowerCase();
    const catLower = categoria?.toLowerCase() || '';
    
    if (linkLower.includes('discord') || 
        nameLower.includes('discord') || 
        descLower.includes('discord') ||
        catLower.includes('discord') ||
        linkLower.includes('discord.gg') ||
        linkLower.includes('discord.com')) {
      return 'discord';
    }
    return 'telegram';
  };

  // Função para gerar símbolo de data baseado na categoria
  const getDateSymbol = (category: Group['category']): string => {
    switch (category) {
      case 'featured': return '🌟';
      case 'pinned': return '📌';
      case 'anime': return '🎌';
      case 'channels': return '📢';
      case 'friendship': return '💖';
      case 'discord': return '🎮';
      case 'telegram': return '✈️';
      case 'premium': return '👑';
      default: return '📱';
    }
  };
  
  // Função para calcular tempo relativo
  const getRelativeTime = (date: string): string => {
    const now = new Date();
    const postDate = new Date(date);
    const diffInMs = now.getTime() - postDate.getTime();
    const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    const diffInWeeks = Math.floor(diffInDays / 7);
    const diffInMonths = Math.floor(diffInDays / 30);

    if (diffInMonths > 0) {
      return `há ${diffInMonths} ${diffInMonths === 1 ? 'mês' : 'meses'}`;
    } else if (diffInWeeks > 0) {
      return `há ${diffInWeeks} ${diffInWeeks === 1 ? 'semana' : 'semanas'}`;
    } else if (diffInDays > 0) {
      return `há ${diffInDays} ${diffInDays === 1 ? 'dia' : 'dias'}`;
    } else if (diffInHours > 0) {
      return `há ${diffInHours} ${diffInHours === 1 ? 'hora' : 'horas'}`;
    } else if (diffInMinutes > 0) {
      return `há ${diffInMinutes} ${diffInMinutes === 1 ? 'minuto' : 'minutos'}`;
    } else {
      return 'agora mesmo';
    }
  };

  // Função para converter ApiGroup para Group
  const convertApiGroup = (apiGroup: ApiGroup): Group => {
    const category = mapCategory(apiGroup.Categoria, apiGroup.Destaque);
    const platform = detectPlatform(apiGroup.Link, apiGroup.Nome, apiGroup.Descricao, apiGroup.Categoria);
    
    return {
      id: `group-${apiGroup.ID}`,
      name: apiGroup.Nome,
      description: apiGroup.Descricao || 'Sem descrição disponível',
      image: apiGroup.Imagem || 'https://via.placeholder.com/300x160?text=Sem+Imagem',
      link: apiGroup.Link,
      platform,
      category,
      isPinned: apiGroup.Destaque === 'fixado',
      isPremium: false,
      isFeatured: apiGroup.Destaque === 'destaque',
      isChannel: apiGroup.Categoria?.toLowerCase() === 'canal',
      postDate: getRelativeTime(apiGroup.Data),
      dateSymbol: getDateSymbol(category)
    };
  };

  // Carregar grupos da API
  useEffect(() => {
    const loadGroups = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch(`${apiUrl}?action=principal`);
        if (!response.ok) {
          throw new Error('Erro ao carregar grupos');
        }
        
        const data: ApiGroup[] = await response.json();
        console.log('=== DEBUG: Dados da API ===', data);
        console.log('=== DEBUG: Quantidade de grupos da API ===', data.length);
        
        // Filtrar apenas grupos ativos
        const activeGroups = data.filter(group => group.Ativo);
        console.log('=== DEBUG: Grupos ativos ===', activeGroups);
        console.log('=== DEBUG: Quantidade de grupos ativos ===', activeGroups.length);
        
        const convertedGroups = activeGroups.map(apiGroup => convertApiGroup(apiGroup));
        console.log('=== DEBUG: Grupos convertidos ===', convertedGroups);
        setGroups(convertedGroups);
      } catch (err) {
        console.error('Erro ao carregar grupos:', err);
        setError('Erro ao carregar grupos. Tente novamente mais tarde.');
      } finally {
        setLoading(false);
      }
    };

    loadGroups();
  }, []);

  const getFilteredGroups = () => {
    switch (activeFilter) {
      case 'telegram':
        return groups.filter(group => group.category === 'telegram');
      case 'discord':
        return groups.filter(group => group.category === 'discord');
      case 'pinned':
        return groups.filter(group => group.isPinned);
      case 'featured':
        return groups.filter(group => group.isFeatured);
      case 'premium':
        return groups.filter(group => group.isPremium);
      case 'anime':
        return groups.filter(group => group.category === 'anime');
      case 'channels':
        return groups.filter(group => group.category === 'channels');
      case 'friendship':
        return groups.filter(group => group.category === 'friendship');
      default:
        return groups;
    }
  };

  const filteredGroups = getFilteredGroups();
  console.log('=== DEBUG: Grupos filtrados ===', filteredGroups);
  console.log('=== DEBUG: Filtro ativo ===', activeFilter);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'telegram': return Send;
      case 'discord': return DiscordIcon;
      case 'pinned': return Pin;
      case 'featured': return Star;
      case 'premium': return Crown;
      case 'anime': return Sticker;
      case 'channels': return Radio;
      case 'friendship': return Heart;
      default: return Hash;
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'telegram': return 'Telegram';
      case 'discord': return 'Discord';
      case 'pinned': return 'Fixados';
      case 'featured': return 'Destaque';
      case 'premium': return 'Premium';
      case 'anime': return 'Anime';
      case 'channels': return 'Canais';
      case 'friendship': return 'Amizade';
      default: return 'Todos';
    }
  };

  const renderGroupsGrid = (groups: Group[]) => {
    console.log('=== DEBUG: Renderizando grupos ===', groups.length);
    return (
      <div className="w-full px-2 sm:px-4 md:px-0">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 md:gap-6 justify-items-center">
          {groups.map((group, index) => (
            <div key={group.id} className="w-full">
              <GroupCard group={group} />
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderCategorySection = (
    categoryFilter: string,
    title: string,
    description: string,
    icon: any,
    bgGradient: string
  ) => {
    let filteredCategoryGroups: Group[];
    
    switch (categoryFilter) {
      case 'telegram':
        filteredCategoryGroups = groups.filter(group => group.category === 'telegram');
        break;
      case 'discord':
        filteredCategoryGroups = groups.filter(group => group.category === 'discord');
        break;
      case 'pinned':
        filteredCategoryGroups = groups.filter(group => group.isPinned);
        break;
      case 'anime':
        filteredCategoryGroups = groups.filter(group => group.category === 'anime');
        break;
      case 'channels':
        filteredCategoryGroups = groups.filter(group => group.category === 'channels');
        break;
      case 'friendship':
        filteredCategoryGroups = groups.filter(group => group.category === 'friendship');
        break;
      case 'featured':
        filteredCategoryGroups = groups.filter(group => group.isFeatured);
        break;
      case 'premium':
        filteredCategoryGroups = groups.filter(group => group.isPremium);
        break;
      default:
        filteredCategoryGroups = groups;
    }
    
    // Sempre exibir a seção, mesmo sem grupos
    
    const titleWithCount = `${title} (${filteredCategoryGroups.length})`;

    return (
      <section className="px-4 sm:px-0">
        <div className="relative mb-6 sm:mb-8">
          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-brinks-blue/20 to-brinks-green/20 rounded-lg transform rotate-45 blur-sm"></div>
                <div className={`relative z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-lg ${bgGradient} flex items-center justify-center shadow-lg`}>
                  {React.createElement(icon, { className: "w-5 h-5 sm:w-6 sm:h-6 text-white" })}
                </div>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  {titleWithCount}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm">
                  {description}
                </p>
              </div>
            </div>
            <div className="text-left sm:text-right">
              <div className="text-xs sm:text-sm text-muted-foreground">
                {filteredCategoryGroups.length} {filteredCategoryGroups.length === 1 ? 'grupo' : 'grupos'}
              </div>
            </div>
          </div>
        </div>
        {filteredCategoryGroups.length > 0 ? (
          renderGroupsGrid(filteredCategoryGroups)
        ) : (
          <div className="text-center py-8 sm:py-12">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-brinks-blue/5 to-brinks-green/5 rounded-lg transform rotate-1 blur-sm"></div>
              <div className="relative z-10 bg-card/50 backdrop-blur-sm rounded-lg border border-border/50 p-6 sm:p-8 max-w-md mx-auto">
                <div className="mb-4">
                  {React.createElement(icon, { className: "w-12 h-12 sm:w-16 sm:h-16 text-muted-foreground/60 mx-auto" })}
                </div>
                <h4 className="text-lg sm:text-xl font-semibold text-foreground mb-2">
                  Nenhum grupo disponível
                </h4>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Ainda não há grupos nesta categoria. Novos grupos são adicionados regularmente!
                </p>
              </div>
            </div>
          </div>
        )}
      </section>
    );
  };

  if (loading) {
    return (
      <section id="grupos" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brinks-blue mx-auto mb-4"></div>
            <p className="text-muted-foreground">Carregando grupos...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="grupos" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-20">
            <p className="text-red-500 mb-4">{error}</p>
            <Button 
              onClick={() => window.location.reload()} 
              className="bg-brinks-blue hover:bg-brinks-blue/90"
            >
              Tentar Novamente
            </Button>
          </div>
        </div>
      </section>
    );
  }

  console.log('=== DEBUG: Estado atual - loading:', loading, 'error:', error, 'grupos:', groups.length);

  return (
    <section 
      id="grupos" 
      data-groups-section
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-brinks-blue/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-brinks-green/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-2 sm:px-4 lg:px-6 xl:px-8 relative z-10 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 px-4">
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-brinks-blue/10 to-brinks-green/10 px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-full border border-brinks-blue/20 mb-4 sm:mb-6">
            <Users className="w-4 h-4 sm:w-5 sm:h-5 text-brinks-blue flex-shrink-0" />
            <span className="text-xs sm:text-sm font-medium text-brinks-blue whitespace-nowrap">Grupos & Comunidades</span>
          </div>
          
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-foreground via-brinks-blue to-brinks-green bg-clip-text text-transparent leading-tight">
            Encontre Sua Comunidade
          </h2>
          
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Conecte-se com pessoas incríveis em grupos exclusivos. Cada comunidade é um mundo de possibilidades esperando por você.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="mb-6 sm:mb-8 lg:mb-12 w-full">
          <Tabs value={activeFilter} onValueChange={setActiveFilter} className="w-full">
            <div className="w-full mb-6 sm:mb-8">
              <div className="overflow-x-auto scrollbar-hide pb-2 px-4 sm:px-0">
                <TabsList className="flex h-12 sm:h-14 md:h-16 items-center justify-start rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 p-1 sm:p-1.5 text-muted-foreground shadow-md w-max gap-1 sm:gap-2">
                  {[
                    { value: 'all', label: 'Todos', icon: Hash },
                    { value: 'featured', label: 'Destaque', icon: Star },
                    { value: 'pinned', label: 'Fixados', icon: Pin },
                    { value: 'anime', label: 'Anime', icon: Sticker },
                    { value: 'channels', label: 'Canais', icon: Radio },
                    { value: 'friendship', label: 'Amizade', icon: Heart },
                    { value: 'telegram', label: 'Telegram', icon: Send },
                    { value: 'discord', label: 'Discord', icon: DiscordIcon }
                  ].map((tab) => {
                    const Icon = tab.icon;
                    return (
                      <TabsTrigger
                        key={tab.value}
                        value={tab.value}
                        className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 text-sm sm:text-base font-medium transition-all duration-200 data-[state=active]:bg-gradient-to-r data-[state=active]:from-brinks-blue data-[state=active]:to-brinks-green data-[state=active]:text-white data-[state=active]:shadow-md whitespace-nowrap flex-shrink-0 rounded-md min-w-0"
                      >
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                        <span className="hidden min-[375px]:inline text-sm sm:text-base">{tab.label}</span>
                      </TabsTrigger>
                    );
                  })}
                </TabsList>
              </div>
            </div>

            {/* All Groups Tab */}
            <TabsContent value="all" className="space-y-12">
              {/* Featured Groups */}
              {renderCategorySection(
                'featured',
                'Grupos em Destaque',
                'Os melhores grupos selecionados para você',
                Star,
                'bg-gradient-to-r from-purple-500 to-pink-500'
              )}

              {/* Pinned Groups */}
              {renderCategorySection(
                'pinned',
                'Grupos Fixados',
                'Grupos importantes sempre em evidência',
                Pin,
                'bg-gradient-to-r from-brinks-blue to-primary'
              )}

              {/* Anime Groups */}
              {renderCategorySection(
                'anime',
                'Animes & Figurinhas',
                'Para os fãs de anime e colecionadores',
                Sticker,
                'bg-gradient-to-r from-brinks-blue to-cyan-500'
              )}

              {/* Channel Groups */}
              {renderCategorySection(
                'channels',
                'Canais Oficiais',
                'Canais com conteúdo oficial e atualizações',
                Radio,
                'bg-gradient-to-r from-red-500 to-orange-500'
              )}

              {/* Friendship Groups */}
              {renderCategorySection(
                'friendship',
                'Novas Amizades',
                'Encontre novas amizades e conexões especiais',
                Heart,
                'bg-gradient-to-r from-pink-500 to-rose-500'
              )}

              {/* Telegram Groups */}
              {renderCategorySection(
                'telegram',
                'Grupos Telegram',
                'Comunidades ativas no Telegram',
                Send,
                'bg-gradient-to-r from-blue-500 to-cyan-500'
              )}

              {/* Discord Groups */}
              {renderCategorySection(
                'discord',
                'Servidores Discord',
                'Servidores organizados no Discord',
                DiscordIcon,
                'bg-gradient-to-r from-indigo-500 to-purple-500'
              )}
            </TabsContent>

            {/* Individual Category Tabs */}
            {[
              { value: 'featured', title: 'Grupos em Destaque' },
              { value: 'pinned', title: 'Grupos Fixados' },
              { value: 'anime', title: 'Animes & Figurinhas' },
              { value: 'channels', title: 'Canais Oficiais' },
              { value: 'friendship', title: 'Novas Amizades' },
              { value: 'telegram', title: 'Grupos Telegram' },
              { value: 'discord', title: 'Servidores Discord' }
            ].map((tab) => (
              <TabsContent key={tab.value} value={tab.value} className="px-4 sm:px-0">
                <div className="text-center mb-6 sm:mb-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">{tab.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    {filteredGroups.length} {filteredGroups.length === 1 ? 'grupo encontrado' : 'grupos encontrados'}
                  </p>
                </div>
                {filteredGroups.length > 0 ? (
                  renderGroupsGrid(filteredGroups)
                ) : (
                  <div className="text-center py-12">
                    <p className="text-sm sm:text-base text-muted-foreground">Nenhum grupo encontrado nesta categoria.</p>
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};