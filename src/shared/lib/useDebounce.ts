import { useEffect, useState } from "react";

export function useDebounce(value: string, delay: number) {
  const [result, setResult] = useState<string>(value);
  useEffect(() => {
    const timer = setTimeout(() => {
      setResult(value);
    }, delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
  return result;
}
