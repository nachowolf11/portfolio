import { forwardRef } from 'react';
import { useSpring, animated } from 'react-spring';

export const SectionWithAnimation = forwardRef(({ isVisible, children, id },ref) => {
    const animationProps = useSpring({
        opacity: isVisible ? 1 : 0,
        config:{
            duration: 600
        }
      });
    
      return (
        <animated.div style={animationProps} ref={ref} id={id}>
          {children}
        </animated.div>
      );
})