
import { RefObject, useEffect } from 'react';

/**
 * Hook that alerts when you click outside of the passed ref(s)
 */
export function useOnClickOutside(
  refs: RefObject<HTMLElement>[] | RefObject<HTMLElement>,
  handler: (event: MouseEvent | TouchEvent) => void
) {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      // Check if we clicked on any of the refs
      const refsArray = Array.isArray(refs) ? refs : [refs];
      
      // If the click was inside the referenced element(s), do nothing
      const clickedInside = refsArray.some(ref => {
        const el = ref.current;
        if (!el || el.contains(event.target as Node)) {
          return true;
        }
        return false;
      });
      
      if (clickedInside) {
        return;
      }
      
      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [refs, handler]);
}
