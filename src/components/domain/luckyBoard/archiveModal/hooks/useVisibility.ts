import { useState } from "react";

export default function useVisibility(initialVisibility = false) {
  const [isVisible, setIsVisible] = useState(initialVisibility);

  const show = () => setIsVisible(true);
  const hide = () => setIsVisible(false);

  return {
    isVisible,
    show,
    hide,
  };
}
