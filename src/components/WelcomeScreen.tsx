import { Compass as CompassIcon } from 'lucide-react'

export default function WelcomeScreen() {
  return (
    <div className="max-w-2xl mx-auto text-center py-16">
      <div className="bg-primary-50 rounded-full h-24 w-24 flex items-center justify-center mx-auto mb-6">
        <CompassIcon className="h-12 w-12 text-primary-500" />
      </div>
      
      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        Welcome to Travel Planner
      </h1>
      
      <p className="text-xl text-gray-600 mb-8">
        Plan your next adventure with ease. Search destinations, create itineraries, and visualize your journey.
      </p>
      
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 text-left">
        <h2 className="text-lg font-medium text-gray-900 mb-4">
          Get Started in 3 Simple Steps
        </h2>
        
        <ol className="space-y-4">
          <li className="flex items-start">
            <div className="bg-primary-100 rounded-full h-6 w-6 flex items-center justify-center mt-0.5 mr-3">
              <span className="text-primary-800 text-sm font-medium">1</span>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Search for Destinations</h3>
              <p className="text-gray-600">
                Find cities, attractions, and points of interest to add to your itinerary
              </p>
            </div>
          </li>
          
          <li className="flex items-start">
            <div className="bg-primary-100 rounded-full h-6 w-6 flex items-center justify-center mt-0.5 mr-3">
              <span className="text-primary-800 text-sm font-medium">2</span>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Build Your Itinerary</h3>
              <p className="text-gray-600">
                Add destinations to your travel plan and organize them by date
              </p>
            </div>
          </li>
          
          <li className="flex items-start">
            <div className="bg-primary-100 rounded-full h-6 w-6 flex items-center justify-center mt-0.5 mr-3">
              <span className="text-primary-800 text-sm font-medium">3</span>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Visualize Your Journey</h3>
              <p className="text-gray-600">
                See your destinations on a map and plan the perfect route
              </p>
            </div>
          </li>
        </ol>
        
        <div className="mt-6">
          <button className="btn btn-primary w-full">
            Create Your First Travel Plan
          </button>
        </div>
      </div>
    </div>
  )
}