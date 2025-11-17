import { useState } from 'react'
import { Search as SearchIcon, MapPin as MapPinIcon } from 'lucide-react'
import { Destination } from '@/types'
import { useTravelPlans } from '@/context/TravelPlanContext'

interface DestinationSearchProps {
  searchResults: Destination[]
  onSearch: (query: string) => void
}

export default function DestinationSearch({ searchResults, onSearch }: DestinationSearchProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const { addDestinationToPlan } = useTravelPlans()
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(searchTerm)
  }
  
  const handleAddDestination = (destination: Destination) => {
    addDestinationToPlan(destination)
  }
  
  return (
    <div className="card">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Find Destinations</h2>
      
      <form onSubmit={handleSearch}>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search cities, attractions..."
            className="input pl-10 w-full"
          />
        </div>
        <button 
          type="submit" 
          className="btn btn-primary w-full mt-3"
        >
          Search Destinations
        </button>
      </form>
      
      <div className="mt-6">
        <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">
          {searchResults.length > 0 ? 'Search Results' : 'Popular Destinations'}
        </h3>
        
        <div className="space-y-3">
          {searchResults.length > 0 ? (
            searchResults.map(destination => (
              <DestinationCard 
                key={destination.id}
                destination={destination}
                onAdd={() => handleAddDestination(destination)}
              />
            ))
          ) : (
            <div className="text-center py-4">
              <p className="text-gray-500">Search for destinations to get started</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

interface DestinationCardProps {
  destination: Destination
  onAdd: () => void
}

function DestinationCard({ destination, onAdd }: DestinationCardProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      {destination.imageUrl && (
        <div className="h-32 w-full overflow-hidden">
          <img
            src={destination.imageUrl}
            alt={destination.name}
            className="h-full w-full object-cover"
          />
        </div>
      )}
      
      <div className="p-3">
        <div className="flex items-start justify-between">
          <div>
            <h4 className="text-lg font-medium text-gray-900">{destination.name}</h4>
            <div className="flex items-center text-sm text-gray-500 mt-1">
              <MapPinIcon className="h-4 w-4 mr-1" />
              <span>{destination.location}</span>
            </div>
          </div>
        </div>
        
        <p className="text-sm text-gray-600 mt-2 line-clamp-2">
          {destination.description}
        </p>
        
        <div className="mt-3 flex justify-end">
          <button
            onClick={onAdd}
            className="btn btn-secondary text-sm"
          >
            Add to Itinerary
          </button>
        </div>
      </div>
    </div>
  )
}