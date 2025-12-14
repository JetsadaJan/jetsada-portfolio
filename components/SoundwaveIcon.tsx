
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

  const startupSweepDuration = 0.6; 
  const pulseAnimationDuration = '3.0s'; // MODIFIED: Increased duration for slower idle animation

  const handleMouseMove = (event: React.MouseEvent<SVGSVGElement>) => {
    if (!svgRef.current || !animate) return;
    setIsHovering(true); // Mouse is over the SVG
    const rect = svgRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const svgNormalizedX = (x / rect.width) * svgViewBoxWidth;
    
    const currentBarIndex = Math.min(numBars - 1, Math.max(0, Math.floor(svgNormalizedX / (barWidth + barSpacing))));
    setHoveredBarIndex(currentBarIndex);
  };

  const handleMouseLeave = () => {
    if (!animate) return;
    setHoveredBarIndex(null);
    setIsHovering(false); // Mouse has left the SVG
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
      onMouseEnter={animate ? () => setIsHovering(true) : undefined} // Ensure isHovering is true on enter
    >
      {staticBarHeights.map((barHeight, index) => {
        const baseRectProps = {
          key: index,
          x: index * (barWidth + barSpacing),
          y: (50 - barHeight) / 2,
          width: barWidth,
          height: barHeight,
        };

        let style: React.CSSProperties = {};
        
        if (animate) {
          style.opacity = 0.2; 
          style.transform = 'scaleY(0.1)';
          style.transformOrigin = '50% 50%';

          const individualSweepDelay = index * 0.04;
          const pulseAnimationDelayAfterSweep = individualSweepDelay + startupSweepDuration; // Renamed for clarity
          const waveSpread = 4; 

          const isJsControlled = isHovering && hoveredBarIndex !== null && Math.abs(index - hoveredBarIndex) <= waveSpread;

          if (isJsControlled) {
            style.transition = 'transform 0.05s ease-out, opacity 0.05s ease-out';

            const distance = Math.abs(index - hoveredBarIndex);
            const normalizedDistance = distance / waveSpread;
            const effectFactor = (Math.cos(normalizedDistance * Math.PI) + 1) / 2;
            
            const peakScale = 1.5; 
            const troughScale = 0.2;
            const scaleY_js = troughScale + (peakScale - troughScale) * effectFactor;

            const peakOpacity = 1.0;
            const troughOpacity = 0.3;
            const opacity_js = troughOpacity + (peakOpacity - troughOpacity) * effectFactor;
            
            style.transform = `scaleY(${scaleY_js})`;
            style.opacity = opacity_js;
            // No CSS animation properties, JS takes full control
          } else {
            // Apply CSS animations: startup sweep followed by either pulse or hover wiggle
            style.transition = 'none'; // Ensure no JS transition interferes

            const startupAnimConfig = {
              name: 'soundwave-startup-sweep',
              duration: `${startupSweepDuration}s`,
              timingFunction: 'ease-out',
              fillMode: 'forwards',
              iterationCount: '1',
              direction: 'normal',
              delay: `${individualSweepDelay}s`,
            };

            let loopAnimConfig;
            if (isHovering) { // Hovering, but this bar is not JS-controlled
              loopAnimConfig = {
                name: 'soundwave-hover-wiggle',
                duration: '1.2s', // Duration for the hover wiggle
                timingFunction: 'ease-in-out',
                fillMode: 'normal', // Wiggle doesn't need to hold end state if it loops well
                iterationCount: 'infinite',
                direction: 'alternate',
                // Delay to start after startup sweep, with a small stagger for the wiggle itself
                delay: `${individualSweepDelay + startupSweepDuration + (index * 0.03)}s`, 
              };
            } else { // Not hovering
              loopAnimConfig = {
                name: 'soundwave-pulse-css',
                duration: pulseAnimationDuration,
                timingFunction: 'ease-in-out',
                fillMode: 'normal', 
                iterationCount: 'infinite',
                direction: 'alternate',
                delay: `${pulseAnimationDelayAfterSweep}s`, // Use the clearly named variable
              };
            }
            
            const effectiveAnimations = [startupAnimConfig, loopAnimConfig];

            style.animationName = effectiveAnimations.map(a => a.name).join(', ');
            style.animationDuration = effectiveAnimations.map(a => a.duration).join(', ');
            style.animationTimingFunction = effectiveAnimations.map(a => a.timingFunction).join(', ');
            style.animationFillMode = effectiveAnimations.map(a => a.fillMode || 'normal').join(', ');
            style.animationIterationCount = effectiveAnimations.map(a => a.iterationCount).join(', ');
            style.animationDirection = effectiveAnimations.map(a => a.direction || 'normal').join(', ');
            style.animationDelay = effectiveAnimations.map(a => a.delay).join(', ');
          }
        } else { // animate is false (static display)
          style.opacity = 0.6; 
          style.transformOrigin = '50% 50%';
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
