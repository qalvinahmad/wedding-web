export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) {
  const baseStyles = 'font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2'
  
  const variants = {
    primary: 'bg-rose-500 text-white hover:bg-rose-600 focus:ring-rose-300',
    secondary: 'bg-white text-rose-500 border-2 border-rose-500 hover:bg-rose-50 focus:ring-rose-300',
    ghost: 'text-rose-500 hover:bg-rose-50 focus:ring-rose-300'
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }
  
  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
