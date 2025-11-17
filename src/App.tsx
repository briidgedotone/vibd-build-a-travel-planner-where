import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import Dashboard from '@/components/Dashboard'
import { TravelPlanProvider } from '@/context/TravelPlanContext'
import { DestinationProvider } from '@/context/DestinationContext'

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  
  return (
    <TravelPlanProvider>
      <DestinationProvider>
        <div className="min-h-screen flex flex-col">
          <Navbar onMenuClick={() => setSidebarOpen(true)} />
          <div className="flex flex-1">
            <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
            <main className="flex-1">
              <Dashboard />
            </main>
          </div>
        </div>
      </DestinationProvider>
    </TravelPlanProvider>
  )
}