import { z } from 'zod'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useFetchError } from '@/lib/useFetchError.ts'

export type useCreateAreaArgs = {
  body: /** Request body used to create a new area */
  {
    name: /** The name of the area */ string
    type: /** The type of area (postcodes/polygon/group) */ string
    area: /** The location details (comma delimited list of postcodes, group ids or lat/long coordinate groups) */
    Array<string>
    departmentIds?: /** A collection of unique identifiers of departments associated to the area */
    Array<string> | undefined
    officeIds?: /** A collection of unique identifiers of offices attached to the area. The first item in the collection is considered the primary office */
    Array<string> | undefined
    parentId?: /** The unique identifier of the parent area, if the area should be registered as a child area/group in an existing area group */
    string | undefined
  }
}

const createAreaFn = async (args: useCreateAreaArgs) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/areas/`, {
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

export const useCreateArea = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createAreaFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Areas'] })
    }
  })
}
