import React from 'react';
import { Shield, Scroll, Crown, Sword, Users, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface Rule {
  id: string;
  category: 'conduct' | 'military' | 'hierarchy' | 'alliance';
  rule: string;
  romanNumeral: string;
  penalty: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
}

const allianceRules: Rule[] = [
  {
    id: '1',
    category: 'conduct',
    rule: 'Respeitar todos os membros da aliança',
    romanNumeral: 'I',
    penalty: 'Advertência',
    severity: 'low'
  },
  {
    id: '2', 
    category: 'military',
    rule: 'Participação obrigatória em guerras da aliança',
    romanNumeral: 'II',
    penalty: 'Suspensão temporária',
    severity: 'high'
  },
  {
    id: '3',
    category: 'hierarchy',
    rule: 'Obedecer ordens dos superiores hierárquicos',
    romanNumeral: 'III',
    penalty: 'Rebaixamento de cargo',
    severity: 'medium'
  },
  {
    id: '4',
    category: 'alliance',
    rule: 'Não atacar membros aliados',
    romanNumeral: 'IV',
    penalty: 'Expulsão imediata',
    severity: 'critical'
  },
  {
    id: '5',
    category: 'conduct',
    rule: 'Usar linguagem apropriada nos chats',
    romanNumeral: 'V',
    penalty: 'Advertência',
    severity: 'low'
  },
  {
    id: '6',
    category: 'military',
    rule: 'Reportar atividades suspeitas',
    romanNumeral: 'VI',
    penalty: 'Advertência',
    severity: 'medium'
  },
  {
    id: '7',
    category: 'hierarchy',
    rule: 'Contribuir com recursos conforme cargo',
    romanNumeral: 'VII',
    penalty: 'Multa em recursos',
    severity: 'medium'
  },
  {
    id: '8',
    category: 'alliance',
    rule: 'Manter segredos estratégicos da aliança',
    romanNumeral: 'VIII',
    penalty: 'Expulsão imediata',
    severity: 'critical'
  }
];

const getCategoryIcon = (category: Rule['category']) => {
  switch (category) {
    case 'conduct': return Users;
    case 'military': return Sword;
    case 'hierarchy': return Crown;
    case 'alliance': return Shield;
    default: return Scroll;
  }
};

const getCategoryLabel = (category: Rule['category']) => {
  switch (category) {
    case 'conduct': return 'Conduta';
    case 'military': return 'Militar';
    case 'hierarchy': return 'Hierarquia';
    case 'alliance': return 'Aliança';
    default: return 'Geral';
  }
};

const getCategoryColor = (category: Rule['category']) => {
  switch (category) {
    case 'conduct': return 'from-blue-500 to-blue-600';
    case 'military': return 'from-red-500 to-red-600';
    case 'hierarchy': return 'from-amber-500 to-amber-600';
    case 'alliance': return 'from-brinks-blue to-brinks-green';
    default: return 'from-gray-500 to-gray-600';
  }
};

const getSeverityColor = (severity: Rule['severity']) => {
  switch (severity) {
    case 'low': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
    case 'medium': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
    case 'high': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300';
    case 'critical': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
    default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
  }
};

const getSeverityLabel = (severity: Rule['severity']) => {
  switch (severity) {
    case 'low': return 'Leve';
    case 'medium': return 'Moderada';
    case 'high': return 'Alta';
    case 'critical': return 'Crítica';
    default: return 'Desconhecida';
  }
};

export const RulesSection: React.FC = () => {
  const { elementRef: sectionRef, isVisible: sectionVisible } = useScrollAnimation();

  return (
    <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16" id="rules" data-rules-section>
      <section ref={sectionRef}>
        {/* Roman-styled Header */}
        <div className={`relative mb-12 ${!sectionVisible ? 'scroll-hidden' : 'scroll-animate-down'}`}>
          <div className="text-center space-y-6">
            {/* Roman decorative elements */}
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-brinks-blue to-transparent"></div>
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-brinks-blue to-brinks-green flex items-center justify-center shadow-lg">
                  <Scroll className="w-6 h-6 text-white" />
                </div>
                {/* Roman corner decorations */}
                <div className="absolute -top-1 -left-1 w-3 h-3 border-2 border-brinks-green rotate-45 bg-background"></div>
                <div className="absolute -top-1 -right-1 w-3 h-3 border-2 border-brinks-green rotate-45 bg-background"></div>
                <div className="absolute -bottom-1 -left-1 w-3 h-3 border-2 border-brinks-green rotate-45 bg-background"></div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 border-2 border-brinks-green rotate-45 bg-background"></div>
              </div>
              <div className="w-16 h-px bg-gradient-to-r from-brinks-blue via-transparent to-transparent"></div>
            </div>

            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text">
                CODEX ALLIANCIAE
              </h2>
              <p className="text-lg text-muted-foreground italic">
                Leges et Disciplina • Leis e Disciplina da Aliança
              </p>
            </div>
          </div>
        </div>

        {/* Roman-styled Rules Table */}
        <div className={`${!sectionVisible ? 'scroll-hidden' : 'scroll-animate-up animate-delay-200'}`}>
          <Card className="relative overflow-hidden border-2 border-brinks-blue/30 shadow-2xl">
            {/* Roman decorative border */}
            <div className="absolute inset-0 pointer-events-none z-10">
              <div className="absolute inset-2 border border-brinks-green/20 rounded-lg">
                {/* Corner ornaments */}
                <div className="absolute -top-1 -left-1 w-4 h-4 border-2 border-brinks-blue rotate-45 bg-card"></div>
                <div className="absolute -top-1 -right-1 w-4 h-4 border-2 border-brinks-blue rotate-45 bg-card"></div>
                <div className="absolute -bottom-1 -left-1 w-4 h-4 border-2 border-brinks-blue rotate-45 bg-card"></div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 border-2 border-brinks-blue rotate-45 bg-card"></div>
              </div>
            </div>

            <CardHeader className="relative z-20 bg-gradient-to-r from-brinks-dark/5 to-brinks-surface/5 border-b border-brinks-blue/20">
              <div className="flex items-center justify-center space-x-3">
                <Shield className="w-6 h-6 text-brinks-blue" />
                <CardTitle className="text-xl font-bold gradient-text">
                  Tabulae Legum • Tabela de Regras
                </CardTitle>
                <Shield className="w-6 h-6 text-brinks-green" />
              </div>
            </CardHeader>

            <CardContent className="relative z-20 p-0">
              {/* Desktop Table */}
              <div className="hidden md:block overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="border-b border-brinks-blue/20 bg-gradient-to-r from-brinks-dark/10 to-brinks-surface/10">
                      <TableHead className="text-center font-bold text-brinks-blue min-w-[80px]">
                        Numerus
                      </TableHead>
                      <TableHead className="font-bold text-brinks-blue min-w-[120px]">
                        Categoria
                      </TableHead>
                      <TableHead className="font-bold text-brinks-blue min-w-[300px]">
                        Regra
                      </TableHead>
                      <TableHead className="font-bold text-brinks-blue min-w-[180px]">
                        Poena • Penalidade
                      </TableHead>
                      <TableHead className="text-center font-bold text-brinks-blue min-w-[100px]">
                        Severitas
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {allianceRules.map((rule, index) => {
                      const CategoryIcon = getCategoryIcon(rule.category);
                      return (
                        <TableRow 
                          key={rule.id} 
                          className="border-b border-brinks-border/20 hover:bg-brinks-surface/5 transition-colors duration-200"
                        >
                          <TableCell className="text-center">
                            <div className="relative inline-flex items-center justify-center">
                              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-brinks-blue to-brinks-green flex items-center justify-center shadow-md">
                                <span className="text-white font-bold text-sm">
                                  {rule.romanNumeral}
                                </span>
                              </div>
                              {/* Roman decorative dots */}
                              <div className="absolute -top-1 -left-1 w-1.5 h-1.5 bg-brinks-green rounded-full"></div>
                              <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-brinks-green rounded-full"></div>
                              <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-brinks-green rounded-full"></div>
                              <div className="absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-brinks-green rounded-full"></div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center space-x-2">
                              <div className={`p-1.5 rounded-lg bg-gradient-to-r ${getCategoryColor(rule.category)} shadow-sm`}>
                                <CategoryIcon className="w-4 h-4 text-white" />
                              </div>
                              <span className="font-medium text-foreground">
                                {getCategoryLabel(rule.category)}
                              </span>
                            </div>
                          </TableCell>
                          <TableCell className="font-medium text-foreground">
                            {rule.rule}
                          </TableCell>
                          <TableCell>
                            <span className="inline-flex items-center px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm font-medium border border-border">
                              <AlertTriangle className="w-3 h-3 mr-1" />
                              {rule.penalty}
                            </span>
                          </TableCell>
                          <TableCell className="text-center">
                            <Badge 
                              variant="outline" 
                              className={`${getSeverityColor(rule.severity)} border-0 font-medium`}
                            >
                              {getSeverityLabel(rule.severity)}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </div>

              {/* Mobile Cards */}
              <div className="block md:hidden p-4 space-y-4">
                {allianceRules.map((rule, index) => {
                  const CategoryIcon = getCategoryIcon(rule.category);
                  return (
                    <Card key={rule.id} className="border border-brinks-blue/20 bg-gradient-to-r from-card to-muted/30 hover:border-brinks-green/30 transition-all duration-300">
                      <CardContent className="p-4 space-y-3">
                        {/* Header with Roman numeral and category */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="relative">
                              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-brinks-blue to-brinks-green flex items-center justify-center shadow-md">
                                <span className="text-white font-bold text-xs">
                                  {rule.romanNumeral}
                                </span>
                              </div>
                              {/* Roman decorative dots - smaller for mobile */}
                              <div className="absolute -top-0.5 -left-0.5 w-1 h-1 bg-brinks-green rounded-full"></div>
                              <div className="absolute -top-0.5 -right-0.5 w-1 h-1 bg-brinks-green rounded-full"></div>
                              <div className="absolute -bottom-0.5 -left-0.5 w-1 h-1 bg-brinks-green rounded-full"></div>
                              <div className="absolute -bottom-0.5 -right-0.5 w-1 h-1 bg-brinks-green rounded-full"></div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className={`p-1 rounded-md bg-gradient-to-r ${getCategoryColor(rule.category)} shadow-sm`}>
                                <CategoryIcon className="w-3 h-3 text-white" />
                              </div>
                              <span className="text-sm font-medium text-foreground">
                                {getCategoryLabel(rule.category)}
                              </span>
                            </div>
                          </div>
                          <Badge 
                            variant="outline" 
                            className={`${getSeverityColor(rule.severity)} border-0 font-medium text-xs px-2 py-1`}
                          >
                            {getSeverityLabel(rule.severity)}
                          </Badge>
                        </div>

                        {/* Rule text */}
                        <div className="bg-muted/30 rounded-lg p-3 border border-brinks-border/10">
                          <p className="text-sm font-medium text-foreground leading-relaxed">
                            {rule.rule}
                          </p>
                        </div>

                        {/* Penalty */}
                        <div className="flex items-center justify-center">
                          <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-muted text-muted-foreground text-xs font-medium border border-border">
                            <AlertTriangle className="w-3 h-3 mr-1.5" />
                            <span className="text-brinks-blue font-semibold mr-1">Poena:</span>
                            {rule.penalty}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Roman Legend */}
        <div className={`mt-8 ${!sectionVisible ? 'scroll-hidden' : 'scroll-animate-up animate-delay-400'}`}>
          <Card className="bg-gradient-to-r from-brinks-dark/5 to-brinks-surface/5 border-brinks-blue/20">
            <CardContent className="p-6">
              <div className="text-center space-y-4">
                <div className="flex items-center justify-center space-x-2">
                  <Scroll className="w-5 h-5 text-brinks-blue" />
                  <h3 className="text-lg font-bold gradient-text">
                    Legenda Romana • Roman Legend
                  </h3>
                  <Scroll className="w-5 h-5 text-brinks-green" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                  <div className="space-y-2">
                    <p><strong className="text-brinks-blue">Numerus:</strong> Numeração romana das regras</p>
                    <p><strong className="text-brinks-blue">Poena:</strong> Punição aplicada por violação</p>
                  </div>
                  <div className="space-y-2">
                    <p><strong className="text-brinks-green">Severitas:</strong> Nível de gravidade da infração</p>
                    <p><strong className="text-brinks-green">SPQR:</strong> Senatus Populusque Romanus</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};