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

  /**
   * serve to commence the timer, suitable for any situations
   * i.e. using side effects or user fire events
   */
  function initiate() {
    setCountDown(second);
  }

  /**
   * straight forward method, very handy to provide control
   * to the component in stop the timer
   */
  function reset() {
    setCountDown(0);
  }

  return [countDown, { initiate, reset }];
}
