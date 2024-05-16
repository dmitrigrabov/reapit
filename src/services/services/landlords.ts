import { z } from 'zod'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useFetchError } from '@/lib/useFetchError.ts'

export type useCreateLandlordArgs = {
  body: /** Request body used to create a new landlord */
  {
    active?: /** A flag determining whether or not the landlord is currently active */
    boolean | undefined
    solicitorId?: /** The unique identifier of the company acting as the landlord's solicitor */
    string | undefined
    officeId: /** The unique identifier of the office that is associated to the landlord */
    string
    source?: /** Request body used to set the source of a new landlord */
    | {
          id?: /** The unique identifier of the source of the landlord */
          string | undefined
          type?: /** The source type (office/source) */ string | undefined
        }
      | undefined
    related: /** A collection of contacts and/or companies associated to the landlord. The first item in the collection is considered the primary relationship */
    Array</** Request body used to create a new relationship between a landlord and a contact or company */
    {
      associatedId?: /** The unique identifier of the contact or company to create a relationship with */
      string | undefined
      associatedType?: /** The type of relationship to create (contact/company) */
      string | undefined
    }>
    metadata?: /** App specific metadata that to set against the landlord */
    Record<string, Record<string, never>> | undefined
  }
}
export type useCreateLandlordRelationshipArgs = {
  id: string
  body: /** Request body used to create or update a relationship between a landlord and a contact or company */
  {
    associatedId: /** The unique identifier of the contact or company to create a relationship with */
    string
    associatedType: /** The type of relationship to create (contact/company) */
    string
    isMain: /** Flag denoting whether or not this relationship should be considered to be the main/primary relationship. Setting to true will automatically demote the existing primary relationship */
    boolean
  }
}

const createLandlordFn = async (args: useCreateLandlordArgs) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/landlords/`, {
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

export const useCreateLandlord = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createLandlordFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Landlords'] })
    }
  })
}

const createLandlordRelationshipFn = async (
  args: useCreateLandlordRelationshipArgs
) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/landlords/${args.id}/relationships`,
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

export const useCreateLandlordRelationship = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createLandlordRelationshipFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Landlords'] })
    }
  })
}
