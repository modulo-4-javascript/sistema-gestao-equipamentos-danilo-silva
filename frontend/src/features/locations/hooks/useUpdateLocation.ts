import { useState } from 'react'
import { locationService } from '../services/locationService'
import type { UpdateLocationPayload } from '../types/location'

interface UpdateLocationParams {
  locationId: string
  payload: UpdateLocationPayload
}

export function useUpdateLocation() {
  const [isLoading, setIsLoading] = useState(false)

  async function update({ locationId, payload }: UpdateLocationParams) {
    setIsLoading(true)

    try {
      return await locationService.updateLocation(locationId, payload)
    } finally {
      setIsLoading(false)
    }
  }

  return {
    update,
    isLoading,
  }
}