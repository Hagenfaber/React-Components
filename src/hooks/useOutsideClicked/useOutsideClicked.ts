import { RefObject, useEffect, useState } from "react";

// TODO: add stories to show effect

/**
 * Monitors an element to see if the user is clicking outside of this element(s).
 * @param ref The element(s) to monitor for being clicked outside of.
 * @param callback The function to trigger when the monitored element(s) has been clicked outside of.
 */
export const useOutsideClicked = (ref: RefObject<HTMLElement> | RefObject<HTMLElement>[], callback: () => void) => {
  const [isMouseDownInside, setIsMouseDownInside] = useState<boolean>(false);
  const refs = Array.isArray(ref) ? ref : [ref];

  const handleMouseDown = (event: MouseEvent) => {
    setIsMouseDownInside(refs.some(r => r.current != null && event.target instanceof Node && r.current.contains(event.target)));
  };

  const handleMouseUp = (event: MouseEvent) => {
    if (isMouseDownInside === false && refs.some(r => r.current != null && event.target instanceof Node && !r.current.contains(event.target))) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  });
};
