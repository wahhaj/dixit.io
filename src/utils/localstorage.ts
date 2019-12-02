import { useEffect, useState } from "react"

export const useLocalStorage: (localStorageKey: string) => [string, React.Dispatch<React.SetStateAction<string>>] = (
  localStorageKey,
) => {
  const [value, setValue] = useState(localStorage.getItem(localStorageKey) || "")

  useEffect(() => localStorage.setItem(localStorageKey, value), [value])

  return [value, setValue]
}
