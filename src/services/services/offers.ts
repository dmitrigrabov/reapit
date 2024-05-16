import { z } from 'zod'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useFetchError } from '@/lib/useFetchError.ts'

export type useCreateOfferArgs = {
  body: /** Request body used to create a new offer */
  {
    applicantId: /** The unique identifier of the applicant associated to the offer */
    string
    propertyId: /** The unique identifier of the property associated to the offer */
    string
    negotiatorId?: /** The unique identifier of the negotiator associated to the offer */
    string | undefined
    date: /** The date when the offer was made */ string
    amount: /** The monetary amount of the offer */ number
    status: /** The current status of the offer (pending/withdrawn/rejected/accepted/noteOfInterest) */
    string
    inclusions?: /** A free text field describing items that should be included in the sale */
    string | undefined
    exclusions?: /** A free text field describing items that are explicitly excluded from the sale */
    string | undefined
    conditions?: /** A free text field describing any other conditions set by either party that relate to the sale */
    string | undefined
    metadata?: /** App specific metadata to set against the offer */
    Record<string, Record<string, never>> | undefined
  }
}

const createOfferFn = async (args: useCreateOfferArgs) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/offers/`, {
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

export const useCreateOffer = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createOfferFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Offers'] })
    }
  })
}
