import { z } from 'zod'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useFetchError } from '@/lib/useFetchError.ts'

export type useCreateJournalEntryArgs = {
  body: /** Request body to create a journal entry */
  {
    typeId?: /** The unique identifier of the type the journal entry is related to.
Default value set to MI */
    string | undefined
    propertyId?: /** The unique identifier of the property the journal entry is related to. Can additionally be associated to another type (Required when 'associatedId' is not given) */
    string | undefined
    associatedType?: /** The entity type the journal entry has been raised against (applicant/contact/company/landlord/tenancy/worksOrder) (Required when 'associatedId' is given)
TypeId must be set to WO when passing worksOrder */
    string | undefined
    associatedId?: /** The unique identifier of the entity the journal entry has been raised against. Can additionally be associated to a property (Required when 'propertyId' is not given) */
    string | undefined
    description: /** The textual description of the journal entry event */
    string
    negotiatorId?: /** The identifier of the negotiator recording the journal entry */
    string | undefined
  }
}
export type useCreateBulkJournalEntryArgs = {
  body: /** Request body to create bulk journal entry */
  {
    createJournalEntry?: /** Collection of journal entries */
    | Array</** Request body to create a journal entry */
        {
          typeId?: /** The unique identifier of the type the journal entry is related to.
Default value set to MI */
          string | undefined
          propertyId?: /** The unique identifier of the property the journal entry is related to. Can additionally be associated to another type (Required when 'associatedId' is not given) */
          string | undefined
          associatedType?: /** The entity type the journal entry has been raised against (applicant/contact/company/landlord/tenancy/worksOrder) (Required when 'associatedId' is given)
TypeId must be set to WO when passing worksOrder */
          string | undefined
          associatedId?: /** The unique identifier of the entity the journal entry has been raised against. Can additionally be associated to a property (Required when 'propertyId' is not given) */
          string | undefined
          description: /** The textual description of the journal entry event */
          string
          negotiatorId?: /** The identifier of the negotiator recording the journal entry */
          string | undefined
        }>
      | undefined
  }
}

const createJournalEntryFn = async (args: useCreateJournalEntryArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/journalEntries/`,
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

export const useCreateJournalEntry = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createJournalEntryFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['JournalEntries'] })
    }
  })
}

const createBulkJournalEntryFn = async (
  args: useCreateBulkJournalEntryArgs
) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/journalEntries/bulk`,
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

export const useCreateBulkJournalEntry = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createBulkJournalEntryFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['JournalEntries'] })
    }
  })
}
