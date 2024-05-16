import { z } from 'zod'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useFetchError } from '@/lib/useFetchError.ts'

export type useCreateOfficeArgs = {
  body: /** Request body used to create a new office */
  {
    name: /** The name of the office */ string
    active?: /** A flag denoting whether or not this office is active */
    boolean | undefined
    manager?: /** The name of the office manager */ string | undefined
    address: /** Request body used to set the address of a new office */
    {
      buildingName?: /** The building name */ string | undefined
      buildingNumber?: /** The building number */ string | undefined
      line1: /** The first line of the address */ string
      line2?: /** The second line of the address */ string | undefined
      line3?: /** The third line of the address */ string | undefined
      line4?: /** The fourth line of the address */ string | undefined
      postcode?: /** The postcode */ string | undefined
      countryId?: /** The ISO-3166 country code that the address resides within */
      string | undefined
      geolocation?: /** Request body used to set the geolocation coordinates of a new address */
      | {
            latitude?: /** The latitude coordinate of the coordinate pair */
            number | undefined
            longitude?: /** The longitude coordinate of the coordinate pair */
            number | undefined
          }
        | undefined
    }
    workPhone?: /** The work phone number of the office */ string | undefined
    email?: /** The email address of the office */ string | undefined
    metadata?: /** App specific metadata to set against the office */
    Record<string, Record<string, never>> | undefined
  }
}

const createOfficeFn = async (args: useCreateOfficeArgs) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/offices/`, {
    method: 'POST',
    body: JSON.stringify(args.body),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return z.void().parse(data)
}

export const useCreateOffice = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createOfficeFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Offices'] })
    }
  })
}
