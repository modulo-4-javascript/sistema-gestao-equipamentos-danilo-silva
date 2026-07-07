import { useState } from 'react'
import { locationService } from '../services/locationService'

export function useDeleteLocation() {
  const [isLoading, setIsLoading] = useState(false)

  async function remove(locationId: string) {
    setIsLoading(true)

    try {
      await locationService.deleteLocation(locationId)
    } finally {
      setIsLoading(false)
    }
  }

  return {
    remove,
    isLoading,
  }
}