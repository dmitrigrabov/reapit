import { z } from 'zod'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useFetchError } from '@/lib/useFetchError.ts'

export type useCreateReferralArgs = {
  body: /** Create Referral Model */
  {
    referralTypeId: /** The unique identifier of the referral type */ string
    negotiatorId?: /** The unique identifier of the negotiator creating the referral */
    string | undefined
    propertyId?: /** The unique identifier of the property */ string | undefined
    applicantId?: /** The unique identifier of the applicant */
    string | undefined
    contactId: /** The unique identifier of the contact that has been referred */
    string
    amount?: /** The amount paid to the agent for the referral */
    number | undefined
  }
}

const createReferralFn = async (args: useCreateReferralArgs) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/referrals/`, {
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

export const useCreateReferral = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createReferralFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Referrals'] })
    }
  })
}
