import React from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({ 
  src, 
  alt, 
  width, 
  height, 
  priority = false, 
  className, 
  ...props 
}) => {
  // Simula diferentes tamanhos de imagem para srcset. 
  // Na produção, estes caminhos seriam gerados por um pipeline de build/CDN.
  const srcSet = `${src.replace('.jpeg', '-small.jpeg')} 480w, ${src.replace('.jpeg', '-medium.jpeg')} 800w, ${src} ${width}w`;
  
  const loading = priority ? 'eager' : 'lazy';
  const fetchPriority = priority ? 'high' : 'low';
  const decoding = priority ? 'auto' : 'async';

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={cn("object-cover", className)}
      loading={loading}
      fetchPriority={fetchPriority}
      decoding={decoding}
      // Usamos sizes e srcset para permitir que o navegador escolha a imagem mais eficiente
      sizes="(max-width: 640px) 480px, (max-width: 1024px) 800px, 1200px"
      srcSet={srcSet}
      {...props}
    />
  );
};

export default OptimizedImage;