import { useState, useEffect } from 'react'

interface TypingTextProps {
  strings: string[]
  className?: string
}

export function TypingText({ strings, className }: TypingTextProps) {
  const [index, setIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [displayText, setDisplayText] = useState('')

  useEffect(() => {
    const currentString = strings[index]

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(currentString.slice(0, charIndex + 1))
          setCharIndex((prev) => prev + 1)
          if (charIndex + 1 === currentString.length) {
            setTimeout(() => setIsDeleting(true), 1500)
          }
        } else {
          setDisplayText(currentString.slice(0, charIndex - 1))
          setCharIndex((prev) => prev - 1)
          if (charIndex - 1 === 0) {
            setIsDeleting(false)
            setIndex((prev) => (prev + 1) % strings.length)
          }
        }
      },
      isDeleting ? 40 : 80
    )

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, index, strings])

  return (
    <span className={className}>
      {displayText}
      <span className="inline-block w-0.5 h-5 bg-primary ml-1 animate-pulse" />
    </span>
  )
}
