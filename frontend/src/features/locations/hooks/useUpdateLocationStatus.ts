import { useState } from 'react'
import { locationService } from '../services/locationService'
import type { UpdateLocationStatusPayload } from '../types/location'

interface UpdateLocationStatusParams {
  locationId: string
  payload: UpdateLocationStatusPayload
}

export function useUpdateLocationStatus() {
  const [isLoading, setIsLoading] = useState(false)

  async function updateStatus({
    locationId,
    payload,
  }: UpdateLocationStatusParams) {
    setIsLoading(true)

    try {
      return await locationService.updateLocationStatus(locationId, payload)
    } finally {
      setIsLoading(false)
    }
  }

  return {
    updateStatus,
    isLoading,
  }
}