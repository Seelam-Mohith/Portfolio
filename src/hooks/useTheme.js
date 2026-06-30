import { useEffect } from 'react'
import { useStore } from '../store/useStore'
import { applyTheme } from '../utils'

export function useTheme() {
  const { theme, setTheme, themeId, setThemeId } = useStore()

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  return { theme, setTheme, themeId, setThemeId }
}
