import { useEffect, useState } from "react";

/**
 * reusable anywhere in our repo for timer,
 * it will return the timer and function to reset
 * the timer back to it's original
 * @param { number }    second    serve as timer
 * @returns any
 */
export function useTimer(second) {
  const [countDown, setCountDown] = useState(second);

  useEffect(() => {
    let interval = null;
    if (countDown === 0) {
      clearInterval(interval);
    } else {
      interval = setInterval(() => {
        setCountDown(countDown => countDown - 1);
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [countDown]);

  function initiate() {
    setCountDown(second);
  }

  function reset() {
    setCountDown(0);
  }

  return [countDown, { initiate, reset }];
}
