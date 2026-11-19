import { useCallback, useEffect, useRef, useState } from 'react'

export default function useCopyString() {
  const [copied, setCopied] = useState(false)
  const [copyError, setCopyError] = useState('')
  const isMounted = useRef(false)
  const resetTimer = useRef(null)

  useEffect(() => {
    isMounted.current = true

    return () => {
      isMounted.current = false
      if (resetTimer.current) clearTimeout(resetTimer.current)
    }
  }, [])

  const copyString = useCallback(async (text) => {
    if (resetTimer.current) {
      clearTimeout(resetTimer.current)
      resetTimer.current = null
    }
    setCopied(false)
    setCopyError('')

    try {
      await navigator.clipboard.writeText(text)
      if (!isMounted.current) return

      setCopied(true)
      resetTimer.current = setTimeout(() => {
        setCopied(false)
        resetTimer.current = null
      }, 2500)
    } catch (error) {
      if (!isMounted.current) return

      console.error('Falha ao copiar string', error)
      setCopyError('Não foi possível copiar. Tente novamente ou copie o texto manualmente.')
    }
  }, [])

  return { copied, copyError, copyString }
}
