import { useState } from 'react'
import { Calendar as CalendarIcon, Clock as ClockIcon, Trash2 as TrashIcon } from 'lucide-react'
import { format } from 'date-fns'
import { TravelPlan } from '@/types'
import { useTravelPlans } from '@/context/TravelPlanContext'

interface ItineraryBuilderProps {
  travelPlan: TravelPlan
}

export default function ItineraryBuilder({ travelPlan }: ItineraryBuilderProps) {
  const { updateTravelPlanDates, removeDestinationFromPlan } = useTravelPlans()
  const [startDate, setStartDate] = useState(travelPlan.startDate || '')
  const [endDate, setEndDate] = useState(travelPlan.endDate || '')
  
  const handleSaveDates = () => {
    updateTravelPlanDates(travelPlan.id, startDate, endDate)
  }
  
  const handleRemoveDestination = (destinationId: string) => {
    removeDestinationFromPlan(travelPlan.id, destinationId)
  }
  
  return (
    <div className="card">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">{travelPlan.name}</h2>
        <button className="text-primary-600 text-sm hover:text-primary-700">
          Rename
        </button>
      </div>
      
      <div className="p-4 bg-gray-50 rounded-lg mb-4">
        <h3 className="font-medium text-gray-800 mb-3 flex items-center">
          <CalendarIcon className="h-5 w-5 mr-2 text-gray-600" />
          Travel Dates
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Start Date
            </label>
            <input 
              type="date"
              className="input w-full"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              End Date
            </label>
            <input 
              type="date"
              className="input w-full"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
        </div>
        <button 
          className="btn btn-primary w-full"
          onClick={handleSaveDates}
        >
          Save Dates
        </button>
      </div>
      
      <h3 className="font-medium text-gray-800 mb-3">Your Itinerary</h3>
      
      {travelPlan.destinations.length === 0 ? (
        <div className="text-center py-6 bg-gray-50 rounded-lg">
          <p className="text-gray-500">No destinations added yet</p>
          <p className="text-sm text-gray-400 mt-1">
            Search and add destinations to build your itinerary
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {travelPlan.destinations.map((destination, index) => (
            <div 
              key={destination.id} 
              className="p-3 bg-white border border-gray-200 rounded-lg flex items-start"
            >
              <div className="bg-primary-100 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-1">
                <span className="text-primary-800 text-sm font-medium">{index + 1}</span>
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-gray-900">{destination.name}</h4>
                <div className="flex items-center text-sm text-gray-500 mt-1">
                  <ClockIcon className="h-4 w-4 mr-1" />
                  <span>
                    {destination.visitDate 
                      ? format(new Date(destination.visitDate), 'MMM d, yyyy') 
                      : 'Date not set'}
                  </span>
                </div>
                {destination.notes && (
                  <p className="text-sm text-gray-600 mt-1">{destination.notes}</p>
                )}
              </div>
              <button 
                onClick={() => handleRemoveDestination(destination.id)}
                className="p-1 text-gray-400 hover:text-red-500"
              >
                <TrashIcon className="h-5 w-5" />
              </button>
            </div>
          ))}
        </div>
      )}
      
      <div className="mt-4 flex justify-between">
        <button className="btn btn-secondary">
          Export Itinerary
        </button>
        <button className="btn btn-primary">
          Save Changes
        </button>
      </div>
    </div>
  )
}