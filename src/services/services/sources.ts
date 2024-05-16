import { z } from 'zod'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useFetchError } from '@/lib/useFetchError.ts'

export type useCreateSourceArgs = {
  body: /** Request body used to create a new source of business */
  {
    name: /** The name of the source or advertising publication */ string
    type: /** The type of the source (source/advertisement) */ string
    officeIds?: /** A collection of the unique identifiers of offices that regularly get business from the source */
    Array<string> | undefined
    departmentIds?: /** A collection of unique identifiers of departments that regularly get business from the source */
    Array<string> | undefined
  }
}

const createSourceFn = async (args: useCreateSourceArgs) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/sources/`, {
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

export const useCreateSource = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createSourceFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Sources'] })
    }
  })
}
