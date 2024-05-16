import { z } from 'zod'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useFetchError } from '@/lib/useFetchError.ts'

export type useCreateWorksOrderArgs = {
  body: /** Request body used to create a new works order */
  {
    companyId?: /** The unique identifier of the company that has been selected to perform the work */
    string | undefined
    propertyId: /** The unique identifier of the property where the work is to be carried out */
    string
    tenancyId?: /** The unique identifier of the tenancy that the works order originated from */
    string | undefined
    negotiatorId: /** The unique identifier of the negotiator that booked the works order */
    string
    typeId?: /** The unique id of the type of work that needs to be carried out */
    string | undefined
    status: /** The current status of the works order (pendingApproval/pendingQuote/raised/raisedToChase/landlordToComplete/complete/cancelled/quoteAccepted) */
    string
    description: /** A free text description of the work required */ string
    reporter: /** The party requesting the work to be carried out (landlord/tenant/other) */
    string
    priority?: /** The priority level of the works order (low/medium/high) */
    string | undefined
    booked?: /** The date when the works order was booked */ string | undefined
    required?: /** The date when the work is required to be completed by */
    string | undefined
    completed?: /** The date when the work was completed */ string | undefined
    items: /** Individual work items to attach to the works order */
    Array</** Representation of a works order item */
    {
      notes: /** The notes attached to the works order item */ string
      chargeTo: /** The party to be charged for the work being carried out (landlord/tenant) */
      string
      estimate?: /** The estimate of any costs associated with the work being carried out given to the party to be charged for the work */
      number | undefined
      estimateType?: /** The type of estimate supplied (agent/verbal/written) */
      string | undefined
      netAmount?: /** The net cost of the work to be carried out */
      number | undefined
      vatAmount?: /** The cost of the vat associated with the work */
      number | undefined
      reserveAmount?: /** The amount of funds to be held back by the agent in landlord payment runs to cover the cost of any works required by the works order item */
      number | undefined
    }>
    metadata?: /** App specific metadata to set against the works order */
    Record<string, Record<string, never>> | undefined
  }
}
export type useCreateWorksOrderItemArgs = {
  id: string
  body: /** Representation of a works order item */
  {
    notes: /** The notes attached to the works order item */ string
    chargeTo: /** The party to be charged for the work being carried out (landlord/tenant) */
    string
    estimate?: /** The estimate of any costs associated with the work being carried out given to the party to be charged for the work */
    number | undefined
    estimateType?: /** The type of estimate supplied (agent/verbal/written) */
    string | undefined
    netAmount?: /** The net cost of the work to be carried out */
    number | undefined
    vatAmount?: /** The cost of the vat associated with the work */
    number | undefined
    reserveAmount?: /** The amount of funds to be held back by the agent in landlord payment runs to cover the cost of any works required by the works order item */
    number | undefined
  }
}

const createWorksOrderFn = async (args: useCreateWorksOrderArgs) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/worksOrders/`, {
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

export const useCreateWorksOrder = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createWorksOrderFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['WorksOrders'] })
    }
  })
}

const createWorksOrderItemFn = async (args: useCreateWorksOrderItemArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/worksOrders/${args.id}/items`,
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

export const useCreateWorksOrderItem = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createWorksOrderItemFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['WorksOrders'] })
    }
  })
}
