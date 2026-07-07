import { useState } from 'react'
import { locationService } from '../services/locationService'
import type { CreateLocationPayload } from '../types/location'

export function useCreateLocation() {
  const [isLoading, setIsLoading] = useState(false)

  async function create(payload: CreateLocationPayload) {
    setIsLoading(true)

    try {
      return await locationService.createLocation(payload)
    } finally {
      setIsLoading(false)
    }
  }

  return {
    create,
    isLoading,
  }
}