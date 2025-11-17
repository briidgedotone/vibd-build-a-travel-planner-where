import { useEffect } from 'react'
import { useTravelPlans } from '@/context/TravelPlanContext'
import { useDestinations } from '@/context/DestinationContext'
import DestinationSearch from '@/components/DestinationSearch'
import ItineraryBuilder from '@/components/ItineraryBuilder'
import MapView from '@/components/MapView'
import WelcomeScreen from '@/components/WelcomeScreen'

export default function Dashboard() {
  const { activePlanId, travelPlans, createTravelPlan } = useTravelPlans()
  const { searchResults, searchDestinations } = useDestinations()
  
  useEffect(() => {
    // Create default travel plan if none exists
    if (travelPlans.length === 0) {
      createTravelPlan("My First Trip")
    }
  }, [travelPlans, createTravelPlan])
  
  const activePlan = travelPlans.find(plan => plan.id === activePlanId)
  
  return (
    <div className="container mx-auto p-4">
      {!activePlan ? (
        <WelcomeScreen />
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left column - Destination search */}
          <div className="lg:col-span-1">
            <DestinationSearch 
              searchResults={searchResults}
              onSearch={searchDestinations}
            />
          </div>
          
          {/* Center column - Itinerary builder */}
          <div className="lg:col-span-1">
            <ItineraryBuilder travelPlan={activePlan} />
          </div>
          
          {/* Right column - Map view */}
          <div className="lg:col-span-1">
            <MapView destinations={activePlan.destinations} />
          </div>
        </div>
      )}
    </div>
  )
}