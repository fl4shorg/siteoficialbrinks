import React, { useState } from 'react';
import { Download, FileImage, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import brinksLogo from '@/assets/brinks-logo.png';
import spartanIcon from '@/assets/spartan-icon.png';

const benefits = [
  { title: 'Segurança', description: 'Proteção contra ameaças internas' },
  { title: 'Bots Exclusivos', description: 'Acesso gratuito aos nossos bots' },
  { title: 'Crescimento', description: 'Divulgação e apoio da comunidade' },
  { title: 'União', description: 'Todos crescem juntos' },
  { title: 'Apoio Total', description: 'A Aliança sempre ao seu lado' },
];

const requirements = [
  { title: 'Ter um Grupo', description: 'Grupo ativo com qualquer quantidade de membros' },
  { title: 'Link na Descrição', description: 'Adicione o link da aliança na descrição' },
  { title: 'Usar a Tag da Brinks', description: 'Tag oficial da Brinks no nome ou perfil' },
];

export const ReportGenerator: React.FC = () => {
  const [isGenerating, setIsGenerating] = useState(false);

  const generateReport = async () => {
    setIsGenerating(true);
    try {
      // Create canvas for the report
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      if (!ctx) {
        throw new Error('Could not get canvas context');
      }

      // Set canvas dimensions for professional report
      canvas.width = 1400;
      canvas.height = 1800;

      // Roman-inspired professional background
      const bgGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      bgGradient.addColorStop(0, '#111a22'); // brinks-dark
      bgGradient.addColorStop(0.3, '#192633'); // brinks-surface 
      bgGradient.addColorStop(0.7, '#192633'); // brinks-surface
      bgGradient.addColorStop(1, '#111a22'); // brinks-dark
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Professional Roman border frame
      const drawRomanBorder = (x, y, width, height, primaryColor, accentColor) => {
        // Outer ornamental frame
        ctx.strokeStyle = primaryColor;
        ctx.lineWidth = 4;
        ctx.strokeRect(x, y, width, height);
        
        // Corner decorations
        const cornerSize = 16;
        ctx.fillStyle = primaryColor;
        // Top-left corner
        ctx.save();
        ctx.translate(x - 8, y - 8);
        ctx.rotate(Math.PI / 4);
        ctx.fillRect(0, 0, cornerSize, cornerSize);
        ctx.restore();
        
        // Top-right corner
        ctx.save();
        ctx.translate(x + width + 8, y - 8);
        ctx.rotate(Math.PI / 4);
        ctx.fillRect(0, 0, cornerSize, cornerSize);
        ctx.restore();
        
        // Bottom-left corner
        ctx.save();
        ctx.translate(x - 8, y + height + 8);
        ctx.rotate(Math.PI / 4);
        ctx.fillRect(0, 0, cornerSize, cornerSize);
        ctx.restore();
        
        // Bottom-right corner
        ctx.save();
        ctx.translate(x + width + 8, y + height + 8);
        ctx.rotate(Math.PI / 4);
        ctx.fillRect(0, 0, cornerSize, cornerSize);
        ctx.restore();
        
        // Side decorative diamonds
        ctx.fillStyle = accentColor;
        // Left diamond
        ctx.save();
        ctx.translate(x - 12, y + height/2);
        ctx.rotate(Math.PI / 4);
        ctx.fillRect(0, 0, 20, 8);
        ctx.restore();
        
        // Right diamond
        ctx.save();
        ctx.translate(x + width + 12, y + height/2);
        ctx.rotate(Math.PI / 4);
        ctx.fillRect(0, 0, 20, 8);
        ctx.restore();
        
        // Top diamond
        ctx.save();
        ctx.translate(x + width/2, y - 12);
        ctx.rotate(Math.PI / 4);
        ctx.fillRect(0, 0, 8, 20);
        ctx.restore();
        
        // Bottom diamond
        ctx.save();
        ctx.translate(x + width/2, y + height + 12);
        ctx.rotate(Math.PI / 4);
        ctx.fillRect(0, 0, 8, 20);
        ctx.restore();
        
        // Inner accent frame
        ctx.strokeStyle = accentColor;
        ctx.lineWidth = 2;
        ctx.strokeRect(x + 8, y + 8, width - 16, height - 16);
        
        // Inner ornamental dots
        ctx.fillStyle = accentColor;
        const dotSize = 4;
        ctx.fillRect(x + 16, y + 16, dotSize, dotSize);
        ctx.fillRect(x + width - 20, y + 16, dotSize, dotSize);
        ctx.fillRect(x + 16, y + height - 20, dotSize, dotSize);
        ctx.fillRect(x + width - 20, y + height - 20, dotSize, dotSize);
      };

      // Main report border frame
      drawRomanBorder(40, 40, canvas.width - 80, canvas.height - 80, '#1172d4', '#34d399');

      // Professional header with Roman styling
      const headerHeight = 160;
      const headerGradient = ctx.createLinearGradient(0, 60, 0, 60 + headerHeight);
      headerGradient.addColorStop(0, '#1172d4'); // brinks-blue
      headerGradient.addColorStop(1, '#34d399'); // brinks-green
      ctx.fillStyle = headerGradient;
      ctx.fillRect(60, 60, canvas.width - 120, headerHeight);
      
      // Header Roman decorative border
      drawRomanBorder(60, 60, canvas.width - 120, headerHeight, '#f59e0b', '#ffffff');
      
      // Title with shadow effect
      ctx.fillStyle = '#000000';
      ctx.font = 'bold 64px Manrope, system-ui';
      ctx.textAlign = 'center';
      ctx.fillText('BRINKS ALIANÇA', canvas.width / 2 + 3, 140 + 3); // Shadow
      
      ctx.fillStyle = '#ffffff';
      ctx.fillText('BRINKS ALIANÇA', canvas.width / 2, 140);
      
      // Subtitle with Roman ornament
      ctx.font = '28px Manrope, system-ui';
      ctx.fillStyle = '#f1f5f9';
      ctx.fillText('RELATÓRIO PROFISSIONAL', canvas.width / 2, 180);
      
      // Roman decorative separator
      const separatorY = 200;
      ctx.strokeStyle = '#f59e0b';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(200, separatorY);
      ctx.lineTo(canvas.width - 200, separatorY);
      ctx.stroke();
      
      // Central ornament
      ctx.fillStyle = '#f59e0b';
      ctx.save();
      ctx.translate(canvas.width / 2, separatorY);
      ctx.rotate(Math.PI / 4);
      ctx.fillRect(-8, -8, 16, 16);
      ctx.restore();
      
      let yPosition = 280;

      // Benefits Section with Roman styling
      ctx.fillStyle = '#34d399';
      ctx.font = 'bold 42px Manrope, system-ui';
      ctx.textAlign = 'left';
      ctx.fillText('⚔️ BENEFÍCIOS DA ALIANÇA', 100, yPosition);
      yPosition += 80;

      benefits.forEach((benefit, index) => {
        const cardY = yPosition - 15;
        const cardHeight = 90;
        
        // Professional card background with gradient
        const cardGradient = ctx.createLinearGradient(0, cardY, 0, cardY + cardHeight);
        cardGradient.addColorStop(0, '#192633');
        cardGradient.addColorStop(1, '#233648');
        ctx.fillStyle = cardGradient;
        ctx.fillRect(100, cardY, canvas.width - 200, cardHeight);
        
        // Roman card border
        ctx.strokeStyle = '#34d399';
        ctx.lineWidth = 3;
        ctx.strokeRect(100, cardY, canvas.width - 200, cardHeight);
        
        // Corner decorations
        ctx.fillStyle = '#34d399';
        const cornerSize = 8;
        ctx.save();
        ctx.translate(100 - 4, cardY - 4);
        ctx.rotate(Math.PI / 4);
        ctx.fillRect(0, 0, cornerSize, cornerSize);
        ctx.restore();
        
        ctx.save();
        ctx.translate(canvas.width - 100 + 4, cardY - 4);
        ctx.rotate(Math.PI / 4);
        ctx.fillRect(0, 0, cornerSize, cornerSize);
        ctx.restore();
        
        ctx.save();
        ctx.translate(100 - 4, cardY + cardHeight + 4);
        ctx.rotate(Math.PI / 4);
        ctx.fillRect(0, 0, cornerSize, cornerSize);
        ctx.restore();
        
        ctx.save();
        ctx.translate(canvas.width - 100 + 4, cardY + cardHeight + 4);
        ctx.rotate(Math.PI / 4);
        ctx.fillRect(0, 0, cornerSize, cornerSize);
        ctx.restore();

        // Benefit number badge
        ctx.fillStyle = '#f59e0b';
        ctx.fillRect(120, cardY + 15, 40, 30);
        ctx.fillStyle = '#000000';
        ctx.font = 'bold 20px Manrope, system-ui';
        ctx.textAlign = 'center';
        ctx.fillText(`${index + 1}`, 140, cardY + 35);

        // Benefit title
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 28px Manrope, system-ui';
        ctx.textAlign = 'left';
        ctx.fillText(benefit.title, 180, cardY + 35);

        // Benefit description
        ctx.fillStyle = '#92adc9';
        ctx.font = '20px Manrope, system-ui';
        ctx.fillText(benefit.description, 180, cardY + 65);

        yPosition += 110;
      });

      yPosition += 60;

      // Requirements Section with Roman styling
      ctx.fillStyle = '#1172d4';
      ctx.font = 'bold 42px Manrope, system-ui';
      ctx.textAlign = 'left';
      ctx.fillText('🛡️ REQUISITOS DA ALIANÇA', 100, yPosition);
      yPosition += 80;

      requirements.forEach((requirement, index) => {
        const cardY = yPosition - 15;
        const cardHeight = 90;
        
        // Professional card background with gradient
        const cardGradient = ctx.createLinearGradient(0, cardY, 0, cardY + cardHeight);
        cardGradient.addColorStop(0, '#192633');
        cardGradient.addColorStop(1, '#233648');
        ctx.fillStyle = cardGradient;
        ctx.fillRect(100, cardY, canvas.width - 200, cardHeight);
        
        // Roman card border
        ctx.strokeStyle = '#1172d4';
        ctx.lineWidth = 3;
        ctx.strokeRect(100, cardY, canvas.width - 200, cardHeight);
        
        // Corner decorations
        ctx.fillStyle = '#1172d4';
        const cornerSize = 8;
        ctx.save();
        ctx.translate(100 - 4, cardY - 4);
        ctx.rotate(Math.PI / 4);
        ctx.fillRect(0, 0, cornerSize, cornerSize);
        ctx.restore();
        
        ctx.save();
        ctx.translate(canvas.width - 100 + 4, cardY - 4);
        ctx.rotate(Math.PI / 4);
        ctx.fillRect(0, 0, cornerSize, cornerSize);
        ctx.restore();
        
        ctx.save();
        ctx.translate(100 - 4, cardY + cardHeight + 4);
        ctx.rotate(Math.PI / 4);
        ctx.fillRect(0, 0, cornerSize, cornerSize);
        ctx.restore();
        
        ctx.save();
        ctx.translate(canvas.width - 100 + 4, cardY + cardHeight + 4);
        ctx.rotate(Math.PI / 4);
        ctx.fillRect(0, 0, cornerSize, cornerSize);
        ctx.restore();

        // Requirement number badge
        ctx.fillStyle = '#f59e0b';
        ctx.fillRect(120, cardY + 15, 40, 30);
        ctx.fillStyle = '#000000';
        ctx.font = 'bold 20px Manrope, system-ui';
        ctx.textAlign = 'center';
        ctx.fillText(`${index + 1}`, 140, cardY + 35);

        // Requirement title
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 28px Manrope, system-ui';
        ctx.textAlign = 'left';
        ctx.fillText(requirement.title, 180, cardY + 35);

        // Requirement description
        ctx.fillStyle = '#92adc9';
        ctx.font = '20px Manrope, system-ui';
        ctx.fillText(requirement.description, 180, cardY + 65);

        yPosition += 110;
      });

      // Professional footer with Roman styling
      const footerY = canvas.height - 140;
      const footerGradient = ctx.createLinearGradient(0, footerY, 0, canvas.height - 60);
      footerGradient.addColorStop(0, '#233648');
      footerGradient.addColorStop(1, '#111a22');
      ctx.fillStyle = footerGradient;
      ctx.fillRect(60, footerY, canvas.width - 120, 80);
      
      // Footer Roman border
      drawRomanBorder(60, footerY, canvas.width - 120, 80, '#f59e0b', '#34d399');
      
      // Footer text
      ctx.fillStyle = '#92adc9';
      ctx.font = '22px Manrope, system-ui';
      ctx.textAlign = 'center';
      ctx.fillText('🏛️ Gerado pela Brinks Aliança - Unidos Somos Mais Fortes 🏛️', canvas.width / 2, footerY + 50);

      // Convert canvas to blob and download
      canvas.toBlob((blob) => {
        if (blob) {
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = `brinks-alianca-imagem-oficial-${Date.now()}.png`;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
          
          toast.success('Imagem oficial gerada e baixada!');
        } else {
          throw new Error('Erro ao gerar a imagem');
        }
      }, 'image/png', 1.0);

    } catch (error) {
      console.error('Erro ao gerar imagem oficial:', error);
      toast.error('Erro ao gerar a imagem oficial. Tente novamente.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
      <div className="flex flex-col items-center gap-4 mt-8">
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-2">Imagem Oficial da Aliança</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Baixe oficialmente
          </p>
        </div>
        
        <Button
          onClick={generateReport}
          disabled={isGenerating}
          className="flex items-center gap-2 bg-gradient-to-r from-brinks-blue to-brinks-green hover:from-brinks-blue/80 hover:to-brinks-green/80 text-white px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          {isGenerating ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Gerando Imagem...
            </>
          ) : (
            <>
              <FileImage className="w-5 h-5" />
              <Download className="w-4 h-4" />
              Baixar Imagem Oficial
            </>
          )}
        </Button>
      </div>
  );
};