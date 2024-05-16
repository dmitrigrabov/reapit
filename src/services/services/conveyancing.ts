import { z } from 'zod'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useFetchError } from '@/lib/useFetchError.ts'

export type useCreateDownwardChainArgs = {
  id: string
  body: /** Request body for associating this offer to another one below it in the chain */
  {
    offerId?: /** The unique identifier of the offer below this one in the chain. Should be left empty if the upward property is external (instructed by another agent) */
    string | undefined
    propertyAddress?: /** The address of the property below this one in the chain. (Required when 'offerId' is not provided) */
    string | undefined
    agent?: /** The name of the agent managing the sale of the property. (Required when 'offerId' is not provided) */
    string | undefined
    buyer?: /** The name of the buyer purchasing the property. (Required when 'offerId' is not provided) */
    string | undefined
    buyerSolicitorId?: /** The unique identifier of the solicitor / conveyancer that the buyer has instructed. (Required when 'offerId' is not provided) */
    string | undefined
  }
}
export type useCreateUpwardChainArgs = {
  id: string
  body: /** Request body for associating this offer to another one above it in the chain */
  {
    offerId?: /** The unique identifier of the offer above this one in the chain. Should be left empty if the upward property is external (instructed by another agent) */
    string | undefined
    propertyAddress?: /** The address of the property above this one in the chain. (Required when 'offerId' is not provided) */
    string | undefined
    agent?: /** The name of the agent managing the sale of the property. (Required when 'offerId' is not provided) */
    string | undefined
    vendor?: /** The name of the vendor selling the property. (Required when 'offerId' is not provided) */
    string | undefined
    vendorSolicitorId?: /** The unique identifier of the solicitor / conveyancer that the vendor has instructed. (Required when 'offerId' is not provided) */
    string | undefined
  }
}

const createDownwardChainFn = async (args: useCreateDownwardChainArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/conveyancing/${args.id}/downward`,
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

export const useCreateDownwardChain = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createDownwardChainFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Conveyancing'] })
    }
  })
}

const createUpwardChainFn = async (args: useCreateUpwardChainArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/conveyancing/${args.id}/upward`,
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

export const useCreateUpwardChain = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createUpwardChainFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Conveyancing'] })
    }
  })
}
