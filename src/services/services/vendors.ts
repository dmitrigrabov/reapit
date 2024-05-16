import { z } from 'zod'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useFetchError } from '@/lib/useFetchError.ts'

export type useCreateVendorRelationshipArgs = {
  id: string
  body: /** Request body used to create or update a relationship between a vendor and a contact or company */
  {
    associatedId: /** The unique identifier of the contact or company to create a relationship with */
    string
    associatedType: /** The type of relationship to create (contact/company) */
    string
    isMain: /** Flag denoting whether or not this relationship should be considered to be the main/primary relationship. Setting to true will automatically demote the existing primary relationship */
    boolean
  }
}

const createVendorRelationshipFn = async (
  args: useCreateVendorRelationshipArgs
) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/vendors/${args.id}/relationships`,
    {
      method: 'POST',
      body: JSON.stringify(args.body),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
      }
    }
  )

  const data = await res.json()

  return z.void().parse(data)
}

export const useCreateVendorRelationship = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createVendorRelationshipFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Vendors'] })
    }
  })
}
