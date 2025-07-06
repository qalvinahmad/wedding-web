export function Heading1({ children, className = '' }) {
  return (
    <h1 className={`text-4xl md:text-6xl font-bold text-gray-800 ${className}`}>
      {children}
    </h1>
  )
}

export function Heading2({ children, className = '' }) {
  return (
    <h2 className={`text-3xl md:text-4xl font-bold text-gray-800 ${className}`}>
      {children}
    </h2>
  )
}

export function Heading3({ children, className = '' }) {
  return (
    <h3 className={`text-2xl md:text-3xl font-semibold text-gray-800 ${className}`}>
      {children}
    </h3>
  )
}

export function Paragraph({ children, className = '' }) {
  return (
    <p className={`text-gray-600 leading-relaxed ${className}`}>
      {children}
    </p>
  )
}
