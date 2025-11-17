import { Menu as MenuIcon, MapPin as MapPinIcon, Search as SearchIcon } from 'lucide-react'
import { useState } from 'react'
import { useDestinations } from '@/context/DestinationContext'

interface NavbarProps {
  onMenuClick: () => void
}

export default function Navbar({ onMenuClick }: NavbarProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const { searchDestinations } = useDestinations()
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    searchDestinations(searchTerm)
  }

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <button
              type="button"
              className="md:hidden p-2 rounded-md text-gray-500 hover:text-gray-600 hover:bg-gray-100"
              onClick={onMenuClick}
            >
              <MenuIcon className="h-6 w-6" />
            </button>
            <div className="flex items-center ml-2 md:ml-0">
              <MapPinIcon className="h-6 w-6 text-primary-500" />
              <h1 className="ml-2 text-xl font-bold text-gray-800">Travel Planner</h1>
            </div>
          </div>
          
          <form onSubmit={handleSearch} className="hidden md:flex max-w-lg w-full mx-4">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <SearchIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="input pl-10 w-full"
                placeholder="Search destinations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary ml-2">
              Search
            </button>
          </form>
          
          <div className="flex items-center">
            {/* Profile or additional actions could go here */}
          </div>
        </div>
        
        {/* Mobile search */}
        <form onSubmit={handleSearch} className="mt-4 md:hidden">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="input pl-10 w-full"
              placeholder="Search destinations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary w-full mt-2">
            Search
          </button>
        </form>
      </div>
    </header>
  )
}