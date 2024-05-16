import { z } from 'zod'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useFetchError } from '@/lib/useFetchError.ts'

export type useCreateNegotiatorArgs = {
  body: /** Request body used to create a new negotiator */
  {
    name: /** The name of the negotiator */ string
    jobTitle?: /** The job title of the negotiator */ string | undefined
    active?: /** A flag determining whether or not the negotiator is active */
    boolean | undefined
    officeId: /** The unique identifier of the office that the negotiator is attached to */
    string
    workPhone?: /** The work phone number of the negotiator */
    string | undefined
    mobilePhone?: /** The mobile phone number of the negotiator */
    string | undefined
    email?: /** The email address of the negotiator */ string | undefined
    diaryNegotiatorIds?: /** The identifiers of other negotiators whose diaries should be displayed to this negotiator when rendering diary/calendar view components in applicants */
    Array<string> | undefined
    diaryOfficeIds?: /** The identifiers of other offices whose diaries should be displayed to this negotiator when rendering diary/calendar view components in applicants */
    Array<string> | undefined
    metadata?: /** App specific metadata to set against the negotiator */
    Record<string, Record<string, never>> | undefined
  }
}

const createNegotiatorFn = async (args: useCreateNegotiatorArgs) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/negotiators/`, {
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

export const useCreateNegotiator = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createNegotiatorFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Negotiators'] })
    }
  })
}
