import { useEffect, useRef, useState } from 'react';

let timer: ReturnType<typeof setTimeout> | null = null;

const useCountAnimation = (targetNum: number, delay: number, inView: boolean) => {
  const [countNum, setCountNum] = useState(0);
  const startCount = useRef<boolean>(false);

  useEffect(() => {
    if (inView && !startCount.current) {
      startCount.current = true;

      if (!timer) {
        timer = setTimeout(() => {
          const interval = setInterval(() => {
            setCountNum((prevCount) => {
              if (prevCount >= targetNum) {
                clearInterval(interval);
                return targetNum;
              }
              return prevCount + 1;
            });
          }, delay);

          return () => clearInterval(interval);
        }, 500); // Adjust this delay to control the start of the animation
      }
    }

    return () => {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
    };
  }, [targetNum, delay, inView]);

  return countNum;
};

export default useCountAnimation;