export interface Destination {
  id: string
  name: string
  location: string
  description: string
  imageUrl?: string
  coordinates?: {
    lat: number
    lng: number
  }
  visitDate?: string
  notes?: string
  category?: 'attraction' | 'hotel' | 'restaurant' | 'transport'
}

export interface TravelPlan {
  id: string
  name: string
  destinations: Destination[]
  startDate: string | null
  endDate: string | null
  createdAt: string
  updatedAt: string
}