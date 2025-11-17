import { X as XIcon, Compass as CompassIcon, Map as MapIcon, Calendar as CalendarIcon, Clock as ClockIcon } from 'lucide-react'
import { useTravelPlans } from '@/context/TravelPlanContext'
import { formatDistance } from 'date-fns'

interface SidebarProps {
  open: boolean
  onClose: () => void
}

export default function Sidebar({ open, onClose }: SidebarProps) {
  const { travelPlans, setActivePlan } = useTravelPlans()
  
  const handleSelectPlan = (id: string) => {
    setActivePlan(id)
    onClose()
  }
  
  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-20 bg-black bg-opacity-50 md:hidden"
          onClick={onClose}
        />
      )}
    
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-white shadow-lg transform transition-transform duration-300 md:translate-x-0 md:static md:z-0 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="h-full flex flex-col">
          <div className="p-4 border-b border-gray-200 flex items-center justify-between">
            <h2 className="text-lg font-medium text-gray-800">My Travel Plans</h2>
            <button
              onClick={onClose}
              className="p-2 rounded-md text-gray-500 hover:text-gray-600 hover:bg-gray-100 md:hidden"
            >
              <XIcon className="h-5 w-5" />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4">
            <div className="mb-4">
              <button className="btn btn-primary w-full">
                Create New Plan
              </button>
            </div>
            
            {travelPlans.length === 0 ? (
              <div className="text-center py-6">
                <CompassIcon className="h-12 w-12 mx-auto text-gray-400" />
                <p className="mt-2 text-gray-500">No travel plans yet</p>
                <p className="text-sm text-gray-400">
                  Create your first itinerary to get started
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {travelPlans.map(plan => (
                  <div
                    key={plan.id}
                    className="card cursor-pointer hover:bg-gray-50"
                    onClick={() => handleSelectPlan(plan.id)}
                  >
                    <h3 className="font-medium text-gray-900">{plan.name}</h3>
                    <div className="mt-2 flex items-center text-sm text-gray-500">
                      <MapIcon className="h-4 w-4 mr-1" />
                      <span>{plan.destinations.length} destinations</span>
                    </div>
                    <div className="mt-1 flex items-center text-sm text-gray-500">
                      <CalendarIcon className="h-4 w-4 mr-1" />
                      <span>{plan.startDate ? new Date(plan.startDate).toLocaleDateString() : 'Not scheduled'}</span>
                    </div>
                    <div className="mt-1 flex items-center text-sm text-gray-500">
                      <ClockIcon className="h-4 w-4 mr-1" />
                      <span>
                        {plan.updatedAt ? 
                          `Updated ${formatDistance(new Date(plan.updatedAt), new Date(), { addSuffix: true })}` : 
                          'Just created'
                        }
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}