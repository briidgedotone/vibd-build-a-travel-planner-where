import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { TravelPlan, Destination } from '@/types'
import { useLocalStorage } from '@/hooks/useLocalStorage'

interface TravelPlanContextType {
  travelPlans: TravelPlan[]
  activePlanId: string | null
  createTravelPlan: (name: string) => void
  updateTravelPlanDates: (planId: string, startDate: string, endDate: string) => void
  setActivePlan: (id: string) => void
  addDestinationToPlan: (destination: Destination) => void
  removeDestinationFromPlan: (planId: string, destinationId: string) => void
}

const TravelPlanContext = createContext<TravelPlanContextType | undefined>(undefined)

export function TravelPlanProvider({ children }: { children: ReactNode }) {
  const [travelPlans, setTravelPlans] = useLocalStorage<TravelPlan[]>('travelPlans', [])
  const [activePlanId, setActivePlanId] = useLocalStorage<string | null>('activePlanId', null)
  
  useEffect(() => {
    // Set the first plan as active if none is selected and plans exist
    if (!activePlanId && travelPlans.length > 0) {
      setActivePlanId(travelPlans[0].id)
    }
  }, [travelPlans, activePlanId, setActivePlanId])
  
  const createTravelPlan = (name: string) => {
    const newPlan: TravelPlan = {
      id: uuidv4(),
      name,
      destinations: [],
      startDate: null,
      endDate: null,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
    
    setTravelPlans([...travelPlans, newPlan])
    setActivePlanId(newPlan.id)
  }
  
  const updateTravelPlanDates = (planId: string, startDate: string, endDate: string) => {
    setTravelPlans(travelPlans.map(plan => 
      plan.id === planId 
        ? { 
            ...plan, 
            startDate: startDate || null, 
            endDate: endDate || null,
            updatedAt: new Date().toISOString()
          } 
        : plan
    ))
  }
  
  const setActivePlan = (id: string) => {
    setActivePlanId(id)
  }
  
  const addDestinationToPlan = (destination: Destination) => {
    if (!activePlanId) return
    
    setTravelPlans(travelPlans.map(plan => {
      if (plan.id === activePlanId) {
        const existingDestIndex = plan.destinations.findIndex(d => d.id === destination.id)
        
        if (existingDestIndex >= 0) {
          // Destination already exists, don't add duplicate
          return plan
        }
        
        return {
          ...plan,
          destinations: [...plan.destinations, destination],
          updatedAt: new Date().toISOString()
        }
      }
      return plan
    }))
  }
  
  const removeDestinationFromPlan = (planId: string, destinationId: string) => {
    setTravelPlans(travelPlans.map(plan => {
      if (plan.id === planId) {
        return {
          ...plan,
          destinations: plan.destinations.filter(d => d.id !== destinationId),
          updatedAt: new Date().toISOString()
        }
      }
      return plan
    }))
  }
  
  return (
    <TravelPlanContext.Provider 
      value={{
        travelPlans,
        activePlanId,
        createTravelPlan,
        updateTravelPlanDates,
        setActivePlan,
        addDestinationToPlan,
        removeDestinationFromPlan
      }}
    >
      {children}
    </TravelPlanContext.Provider>
  )
}

export function useTravelPlans() {
  const context = useContext(TravelPlanContext)
  if (context === undefined) {
    throw new Error('useTravelPlans must be used within a TravelPlanProvider')
  }
  return context
}