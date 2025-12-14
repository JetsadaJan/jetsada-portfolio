
import React, { useState, useRef, useEffect } from 'react';
import { IconProps } from '../../types';

interface SoundwaveIconProps extends IconProps {
  animate?: boolean;
}

const SoundwaveIcon: React.FC<SoundwaveIconProps> = ({ className, animate = false }) => {
  const staticBarHeights = [10, 20, 40, 30, 50, 26, 14, 6, 20, 34, 46, 30, 20, 10, 26, 40, 14, 34, 20, 10];
  const numBars = staticBarHeights.length;
  const svgViewBoxWidth = 200; // Matches viewBox attribute
  const barWidth = 8; // Matches rect width attribute
  const barSpacing = 2; // Space between bars (10 total width for x calcs - 8 for bar, 2 for space)
  
  const svgRef = useRef<SVGSVGElement>(null);
  const [hoveredBarIndex, setHoveredBarIndex] = useState<number | null>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (hoveredBarIndex !== null) {
      setIsHovering(true);
    } else {
      setIsHovering(false);
    }
  }, [hoveredBarIndex]);

  const handleMouseMove = (event: React.MouseEvent<SVGSVGElement>) => {
    if (!svgRef.current || !animate) return;
    const rect = svgRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const svgNormalizedX = (x / rect.width) * svgViewBoxWidth;
    
    const currentBarIndex = Math.min(numBars - 1, Math.max(0, Math.floor(svgNormalizedX / (barWidth + barSpacing))));
    setHoveredBarIndex(currentBarIndex);
  };

  const handleMouseLeave = () => {
    if (!animate) return;
    setHoveredBarIndex(null);
  };

  return (
    <svg 
      ref={svgRef}
      viewBox="0 0 200 50" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className} 
      fill="currentColor"
      onMouseMove={animate ? handleMouseMove : undefined}
      onMouseLeave={animate ? handleMouseLeave : undefined}
    >
      {staticBarHeights.map((barHeight, index) => {
        const baseRectProps = {
          key: index,
          x: index * (barWidth + barSpacing),
          y: (50 - barHeight) / 2, // Center the bar vertically based on its height
          width: barWidth,
          height: barHeight,
        };

        let style: React.CSSProperties = {
          transformOrigin: '50% 50%', // Base style for all bars
        };

        if (animate) {
          // Initial state for animating bars: slightly thicker very thin signal
          style.opacity = 0.2; 
          style.transform = 'scaleY(0.1)'; // Matches the 0% keyframe of soundwave-startup-sweep

          const startupSweepDuration = 0.6; 
          const individualSweepDelay = index * 0.04; // Staggered delay for left-to-right
          const pulseAnimationDelay = individualSweepDelay + startupSweepDuration; // Pulse starts after sweep
          const pulseAnimationDuration = '2.5s'; // MODIFIED: Increased duration for slower idle animation

          // Apply animation properties
          style.animationName = 'soundwave-startup-sweep, soundwave-pulse-css';
          style.animationDuration = `${startupSweepDuration}s, ${pulseAnimationDuration}`;
          style.animationTimingFunction = 'ease-out, ease-in-out';
          style.animationFillMode = 'forwards, normal'; // Sweep holds end state, pulse loops
          style.animationIterationCount = '1, infinite'; // Sweep once, pulse infinitely
          style.animationDirection = 'normal, alternate'; // Pulse alternates
          style.animationDelay = `${individualSweepDelay}s, ${pulseAnimationDelay}s`;
          
          if (isHovering && hoveredBarIndex !== null) {
            style.animationName = 'none'; // Pause CSS animations during hover
            style.transition = 'transform 0.05s ease-out, opacity 0.05s ease-out'; // Smooth JS transitions

            const distance = Math.abs(index - hoveredBarIndex);
            const waveSpread = 4; 
            let scaleY_js = 0.2; // Base scale for bars far from cursor during hover
            let opacity_js = 0.3; // Base opacity for bars far from cursor during hover

            if (distance <= waveSpread) {
              const normalizedDistance = distance / waveSpread;
              // Cosine falloff for smooth wave effect
              const effectFactor = (Math.cos(normalizedDistance * Math.PI) + 1) / 2; 
              
              const peakScale = 1.5; 
              const troughScale = 0.2; // Min scale for bars under wave influence
              scaleY_js = troughScale + (peakScale - troughScale) * effectFactor;

              const peakOpacity = 1.0;
              const troughOpacity = 0.3; // Min opacity for bars under wave influence
              opacity_js = troughOpacity + (peakOpacity - troughOpacity) * effectFactor;
            }
            
            style.transform = `scaleY(${scaleY_js})`; // JS applies calculated transform
            style.opacity = opacity_js; // JS applies calculated opacity
          } else {
            // Not hovering: ensure CSS animations can resume smoothly without JS transition interference
            style.transition = 'none';
          }
        } else { // animate is false (static display)
          style.opacity = 0.6; // Default opacity for static bars
          // The rect's height attribute directly uses staticBarHeights[index]
        }
        
        return (
          <rect
            {...baseRectProps}
            style={style} 
          />
        );
      })}
    </svg>
  );
};

export default SoundwaveIcon;
