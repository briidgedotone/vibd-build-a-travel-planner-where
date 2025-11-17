import { useEffect, useRef } from 'react'
import { Destination } from '@/types'

interface MapViewProps {
  destinations: Destination[]
}

export default function MapView({ destinations }: MapViewProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    // This is a placeholder for an actual map integration
    // In a real implementation, you would use a library like Mapbox, Google Maps, or Leaflet
    if (mapContainerRef.current) {
      // Mock map rendering with HTML Canvas
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')
      
      if (ctx) {
        const { width, height } = mapContainerRef.current.getBoundingClientRect()
        canvas.width = width
        canvas.height = height
        
        // Draw a simple map placeholder
        ctx.fillStyle = '#e5e7eb'
        ctx.fillRect(0, 0, width, height)
        
        ctx.fillStyle = '#d1d5db'
        // Draw some "landmasses"
        ctx.beginPath()
        ctx.ellipse(width * 0.3, height * 0.4, width * 0.2, height * 0.15, 0, 0, Math.PI * 2)
        ctx.fill()
        
        ctx.beginPath()
        ctx.ellipse(width * 0.7, height * 0.6, width * 0.25, height * 0.2, 0, 0, Math.PI * 2)
        ctx.fill()
        
        // Draw destination markers
        destinations.forEach((_, index) => {
          // Randomize positions for demo
          const x = 100 + Math.random() * (width - 200)
          const y = 100 + Math.random() * (height - 200)
          
          // Draw marker
          ctx.fillStyle = '#0ea5e9'
          ctx.beginPath()
          ctx.arc(x, y, 8, 0, Math.PI * 2)
          ctx.fill()
          
          ctx.fillStyle = 'white'
          ctx.font = 'bold 12px sans-serif'
          ctx.textAlign = 'center'
          ctx.textBaseline = 'middle'
          ctx.fillText((index + 1).toString(), x, y)
          
          // Draw connections between points
          if (index > 0) {
            const prevX = 100 + Math.random() * (width - 200)
            const prevY = 100 + Math.random() * (height - 200)
            
            ctx.strokeStyle = '#0ea5e9'
            ctx.lineWidth = 2
            ctx.beginPath()
            ctx.moveTo(prevX, prevY)
            ctx.lineTo(x, y)
            ctx.stroke()
          }
        })
        
        // Draw compass
        const compassSize = 40
        const compassX = width - compassSize - 20
        const compassY = height - compassSize - 20
        
        ctx.fillStyle = 'white'
        ctx.beginPath()
        ctx.arc(compassX, compassY, compassSize, 0, Math.PI * 2)
        ctx.fill()
        
        ctx.strokeStyle = '#9ca3af'
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.arc(compassX, compassY, compassSize, 0, Math.PI * 2)
        ctx.stroke()
        
        ctx.fillStyle = '#1f2937'
        ctx.font = 'bold 14px sans-serif'
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillText('N', compassX, compassY - compassSize/2 + 10)
        ctx.fillText('E', compassX + compassSize/2 - 10, compassY)
        ctx.fillText('S', compassX, compassY + compassSize/2 - 10)
        ctx.fillText('W', compassX - compassSize/2 + 10, compassY)
        
        // Add a text overlay if no destinations
        if (destinations.length === 0) {
          ctx.fillStyle = 'rgba(255, 255, 255, 0.8)'
          ctx.fillRect(0, 0, width, height)
          
          ctx.fillStyle = '#6b7280'
          ctx.font = '16px sans-serif'
          ctx.textAlign = 'center'
          ctx.textBaseline = 'middle'
          ctx.fillText('Add destinations to visualize your route', width/2, height/2)
        }
        
        // Clear the map container and add the canvas
        if (mapContainerRef.current) {
          mapContainerRef.current.innerHTML = ''
          mapContainerRef.current.appendChild(canvas)
        }
      }
    }
  }, [destinations])
  
  return (
    <div className="card">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Route Map</h2>
      
      <div 
        ref={mapContainerRef} 
        className="w-full h-64 md:h-96 bg-gray-100 rounded-lg overflow-hidden"
      >
        {/* Map will be rendered here */}
        <div className="h-full w-full flex items-center justify-center text-gray-500">
          Loading map...
        </div>
      </div>
      
      <div className="mt-4">
        <p className="text-sm text-gray-600">
          {destinations.length > 0 
            ? `Showing ${destinations.length} destinations on the map` 
            : 'Add destinations to your itinerary to see them on the map'}
        </p>
        
        {destinations.length > 1 && (
          <button className="btn btn-secondary mt-3 w-full">
            Optimize Route
          </button>
        )}
      </div>
    </div>
  )
}