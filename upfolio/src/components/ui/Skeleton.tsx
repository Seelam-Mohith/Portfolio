import { cn } from '../../utils'

interface SkeletonProps {
  className?: string
  variant?: 'text' | 'circular' | 'rectangular'
  width?: string | number
  height?: string | number
}

export function Skeleton({ className, variant = 'text', width, height }: SkeletonProps) {
  const base = 'animate-pulse bg-surface-hover rounded'

  const variants = {
    text: 'h-4 rounded',
    circular: 'rounded-full',
    rectangular: 'rounded-lg',
  }

  return (
    <div
      className={cn(base, variants[variant], className)}
      style={{ width, height }}
    />
  )
}

export function CardSkeleton() {
  return (
    <div className="rounded-xl border border-border bg-surface p-6 space-y-4">
      <Skeleton variant="rectangular" className="w-full h-40 rounded-lg" />
      <Skeleton className="w-3/4" />
      <Skeleton className="w-full" />
      <Skeleton className="w-full" />
      <div className="flex gap-2">
        <Skeleton className="w-16 h-6 rounded-full" />
        <Skeleton className="w-16 h-6 rounded-full" />
      </div>
    </div>
  )
}
