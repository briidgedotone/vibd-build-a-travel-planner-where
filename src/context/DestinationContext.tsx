import { createContext, useContext, useState, ReactNode } from 'react'
import { Destination } from '@/types'
import { mockDestinations } from '@/data/mockDestinations'

interface DestinationContextType {
  searchResults: Destination[]
  searchDestinations: (query: string) => void
}

const DestinationContext = createContext<DestinationContextType | undefined>(undefined)

export function DestinationProvider({ children }: { children: ReactNode }) {
  const [searchResults, setSearchResults] = useState<Destination[]>([])
  
  const searchDestinations = (query: string) => {
    if (!query.trim()) {
      setSearchResults([])
      return
    }
    
    // In a real app, this would be an API call
    // For now, we filter the mock data
    const results = mockDestinations.filter(dest => 
      dest.name.toLowerCase().includes(query.toLowerCase()) ||
      dest.location.toLowerCase().includes(query.toLowerCase()) ||
      dest.description.toLowerCase().includes(query.toLowerCase())
    )
    
    setSearchResults(results)
  }
  
  return (
    <DestinationContext.Provider
      value={{
        searchResults,
        searchDestinations
      }}
    >
      {children}
    </DestinationContext.Provider>
  )
}

export function useDestinations() {
  const context = useContext(DestinationContext)
  if (context === undefined) {
    throw new Error('useDestinations must be used within a DestinationProvider')
  }
  return context
}