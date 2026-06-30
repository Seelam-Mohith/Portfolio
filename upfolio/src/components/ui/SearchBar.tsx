import { Search } from 'lucide-react'
import { useStore } from '../../store/useStore'
import { cn } from '../../utils'

interface SearchBarProps {
  className?: string
  placeholder?: string
}

export function SearchBar({ className, placeholder = 'Search...' }: SearchBarProps) {
  const { searchQuery, setSearchQuery } = useStore()

  return (
    <div className={cn('relative group', className)}>
      <Search
        size={16}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary group-focus-within:text-primary transition-colors"
      />
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-9 pr-4 py-2 bg-surface border border-border rounded-lg text-sm text-text placeholder-text-secondary/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
      />
    </div>
  )
}
