import { RefObject, useEffect } from "react";


function useOnClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: () => void
): void {
  useEffect(() => {
      window.addEventListener("click", (event) => {
        if (ref.current?.contains(event.target as Node)) {
          return;
        }
        handler();
      });
  });
}

export default useOnClickOutside;
