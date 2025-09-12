import React, { useState } from 'react';
import { Download, FileImage, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
const brinksLogo = 'https://i.ibb.co/Ndtp1L0z/brinks-logo-DHh-GHGPj.png';
const spartanIcon = 'https://i.ibb.co/27RT485N/spartan-icon-DJz-VHnam.png';

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

      // Set canvas dimensions for ultra-professional report
      canvas.width = 1600;
      canvas.height = 2000;

      // Ultra-professional Roman background with multiple layers
      const bgGradient = ctx.createRadialGradient(canvas.width/2, canvas.height/2, 0, canvas.width/2, canvas.height/2, canvas.height);
      bgGradient.addColorStop(0, '#1a2332'); // Darker center
      bgGradient.addColorStop(0.4, '#111a22'); // brinks-dark
      bgGradient.addColorStop(0.7, '#0f1219'); // Even darker
      bgGradient.addColorStop(1, '#06080c'); // Deep black
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Add sophisticated geometric pattern overlay
      ctx.globalAlpha = 0.1;
      ctx.strokeStyle = '#34d399';
      ctx.lineWidth = 1;
      for (let i = 0; i < canvas.width; i += 60) {
        for (let j = 0; j < canvas.height; j += 60) {
          ctx.save();
          ctx.translate(i + 30, j + 30);
          ctx.rotate(Math.PI / 4);
          ctx.strokeRect(-15, -15, 30, 30);
          ctx.restore();
        }
      }
      ctx.globalAlpha = 1;

      // Ultra-professional Roman border with luxury diamonds
      const drawRomanBorder = (x, y, width, height, primaryColor, accentColor) => {
        // Triple-layer border system
        ctx.lineWidth = 6;
        ctx.strokeStyle = primaryColor;
        ctx.strokeRect(x, y, width, height);
        
        ctx.lineWidth = 3;
        ctx.strokeStyle = accentColor;
        ctx.strokeRect(x + 3, y + 3, width - 6, height - 6);
        
        ctx.lineWidth = 1;
        ctx.strokeStyle = '#ffffff';
        ctx.strokeRect(x + 6, y + 6, width - 12, height - 12);
        
        // Luxury corner diamonds with gradient effect
        const drawLuxuryDiamond = (centerX, centerY, size) => {
          // Diamond shadow
          ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
          ctx.save();
          ctx.translate(centerX + 2, centerY + 2);
          ctx.rotate(Math.PI / 4);
          ctx.fillRect(-size/2, -size/2, size, size);
          ctx.restore();
          
          // Main diamond with gradient
          const diamondGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, size);
          diamondGradient.addColorStop(0, '#ffffff');
          diamondGradient.addColorStop(0.3, primaryColor);
          diamondGradient.addColorStop(0.7, accentColor);
          diamondGradient.addColorStop(1, '#000000');
          
          ctx.fillStyle = diamondGradient;
          ctx.save();
          ctx.translate(centerX, centerY);
          ctx.rotate(Math.PI / 4);
          ctx.fillRect(-size/2, -size/2, size, size);
          ctx.restore();
          
          // Diamond highlight
          ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
          ctx.save();
          ctx.translate(centerX - 3, centerY - 3);
          ctx.rotate(Math.PI / 4);
          ctx.fillRect(-size/6, -size/6, size/3, size/3);
          ctx.restore();
        };
        
        // Corner luxury diamonds
        drawLuxuryDiamond(x - 15, y - 15, 30);
        drawLuxuryDiamond(x + width + 15, y - 15, 30);
        drawLuxuryDiamond(x - 15, y + height + 15, 30);
        drawLuxuryDiamond(x + width + 15, y + height + 15, 30);
        
        // Side ornamental elements with glow effect
        const drawSideOrnament = (centerX, centerY, isVertical) => {
          // Glow effect
          ctx.shadowColor = accentColor;
          ctx.shadowBlur = 10;
          ctx.fillStyle = accentColor;
          
          if (isVertical) {
            ctx.fillRect(centerX - 8, centerY - 25, 16, 50);
            ctx.save();
            ctx.translate(centerX, centerY - 25);
            ctx.rotate(Math.PI / 4);
            ctx.fillRect(-6, -6, 12, 12);
            ctx.restore();
            ctx.save();
            ctx.translate(centerX, centerY + 25);
            ctx.rotate(Math.PI / 4);
            ctx.fillRect(-6, -6, 12, 12);
            ctx.restore();
          } else {
            ctx.fillRect(centerX - 25, centerY - 8, 50, 16);
            ctx.save();
            ctx.translate(centerX - 25, centerY);
            ctx.rotate(Math.PI / 4);
            ctx.fillRect(-6, -6, 12, 12);
            ctx.restore();
            ctx.save();
            ctx.translate(centerX + 25, centerY);
            ctx.rotate(Math.PI / 4);
            ctx.fillRect(-6, -6, 12, 12);
            ctx.restore();
          }
          
          ctx.shadowBlur = 0;
        };
        
        // Side ornaments
        drawSideOrnament(x - 20, y + height/2, true);
        drawSideOrnament(x + width + 20, y + height/2, true);
        drawSideOrnament(x + width/2, y - 20, false);
        drawSideOrnament(x + width/2, y + height + 20, false);
        
        // Inner decorative frame with Roman patterns
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
        ctx.lineWidth = 1;
        ctx.setLineDash([10, 5]);
        ctx.strokeRect(x + 20, y + 20, width - 40, height - 40);
        ctx.setLineDash([]);
        
        // Corner ornamental dots with glow
        ctx.shadowColor = '#ffffff';
        ctx.shadowBlur = 5;
        ctx.fillStyle = '#ffffff';
        [[x + 25, y + 25], [x + width - 25, y + 25], 
         [x + 25, y + height - 25], [x + width - 25, y + height - 25]].forEach(([dotX, dotY]) => {
          ctx.beginPath();
          ctx.arc(dotX, dotY, 4, 0, Math.PI * 2);
          ctx.fill();
        });
        ctx.shadowBlur = 0;
      };

      // Main report border frame
      drawRomanBorder(50, 50, canvas.width - 100, canvas.height - 100, '#1172d4', '#34d399');

      // Ultra-luxurious header with multiple gradient layers
      const headerHeight = 200;
      const headerY = 80;
      
      // Header background with luxury gradient
      const headerGradient = ctx.createLinearGradient(0, headerY, 0, headerY + headerHeight);
      headerGradient.addColorStop(0, '#0f1419'); // Dark top
      headerGradient.addColorStop(0.2, '#1172d4'); // Blue
      headerGradient.addColorStop(0.5, '#1a5fb4'); // Mid blue
      headerGradient.addColorStop(0.8, '#34d399'); // Green
      headerGradient.addColorStop(1, '#059669'); // Dark green
      ctx.fillStyle = headerGradient;
      ctx.fillRect(80, headerY, canvas.width - 160, headerHeight);
      
      // Header overlay pattern
      ctx.globalAlpha = 0.2;
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 1;
      for (let i = 80; i < canvas.width - 80; i += 40) {
        ctx.beginPath();
        ctx.moveTo(i, headerY);
        ctx.lineTo(i + 20, headerY + headerHeight);
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
      
      // Header luxury border
      drawRomanBorder(80, headerY, canvas.width - 160, headerHeight, '#fbbf24', '#ffffff');
      
      // Logo area with glow effect
      ctx.shadowColor = '#ffffff';
      ctx.shadowBlur = 20;
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(canvas.width / 2, headerY + 50, 25, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
      
      // Crown above logo
      ctx.fillStyle = '#fbbf24';
      ctx.save();
      ctx.translate(canvas.width / 2, headerY + 30);
      ctx.beginPath();
      ctx.moveTo(-15, 0);
      ctx.lineTo(0, -10);
      ctx.lineTo(15, 0);
      ctx.lineTo(10, 5);
      ctx.lineTo(-10, 5);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
      
      // Main title with multiple shadow layers
      const titleY = headerY + 110;
      
      // Deep shadow
      ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
      ctx.font = 'bold 72px Impact, system-ui';
      ctx.textAlign = 'center';
      ctx.fillText('BRINKS ALIANÇA', canvas.width / 2 + 4, titleY + 4);
      
      // Medium shadow
      ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
      ctx.fillText('BRINKS ALIANÇA', canvas.width / 2 + 2, titleY + 2);
      
      // Gradient title
      const titleGradient = ctx.createLinearGradient(0, titleY - 30, 0, titleY + 30);
      titleGradient.addColorStop(0, '#ffffff');
      titleGradient.addColorStop(0.5, '#fbbf24');
      titleGradient.addColorStop(1, '#f59e0b');
      ctx.fillStyle = titleGradient;
      ctx.fillText('BRINKS ALIANÇA', canvas.width / 2, titleY);
      
      // Title outline
      ctx.strokeStyle = '#000000';
      ctx.lineWidth = 2;
      ctx.strokeText('BRINKS ALIANÇA', canvas.width / 2, titleY);
      
      // Luxury subtitle
      ctx.font = 'bold 32px Georgia, serif';
      ctx.fillStyle = '#e5e7eb';
      ctx.fillText('DOCUMENTO OFICIAL PREMIUM', canvas.width / 2, titleY + 50);
      
      // Ultra-luxurious decorative separator
      const separatorY = headerY + headerHeight - 20;
      
      // Main separator line with gradient
      const sepGradient = ctx.createLinearGradient(150, separatorY, canvas.width - 150, separatorY);
      sepGradient.addColorStop(0, 'transparent');
      sepGradient.addColorStop(0.2, '#fbbf24');
      sepGradient.addColorStop(0.5, '#ffffff');
      sepGradient.addColorStop(0.8, '#fbbf24');
      sepGradient.addColorStop(1, 'transparent');
      ctx.strokeStyle = sepGradient;
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(150, separatorY);
      ctx.lineTo(canvas.width - 150, separatorY);
      ctx.stroke();
      
      // Central luxury ornament
      const ornamentX = canvas.width / 2;
      
      // Ornament glow
      ctx.shadowColor = '#fbbf24';
      ctx.shadowBlur = 15;
      
      // Large central diamond
      ctx.fillStyle = '#fbbf24';
      ctx.save();
      ctx.translate(ornamentX, separatorY);
      ctx.rotate(Math.PI / 4);
      ctx.fillRect(-12, -12, 24, 24);
      ctx.restore();
      
      // Smaller side diamonds
      [-40, 40].forEach(offset => {
        ctx.save();
        ctx.translate(ornamentX + offset, separatorY);
        ctx.rotate(Math.PI / 4);
        ctx.fillRect(-6, -6, 12, 12);
        ctx.restore();
      });
      
      ctx.shadowBlur = 0;
      
      let yPosition = 320;

      // Ultra-professional Benefits Section
      const sectionTitleY = yPosition;
      
      // Section background with luxury gradient
      const sectionBg = ctx.createLinearGradient(0, sectionTitleY - 20, 0, sectionTitleY + 60);
      sectionBg.addColorStop(0, 'rgba(52, 211, 153, 0.2)');
      sectionBg.addColorStop(1, 'rgba(52, 211, 153, 0.05)');
      ctx.fillStyle = sectionBg;
      ctx.fillRect(100, sectionTitleY - 20, canvas.width - 200, 60);
      
      // Section title with multiple effects
      ctx.shadowColor = '#34d399';
      ctx.shadowBlur = 10;
      ctx.fillStyle = '#34d399';
      ctx.font = 'bold 48px Impact, system-ui';
      ctx.textAlign = 'left';
      ctx.fillText('⚔️ BENEFÍCIOS PREMIUM', 120, sectionTitleY + 20);
      ctx.shadowBlur = 0;
      
      // Section decoration line
      ctx.strokeStyle = '#34d399';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(120, sectionTitleY + 35);
      ctx.lineTo(canvas.width - 120, sectionTitleY + 35);
      ctx.stroke();
      
      yPosition += 100;

      benefits.forEach((benefit, index) => {
        const cardY = yPosition - 15;
        const cardHeight = 110;
        
        // Ultra-luxury card background with multiple gradients
        const cardGradient = ctx.createLinearGradient(0, cardY, 0, cardY + cardHeight);
        cardGradient.addColorStop(0, '#1a2332');
        cardGradient.addColorStop(0.3, '#233648');
        cardGradient.addColorStop(0.7, '#192633');
        cardGradient.addColorStop(1, '#0f1419');
        ctx.fillStyle = cardGradient;
        ctx.fillRect(120, cardY, canvas.width - 240, cardHeight);
        
        // Card shadow effect
        ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
        ctx.fillRect(125, cardY + 5, canvas.width - 250, cardHeight);
        
        // Main card
        ctx.fillStyle = cardGradient;
        ctx.fillRect(120, cardY, canvas.width - 240, cardHeight);
        
        // Premium card border with glow
        ctx.shadowColor = '#34d399';
        ctx.shadowBlur = 8;
        ctx.strokeStyle = '#34d399';
        ctx.lineWidth = 4;
        ctx.strokeRect(120, cardY, canvas.width - 240, cardHeight);
        ctx.shadowBlur = 0;
        
        // Inner luxury border
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 1;
        ctx.strokeRect(125, cardY + 5, canvas.width - 250, cardHeight - 10);
        
        // Luxury corner diamonds
        const drawCardDiamond = (x, y, size) => {
          // Diamond shadow
          ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
          ctx.save();
          ctx.translate(x + 2, y + 2);
          ctx.rotate(Math.PI / 4);
          ctx.fillRect(-size/2, -size/2, size, size);
          ctx.restore();
          
          // Main diamond
          const diamondGrad = ctx.createRadialGradient(x, y, 0, x, y, size);
          diamondGrad.addColorStop(0, '#ffffff');
          diamondGrad.addColorStop(0.5, '#34d399');
          diamondGrad.addColorStop(1, '#059669');
          ctx.fillStyle = diamondGrad;
          ctx.save();
          ctx.translate(x, y);
          ctx.rotate(Math.PI / 4);
          ctx.fillRect(-size/2, -size/2, size, size);
          ctx.restore();
          
          // Highlight
          ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
          ctx.save();
          ctx.translate(x - 2, y - 2);
          ctx.rotate(Math.PI / 4);
          ctx.fillRect(-size/6, -size/6, size/3, size/3);
          ctx.restore();
        };
        
        // Corner luxury diamonds
        drawCardDiamond(120 - 8, cardY - 8, 16);
        drawCardDiamond(canvas.width - 120 + 8, cardY - 8, 16);
        drawCardDiamond(120 - 8, cardY + cardHeight + 8, 16);
        drawCardDiamond(canvas.width - 120 + 8, cardY + cardHeight + 8, 16);

        // Premium number badge with glow
        const badgeX = 140;
        const badgeY = cardY + 20;
        const badgeSize = 50;
        
        // Badge shadow
        ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
        ctx.fillRect(badgeX + 3, badgeY + 3, badgeSize, badgeSize - 10);
        
        // Badge gradient
        const badgeGradient = ctx.createRadialGradient(badgeX + badgeSize/2, badgeY + badgeSize/2, 0, badgeX + badgeSize/2, badgeY + badgeSize/2, badgeSize);
        badgeGradient.addColorStop(0, '#fbbf24');
        badgeGradient.addColorStop(0.7, '#f59e0b');
        badgeGradient.addColorStop(1, '#d97706');
        ctx.fillStyle = badgeGradient;
        ctx.fillRect(badgeX, badgeY, badgeSize, badgeSize - 10);
        
        // Badge border
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2;
        ctx.strokeRect(badgeX, badgeY, badgeSize, badgeSize - 10);
        
        // Badge number with glow
        ctx.shadowColor = '#000000';
        ctx.shadowBlur = 3;
        ctx.fillStyle = '#000000';
        ctx.font = 'bold 24px Impact, system-ui';
        ctx.textAlign = 'center';
        ctx.fillText(`${index + 1}`, badgeX + badgeSize/2, badgeY + 30);
        ctx.shadowBlur = 0;

        // Benefit title with gradient and glow
        const titleX = 210;
        ctx.shadowColor = '#34d399';
        ctx.shadowBlur = 5;
        const titleGrad = ctx.createLinearGradient(titleX, cardY + 25, titleX, cardY + 55);
        titleGrad.addColorStop(0, '#ffffff');
        titleGrad.addColorStop(1, '#e5e7eb');
        ctx.fillStyle = titleGrad;
        ctx.font = 'bold 32px Impact, system-ui';
        ctx.textAlign = 'left';
        ctx.fillText(benefit.title, titleX, cardY + 45);
        ctx.shadowBlur = 0;

        // Benefit description with elegant styling
        ctx.fillStyle = '#94a3b8';
        ctx.font = '22px Georgia, serif';
        ctx.fillText(benefit.description, titleX, cardY + 75);
        
        // Decorative line under text
        ctx.strokeStyle = '#34d399';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(titleX, cardY + 85);
        ctx.lineTo(canvas.width - 150, cardY + 85);
        ctx.stroke();

        yPosition += 130;
      });

      yPosition += 80;

      // Ultra-professional Requirements Section
      const reqSectionTitleY = yPosition;
      
      // Section background with luxury gradient
      const reqSectionBg = ctx.createLinearGradient(0, reqSectionTitleY - 20, 0, reqSectionTitleY + 60);
      reqSectionBg.addColorStop(0, 'rgba(17, 114, 212, 0.2)');
      reqSectionBg.addColorStop(1, 'rgba(17, 114, 212, 0.05)');
      ctx.fillStyle = reqSectionBg;
      ctx.fillRect(100, reqSectionTitleY - 20, canvas.width - 200, 60);
      
      // Section title with multiple effects
      ctx.shadowColor = '#1172d4';
      ctx.shadowBlur = 10;
      ctx.fillStyle = '#1172d4';
      ctx.font = 'bold 48px Impact, system-ui';
      ctx.textAlign = 'left';
      ctx.fillText('🛡️ REQUISITOS OBRIGATÓRIOS', 120, reqSectionTitleY + 20);
      ctx.shadowBlur = 0;
      
      // Section decoration line
      ctx.strokeStyle = '#1172d4';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(120, reqSectionTitleY + 35);
      ctx.lineTo(canvas.width - 120, reqSectionTitleY + 35);
      ctx.stroke();
      
      yPosition += 100;

      requirements.forEach((requirement, index) => {
        const cardY = yPosition - 15;
        const cardHeight = 110;
        
        // Ultra-luxury requirements card background
        const cardGradient = ctx.createLinearGradient(0, cardY, 0, cardY + cardHeight);
        cardGradient.addColorStop(0, '#1a2536');
        cardGradient.addColorStop(0.3, '#233654');
        cardGradient.addColorStop(0.7, '#192846');
        cardGradient.addColorStop(1, '#0f1826');
        ctx.fillStyle = cardGradient;
        ctx.fillRect(120, cardY, canvas.width - 240, cardHeight);
        
        // Card shadow effect
        ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
        ctx.fillRect(125, cardY + 5, canvas.width - 250, cardHeight);
        
        // Main card
        ctx.fillStyle = cardGradient;
        ctx.fillRect(120, cardY, canvas.width - 240, cardHeight);
        
        // Premium card border with glow
        ctx.shadowColor = '#1172d4';
        ctx.shadowBlur = 8;
        ctx.strokeStyle = '#1172d4';
        ctx.lineWidth = 4;
        ctx.strokeRect(120, cardY, canvas.width - 240, cardHeight);
        ctx.shadowBlur = 0;
        
        // Inner luxury border
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 1;
        ctx.strokeRect(125, cardY + 5, canvas.width - 250, cardHeight - 10);
        
        // Luxury corner diamonds (blue theme)
        const drawReqCardDiamond = (x, y, size) => {
          // Diamond shadow
          ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
          ctx.save();
          ctx.translate(x + 2, y + 2);
          ctx.rotate(Math.PI / 4);
          ctx.fillRect(-size/2, -size/2, size, size);
          ctx.restore();
          
          // Main diamond
          const diamondGrad = ctx.createRadialGradient(x, y, 0, x, y, size);
          diamondGrad.addColorStop(0, '#ffffff');
          diamondGrad.addColorStop(0.5, '#1172d4');
          diamondGrad.addColorStop(1, '#0c5aa6');
          ctx.fillStyle = diamondGrad;
          ctx.save();
          ctx.translate(x, y);
          ctx.rotate(Math.PI / 4);
          ctx.fillRect(-size/2, -size/2, size, size);
          ctx.restore();
          
          // Highlight
          ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
          ctx.save();
          ctx.translate(x - 2, y - 2);
          ctx.rotate(Math.PI / 4);
          ctx.fillRect(-size/6, -size/6, size/3, size/3);
          ctx.restore();
        };
        
        // Corner luxury diamonds
        drawReqCardDiamond(120 - 8, cardY - 8, 16);
        drawReqCardDiamond(canvas.width - 120 + 8, cardY - 8, 16);
        drawReqCardDiamond(120 - 8, cardY + cardHeight + 8, 16);
        drawReqCardDiamond(canvas.width - 120 + 8, cardY + cardHeight + 8, 16);

        // Premium number badge with blue theme
        const badgeX = 140;
        const badgeY = cardY + 20;
        const badgeSize = 50;
        
        // Badge shadow
        ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
        ctx.fillRect(badgeX + 3, badgeY + 3, badgeSize, badgeSize - 10);
        
        // Badge gradient (blue theme)
        const badgeGradient = ctx.createRadialGradient(badgeX + badgeSize/2, badgeY + badgeSize/2, 0, badgeX + badgeSize/2, badgeY + badgeSize/2, badgeSize);
        badgeGradient.addColorStop(0, '#3b82f6');
        badgeGradient.addColorStop(0.7, '#1172d4');
        badgeGradient.addColorStop(1, '#0c5aa6');
        ctx.fillStyle = badgeGradient;
        ctx.fillRect(badgeX, badgeY, badgeSize, badgeSize - 10);
        
        // Badge border
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2;
        ctx.strokeRect(badgeX, badgeY, badgeSize, badgeSize - 10);
        
        // Badge number with glow
        ctx.shadowColor = '#000000';
        ctx.shadowBlur = 3;
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 24px Impact, system-ui';
        ctx.textAlign = 'center';
        ctx.fillText(`${index + 1}`, badgeX + badgeSize/2, badgeY + 30);
        ctx.shadowBlur = 0;

        // Requirement title with gradient and glow
        const titleX = 210;
        ctx.shadowColor = '#1172d4';
        ctx.shadowBlur = 5;
        const titleGrad = ctx.createLinearGradient(titleX, cardY + 25, titleX, cardY + 55);
        titleGrad.addColorStop(0, '#ffffff');
        titleGrad.addColorStop(1, '#e5e7eb');
        ctx.fillStyle = titleGrad;
        ctx.font = 'bold 32px Impact, system-ui';
        ctx.textAlign = 'left';
        ctx.fillText(requirement.title, titleX, cardY + 45);
        ctx.shadowBlur = 0;

        // Requirement description with elegant styling
        ctx.fillStyle = '#94a3b8';
        ctx.font = '22px Georgia, serif';
        ctx.fillText(requirement.description, titleX, cardY + 75);
        
        // Decorative line under text (blue theme)
        ctx.strokeStyle = '#1172d4';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(titleX, cardY + 85);
        ctx.lineTo(canvas.width - 150, cardY + 85);
        ctx.stroke();

        yPosition += 130;
      });

      // Ultra-luxurious footer with premium styling
      const footerY = canvas.height - 160;
      const footerHeight = 120;
      
      // Multi-layer footer background
      const footerGradient = ctx.createLinearGradient(0, footerY, 0, footerY + footerHeight);
      footerGradient.addColorStop(0, '#233654');
      footerGradient.addColorStop(0.3, '#1a2536');
      footerGradient.addColorStop(0.7, '#111a22');
      footerGradient.addColorStop(1, '#06080c');
      ctx.fillStyle = footerGradient;
      ctx.fillRect(80, footerY, canvas.width - 160, footerHeight);
      
      // Footer shadow
      ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
      ctx.fillRect(85, footerY + 5, canvas.width - 170, footerHeight);
      
      // Main footer
      ctx.fillStyle = footerGradient;
      ctx.fillRect(80, footerY, canvas.width - 160, footerHeight);
      
      // Ultra-luxury footer border
      drawRomanBorder(80, footerY, canvas.width - 160, footerHeight, '#fbbf24', '#ffffff');
      
      // Decorative pattern in footer
      ctx.globalAlpha = 0.1;
      ctx.strokeStyle = '#fbbf24';
      ctx.lineWidth = 2;
      for (let i = 100; i < canvas.width - 100; i += 80) {
        ctx.save();
        ctx.translate(i, footerY + footerHeight/2);
        ctx.rotate(Math.PI / 4);
        ctx.strokeRect(-10, -10, 20, 20);
        ctx.restore();
      }
      ctx.globalAlpha = 1;
      
      // Premium footer crown
      const crownY = footerY + 25;
      ctx.fillStyle = '#fbbf24';
      ctx.save();
      ctx.translate(canvas.width / 2, crownY);
      ctx.beginPath();
      ctx.moveTo(-25, 0);
      ctx.lineTo(-15, -15);
      ctx.lineTo(-5, -8);
      ctx.lineTo(0, -18);
      ctx.lineTo(5, -8);
      ctx.lineTo(15, -15);
      ctx.lineTo(25, 0);
      ctx.lineTo(15, 8);
      ctx.lineTo(-15, 8);
      ctx.closePath();
      ctx.fill();
      
      // Crown jewels
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(-8, -5, 3, 0, Math.PI * 2);
      ctx.arc(0, -10, 4, 0, Math.PI * 2);
      ctx.arc(8, -5, 3, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
      
      // Main footer text with multiple shadows and glow
      const footerTextY = footerY + 65;
      
      // Deep shadow
      ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
      ctx.font = 'bold 28px Impact, system-ui';
      ctx.textAlign = 'center';
      ctx.fillText('DOCUMENTO OFICIAL BRINKS ALIANÇA', canvas.width / 2 + 3, footerTextY + 3);
      
      // Glow effect
      ctx.shadowColor = '#fbbf24';
      ctx.shadowBlur = 10;
      
      // Gradient text
      const footerTextGrad = ctx.createLinearGradient(0, footerTextY - 15, 0, footerTextY + 15);
      footerTextGrad.addColorStop(0, '#ffffff');
      footerTextGrad.addColorStop(0.5, '#fbbf24');
      footerTextGrad.addColorStop(1, '#f59e0b');
      ctx.fillStyle = footerTextGrad;
      ctx.fillText('DOCUMENTO OFICIAL BRINKS ALIANÇA', canvas.width / 2, footerTextY);
      ctx.shadowBlur = 0;
      
      // Subtitle with elegance
      ctx.fillStyle = '#94a3b8';
      ctx.font = 'italic 20px Georgia, serif';
      ctx.fillText('⚔️ Unidos Somos Invencíveis - Divididos Somos Vulneráveis ⚔️', canvas.width / 2, footerTextY + 30);
      
      // Date stamp
      const currentDate = new Date().toLocaleDateString('pt-BR');
      ctx.fillStyle = '#6b7280';
      ctx.font = '16px Monaco, monospace';
      ctx.fillText(`Gerado em: ${currentDate}`, canvas.width / 2, footerTextY + 50);

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