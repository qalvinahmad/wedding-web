import { cn } from '@/lib/utils'

interface TypographyProps {
  children: React.ReactNode
  className?: string
}

export function Heading1({ children, className }: TypographyProps) {
  return (
    <h1 className={cn('font-lucy-rose text-4xl md:text-6xl lg:text-7xl font-normal leading-tight', className)}>
      {children}
    </h1>
  )
}

export function Heading2({ children, className }: TypographyProps) {
  return (
    <h2 className={cn('font-lucy-rose text-2xl md:text-3xl lg:text-4xl font-normal leading-tight', className)}>
      {children}
    </h2>
  )
}

export function Heading3({ children, className }: TypographyProps) {
  return (
    <h3 className={cn('font-lucy-rose text-xl md:text-2xl lg:text-3xl font-normal leading-tight', className)}>
      {children}
    </h3>
  )
}

export function BodyText({ children, className }: TypographyProps) {
  return (
    <p className={cn('font-cormorant text-base md:text-lg leading-relaxed', className)}>
      {children}
    </p>
  )
}

export function CTAButton({ children, className, ...props }: TypographyProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button 
      className={cn('font-poppins font-medium btn-primary', className)}
      {...props}
    >
      {children}
    </button>
  )
}
