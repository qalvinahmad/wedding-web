interface EventCardProps {
  title: string
  date: string
  time: string
  location: string
  description?: string
}

export default function EventCard({ title, date, time, location, description }: EventCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <div className="space-y-2 text-gray-600">
        <p className="flex items-center">
          <span className="font-medium">📅 {date}</span>
        </p>
        <p className="flex items-center">
          <span className="font-medium">🕐 {time}</span>
        </p>
        <p className="flex items-center">
          <span className="font-medium">📍 {location}</span>
        </p>
        {description && (
          <p className="text-sm mt-3">{description}</p>
        )}
      </div>
    </div>
  )
}
