import Link from 'next/link'

export default function NavigationItem({ href, children, isActive = false }) {
  return (
    <Link 
      href={href}
      className={`px-4 py-2 rounded-lg transition-all duration-200 hover:bg-rose-100 ${
        isActive ? 'bg-rose-100 text-rose-600' : 'text-gray-600 hover:text-rose-600'
      }`}
    >
      {children}
    </Link>
  )
}
